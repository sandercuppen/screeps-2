class StructureSpawnExtend extends StructureSpawn {
	constructor() {}

	run(): void | boolean {
		if (this.spawning) return;
		let room = this.room;
		// old spawning system
		const probe = (setup: obj) => {
			return setup.isValidSetup(room) && this.createCreepBySetup(setup);
		};

		const spawnDelay = Util.get(this.room.memory, 'spawnDelay', {});
		let busy = this.createCreepByQueue(room.spawnQueueHigh, 'High');
		// don't spawn lower if there is one waiting in the higher queue
		if (
			!busy &&
			(room.spawnQueueHigh.length === 0 || room.spawnQueueHigh.length === spawnDelay.High) &&
			Game.time % SPAWN_INTERVAL === 0
		) {
			busy = _.some(SpawnManager.priorityHigh, probe);
			if (!busy) busy = this.createCreepByQueue(room.spawnQueueMedium, 'Medium');
			if (!busy && (room.spawnQueueMedium.length === 0 || room.spawnQueueMedium.length === spawnDelay.Medium)) {
				busy = _.some(SpawnManager.priorityLow, probe);
				if (!busy) busy = this.createCreepByQueue(room.spawnQueueLow, 'Low');
			}
		}
		return busy;
	}

	createCreepBySetup(setup: obj): obj | null {
		if (LOG_TRACE)
			Log.trace(
				'Spawn',
				{
					setupType: this.type,
					rcl: this.room.RCL,
					energy: this.room.energyAvailable,
					maxEnergy: this.room.energyCapacityAvailable,
					Spawn: 'createCreepBySetup',
				},
				'creating creep',
			);
		const params = setup.buildParams(this);
		if (this.create(params.parts, params.name, params.setup)) return params;
		return null;
	}

	createCreepByQueue(queue: obj, level: string): null | boolean | number {
		const spawnDelay = Util.get(this.room.memory, 'spawnDelay', {});
		if (!queue) return null;
		else if (Memory.CPU_CRITICAL && spawnDelay[level] === queue.length) return null;
		let params;
		for (const index in queue) {
			const entry = queue[index];
			if (Memory.CPU_CRITICAL && !CRITICAL_ROLES.includes(entry.behaviour)) continue;
			else params = queue.splice(index, 1)[0];
		}
		if (!params) {
			if (queue.length)
				Log.module(
					this.pos.roomName,
					'No non-CRITICAL creeps to spawn, delaying spawn until CPU is not CRITICAL, or new entries are added.',
				);
			spawnDelay[level] = queue.length;
			return null;
		}
		delete spawnDelay[level];
		let cost = 0;
		params.parts.forEach((part: string) => {
			cost += BODYPART_COST[part];
		});
		// no parts
		if (cost === 0) {
			Log.error(`[${this.pos.roomName}]`, 'Zero parts body creep queued. Removed.');
			return false;
		}
		// wait with spawning until enough resources are available
		if (cost > this.room.remainingEnergyAvailable) {
			if (cost > this.room.energyCapacityAvailable || (cost > 300 && !this.room.creeps.length)) {
				Log.error(`[${this.pos.roomName}]`, 'Queued creep too big for room: ' + JSON.stringify(params));
				return false;
			}
			queue.unshift(params);
			return true;
		}
		let completeName;
		let stumb = params.name;
		for (let son = 1; completeName == null || Game.creeps[completeName] || Memory.population[completeName]; son++) {
			completeName = params.name + '-' + son;
		}
		params.name = completeName;
		let result = this.create(params.parts, params.name, params.behaviour || params.setup, params.destiny);
		if (!result) {
			params.name = stumb;
			queue.unshift(params);
		}
		return result;
	}

	create(body: string[], name: string, behaviour: string, destiny: string): boolean {
		if (body.length == 0) return false;
		let cb = this.spawnCreep(body, name);
		if (cb === OK) {
			let cost = 0;
			body.forEach(function(part) {
				cost += BODYPART_COST[part];
			});
			this.room.reservedSpawnEnergy += cost;
			PopManager.registerCreep(name, behaviour, cost, this.room, this.name, body, destiny);
			this.newSpawn = { name: name };
			CreepManager.spawningStarted.trigger({
				spawn: this.name,
				name: name,
				body: body,
				destiny: destiny,
				spawnTime: body.length * CREEP_SPAWN_TIME,
			});
			if (CENSUS_ANNOUNCEMENTS)
				Log.room(this.pos.roomName, Dye(COLOR_YELLOW, Util.emoji.baby, 'Spawning ' + name + '!'));
			return true;
		}
		if (CENSUS_ANNOUNCEMENTS)
			Log.error(
				`[${this.pos.roomName}]`,
				'Offspring failed: ' +
					Util.translateErrorCode(cb) +
					'<br/> - body: ' +
					JSON.stringify(_.countBy(body)) +
					'<br/> - name: ' +
					name +
					'<br/> - behaviour: ' +
					behaviour +
					'<br/> - destiny: ' +
					destiny,
			);
		return false;
	}
}

Util.define(StructureSpawn, StructureSpawnExtend);
