import { Component } from '../class/Component';

class TaskConstructor extends Component {
	private cache: obj = {};
	private runCache: obj = {};
	private tasks: any[] = [];

	public extend = (): void => {
		this.tasks = [
			TaskManager.attackController,
			TaskManager.claim,
			TaskManager.defense,
			TaskManager.delivery,
			TaskManager.guard,
			TaskManager.labTech,
			TaskManager.mining,
			TaskManager.pioneer,
			TaskManager.reputation,
			TaskManager.reserve,
			TaskManager.robbing,
			TaskManager.safeGen,
			TaskManager.scheduler,
		];
	};
	public fresh = (): void => {
		this.tasks.forEach(task => {
			if (task.fresh) task.fresh();
		});
	};
	public register = (): void => {
		this.tasks.forEach(task => {
			// Extending of any other kind
			if (task.register) task.register();
			// FlagManager Events
			if (task.run && !this.runCache[task.name]) this.runCache[task.name] = { run: task.run };
			if (task.handleFlagFound) FlagManager.found.on(flag => task.handleFlagFound(flag));
			if (task.handleFlagRemoved) FlagManager.FlagRemoved.on(flagName => task.handleFlagRemoved(flagName));
			// Creep Events
			if (task.handleSpawningStarted) CreepManager.spawningStarted.on(params => task.handleSpawningStarted(params));
			if (task.handleSpawningCompleted) CreepManager.spawningCompleted.on(creep => task.handleSpawningCompleted(creep));
			if (task.handleCreepDied) {
				CreepManager.predictedRenewal.on(creep => task.handleCreepDied(creep.name));
				CreepManager.died.on(name => task.handleCreepDied(name));
			}
			if (task.handleCreepError) CreepManager.error.on(errorData => task.handleCreepError(errorData));
			// Room events

			if (task.handleNewInvader) RoomManager.newInvader.on(invader => task.handleNewInvader(invader));
			if (task.handleKnownInvader) RoomManager.knownInvader.on(invaderID => task.handleKnownInvader(invaderID));
			if (task.handleGoneInvader) RoomManager.goneInvader.on(invaderID => task.handleGoneInvader(invaderID));
			if (task.handleRoomDied) RoomManager.collapsed.on(room => task.handleRoomDied(room));
		});
	};
	public run = (): void => {
		_.forEach(this.runCache, (n: any, k: string) => {
			try {
				n.run();
			} catch (e) {
				Log.error(`Error executing TaskManager "${k}"<br>${e.stack || e.toString()}`);
			}
		});
	};
	public cleanup = (subKeys: string, task: string, s: string): void => {
		this.removeQueued(this.memory(task, s), subKeys);
		this.clearMemory(task, s);
	};

	memory = (task: string, s: string): obj => {
		const memory = Util.get(Memory, ['tasks', task, s], {});
		// temporary migration, remove if in dev
		delete memory.queuedValid;
		delete memory.runningValid;
		delete memory.spawningValid;
		return memory;
	};

	removeQueued = (memory: obj, subKeys: string): void => {
		const removeEntries = (mem: obj) => {
			if (_.isUndefined(mem)) return;

			for (const entry of mem) {
				const room = Game.rooms[entry.room];
				for (const priority of ['spawnQueueLow', 'spawnQueueMedium', 'spawnQueueHigh']) {
					const queue = room[priority];
					const index = _.findIndex(queue, { name: entry.name });
					if (index >= 0) {
						queue.splice(index, 1);
						break;
					}
				}
			}
		};
		if (subKeys) {
			for (const subKey of subKeys) {
				removeEntries(memory[subKey]);
			}
		} else {
			removeEntries(memory);
		}
	};
	clearMemory = (task: string, s: string): void => {
		if (Memory.tasks[task] && Memory.tasks[task][s]) delete Memory.tasks[task][s];
	};
	cache = (task: string, s: string): any => {
		if (!this.cache[task]) this.cache[task] = {};
		if (!this.cache[task][s]) this.cache[task][s] = {};
		return this.cache[task][s];
	};
	clearCache = (task: string, s: string): void => {
		if (this.cache[task] && this.cache[task][s]) delete this.cache[task][s];
	};
	spawn = (creepDefinition: obj, destiny: obj, roomParams: obj, onQueued?: Function) => {
		// get nearest room
		let room = roomParams.explicit ? Game.rooms[roomParams.explicit] : RoomManager.findSpawnRoom(roomParams);
		if (!room) return null;
		// define new creep
		if (!destiny) destiny = {};
		if (!destiny.room && roomParams.targetRoom) destiny.room = roomParams.targetRoom;

		let parts = CreepManager.compileBody(room, creepDefinition);

		let name = `${creepDefinition.name || creepDefinition.behaviour}-${destiny.targetName}`;
		let creepSetup = {
			parts: parts,
			name: name,
			behaviour: creepDefinition.behaviour,
			destiny: destiny,
			queueRoom: room.name,
		};
		if (creepSetup.parts.length === 0) {
			// creep has no body.
			Log.error(
				'[TaskManager]',
				`${destiny.task} task tried to queue a zero parts body ${creepDefinition.behaviour} creep. Aborted.`,
			);
			return null;
		}
		// queue creep for spawning
		let queue = room['spawnQueue' + creepDefinition.queue] || room.spawnQueueLow;
		queue.push(creepSetup);
		// save queued creep to task memory
		if (onQueued) onQueued(creepSetup);
		return creepSetup;
	};
	addToQueue = (creepDef: obj, roomParams: obj, target: obj) => {
		if (roomParams.link) roomParams = { targetRoom: roomParams };
		if (!roomParams.targetRoom) return;
		const destiny = {};
		if (target) {
			destiny.targetName = target.name || target.id;
		} else {
			destiny.targetName = roomParams.targetRoom;
		}
		return this.spawn(creepDef, destiny, roomParams);
	};
	forceSpawn = (creepDef: obj, roomParams: obj, target: obj) => {
		if (roomParams.link) roomParams = { targetRoom: roomParams };
		if (!roomParams.targetRoom) return;
		const room = roomParams.explicit ? Game.rooms[roomParams.explicit] : RoomManager.findSpawnRoom(roomParams);
		if (!room) return;

		const destiny: obj = {};
		if (target) {
			destiny.targetName = target.name || target.id;
		} else {
			destiny.targetName = roomParams.targetRoom;
		}

		const parts = CreepManager.compileBody(room, creepDef);
		if (!parts.length) return;
		const name = `${creepDef.name || creepDef.behaviour}-${destiny.targetName}`;
		const creepSetup = {
			parts,
			destiny,
			name,
			behaviour: creepDef.behaviour,
			queueRoom: room.name,
		};
		const queue = room.spawnQueueHigh;
		queue.unshift(creepSetup);
		return creepSetup;
	};
	validateQueued = (memory: obj, flag: Flag, task: string, options: obj = {}): void => {
		const subKey: string = options.subKey ? 'queued.' + options.subKey : 'queued';
		const checkPath: string = options.subKey ? 'nextQueuedCheck.' + options.subKey : 'nextQueuedCheck';
		const queued = Util.get(memory, subKey, []);
		let nextCheck: number = _.get(memory, checkPath, 0);
		// if checkPathValid = true, it will only revalidate if 50 ticks have passed since the last validation
		if (queued.length && (!options.checkValid || Game.time > nextCheck)) {
			const queues = options.queues || ['Low'];
			const validated: any[] = [];
			const _validateQueued = (entry: obj) => {
				if (!entry) return;
				const room = Game.rooms[entry.room];
				for (const queue of queues) {
					if (room['spawnQueue' + queue].some((c: obj) => c.name === entry.name)) {
						validated.push(entry);
						break;
					}
				}
			};
			queued.forEach(_validateQueued);
			_.set(memory, subKey, validated);
			nextCheck = Game.time + 50;
			Util.set(memory, checkPath, nextCheck, false); // set the queued check
		} else if (queued.length === 0) {
			if (options.subKey && memory.nextQueuedCheck) delete memory.nextQueuedCheck[options.subKey];
			else delete memory.nextQueuedCheck;
		}
		const oldCheck = _.get(flag.memory, ['nextCheck', task], Infinity);
		if (flag && nextCheck - Game.time > 0 && nextCheck < oldCheck) {
			Log.flag(
				flag,
				Dye(COLOR_PURPLE, 'TaskManager Queued:', task, Dye(COLOR_GREY, `next-check: ${nextCheck - Game.time}s later`)),
			);
			_.set(flag.memory, ['nextCheck', task], nextCheck);
		}
	};
	validateSpawning = (memory: obj, flag: Flag, task: string, options: obj = {}): void => {
		const subKey: string = options.subKey ? 'spawning.' + options.subKey : 'spawning';
		const checkPath: string = options.subKey ? 'nextSpawnCheck.' + options.subKey : 'nextSpawnCheck';
		const spawning = Util.get(memory, subKey, []);
		let nextCheck: number = _.get(memory, checkPath, 0);
		if (spawning.length && (!options.checkValid || Game.time > nextCheck)) {
			const validated: any[] = [];
			let minRemaining: number;
			const _validateSpawning = (entry: obj) => {
				if (!entry) return;
				const spawn = Game.spawns[entry.spawn];
				if (
					spawn &&
					((spawn.spawning && spawn.spawning.name === entry.name) ||
						(spawn.newSpawn && spawn.newSpawn.name === entry.name))
				) {
					minRemaining =
						!minRemaining || spawn.spawning.remainingTime < minRemaining ? spawn.spawning.remainingTime : minRemaining;
					validated.push(entry);
				}
			};
			spawning.forEach(_validateSpawning);
			_.set(memory, subKey, validated);
			if (minRemaining) {
				nextCheck = Game.time + minRemaining;
				Util.set(memory, checkPath, nextCheck, false); // set the spawning check
			} else {
				if (options.subKey && memory.nextSpawnCheck) delete memory.nextSpawnCheck[options.subKey];
				else delete memory.nextSpawnCheck;
			}
		}
		const oldCheck = _.get(flag.memory, ['nextCheck', task], Infinity);
		if (flag && nextCheck - Game.time > 0 && nextCheck < oldCheck) {
			Log.flag(
				flag,
				Dye(
					COLOR_YELLOW,
					'TaskManager Spawning:',
					task,
					Dye(COLOR_GREY, `next-check: ${nextCheck - Game.time}s later`),
				),
			);
			_.set(flag.memory, ['nextCheck', task], nextCheck);
		}
	};
	validateRunning = (memory: obj, flag: Flag, task: string, options: obj = {}): void => {
		const subKey: string = options.subKey ? 'running.' + options.subKey : 'running';
		const checkPath: string = options.subKey ? 'nextRunningCheck.' + options.subKey : 'nextRunningCheck';
		const running = Util.get(memory, subKey, []);
		const roomName: string = options.roomName;
		let nextCheck = _.get(memory, checkPath, 0);
		if (roomName && running.length && (!options.checkValid || Game.time > nextCheck)) {
			const deadCreep: string = options.deadCreep || '';
			const validated: any[] = [];
			let minRemaining: number;
			const _validateRunning = (entry: obj) => {
				if (!entry) return;
				const name = entry.name || entry;
				// invalidate dead or old creeps for predicted spawning
				const creep: Creep = Game.creeps[name];
				// invalidate old creeps for predicted spawning
				if (!creep || !creep.data) return;
				// TODO: better distance calculation
				let prediction;
				if (creep.data.predictedRenewal) prediction = creep.data.predictedRenewal;
				else if (creep.data.spawningTime)
					prediction = creep.data.spawningTime + Util.routeRange(creep.data.homeRoom, roomName) * 50;
				else prediction = (Util.routeRange(creep.data.homeRoom, roomName) + 1) * 50;
				if (creep.name !== deadCreep && creep.ticksToLive > prediction) {
					const untilRenewal: number = creep.ticksToLive - prediction;
					minRemaining = !minRemaining || untilRenewal < minRemaining ? untilRenewal : minRemaining;
					validated.push(entry);
				}
			};
			running.forEach(_validateRunning);
			_.set(memory, subKey, validated);
			if (minRemaining) {
				nextCheck = Game.time + Math.min(TASK_CREEP_CHECK_INTERVAL, minRemaining); // check running at least every 250 ticks
				Util.set(memory, checkPath, nextCheck, false);
			} else {
				if (options.subKey && memory.nextRunningCheck) delete memory.nextRunningCheck[options.subKey];
				else delete memory.nextRunningCheck;
			}
		}
		const oldCheck = _.get(flag.memory, ['nextCheck', task], Infinity);
		if (flag && nextCheck - Game.time > 0 && nextCheck < oldCheck) {
			Log.flag(
				flag,
				Dye(COLOR_GREEN, 'TaskManager Running:', task, Dye(COLOR_GREY, `next-check: ${nextCheck - Game.time}s later`)),
			);
			_.set(flag.memory, ['nextCheck', task], nextCheck);
		}
	};
	validateAll = (memory: obj, flag: Flag, task: string, options: obj = {}): void => {
		if (_.isUndefined(options.roomName))
			return Log.error('TaskManager.validateAll', 'roomName undefined' + flag + options.subKey);
		this.validateQueued(memory, flag, task, options);
		this.validateSpawning(memory, flag, task, options);
		this.validateRunning(memory, flag, task, options);
	};
	forceCreepCheck = (flag: Flag, task: string): void => {
		_.set(flag.memory, ['nextCheck', task], Game.time);
	};
	nextCreepCheck = (flag: Flag, task: string): boolean => {
		const nextCheck = _.get(flag.memory, ['nextCheck', task]);
		if (nextCheck && Game.time < nextCheck) {
			return false;
		} else {
			// set default, we will get a better nextCheck if it exists because we return true
			_.set(flag.memory, ['nextCheck', task], Game.time + TASK_CREEP_CHECK_INTERVAL);
			return true;
		}
	};
}

export default new TaskConstructor();
