import {roleConfig, roleHarvester, roleUpgrader, roleBuilder, roleMiner} from './role';
import {taskSpawn} from './task';

module.exports = {

	loop: () => {

		for (let name in Memory.creeps) {
			if (!Game.creeps[name]) {
				delete Memory.creeps[name];
				console.log('Clearing non-existing creep memory:', name);
			}
		}

		taskSpawn(roleConfig.number, roleConfig.body)

		if (Game.spawns['Spawn1'].spawning) {
			const spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
			Game.spawns['Spawn1'].room.visual.text(
					'[Spawn]' + spawningCreep.memory.role,
					Game.spawns['Spawn1'].pos.x + 1,
					Game.spawns['Spawn1'].pos.y,
					{align: 'left', opacity: 0.8});
		}

		Game.spawns['Spawn1'].room.memory = Game.spawns['Spawn1'].room
		Game.spawns['Spawn1'].room.memory.structures = Game.spawns['Spawn1'].room.find(FIND_STRUCTURES);


		const targetsHarvest = Game.spawns['Spawn1'].room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				return (structure.structureType == STRUCTURE_EXTENSION ||
						structure.structureType == STRUCTURE_SPAWN ||
						structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
			}
		});
		const targetsBuild = Game.spawns['Spawn1'].room.find(FIND_CONSTRUCTION_SITES);

		for (let name in Game.creeps) {
			const creep = Game.creeps[name];

			switch (creep.memory.role) {
				case 'harvester':
					(targetsHarvest.length > 0) ?
							roleHarvester.run(creep, targetsHarvest[0]) : roleBuilder.run(creep);
					break;
				case 'upgrader':
					roleUpgrader.run(creep);
					break;
				case 'builder':

					(targetsBuild.length > 0) ? roleBuilder.run(creep, targetsBuild[0]) : roleHarvester.run(creep, targetsHarvest[0])

					break;
				case 'miner':
					roleMiner.run(creep);
					break;
			}
		}
	}

}