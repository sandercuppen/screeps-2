'use strict';

var _role = require('./role');

var _task = require('./task');

var mySpawn = Game.spawns['Spawn1'];
module.exports = {

	loop: function loop() {
		(0, _task.taskSpawn)(_role.roleConfig.number, _role.roleConfig.body);
		if (mySpawn.spawning) {
			var spawningCreep = Game.creeps[mySpawn.spawning.name];
			mySpawn.room.visual.text('[Spawn]' + spawningCreep.memory.role, mySpawn.pos.x + 1, mySpawn.pos.y, { align: 'left', opacity: 0.8 });
		}
		mySpawn.room.memory = {
			structures: mySpawn.room.find(FIND_STRUCTURES),
			constructionSites: mySpawn.room.find(FIND_CONSTRUCTION_SITES),
			miner: mySpawn.room.find(FIND_MY_CREEPS, { filter: function filter(miner) {
					return miner.memory.role === "miner";
				} })
		};
		var targetsHarvest = mySpawn.room.memory.structures.filter(function (structure) {
			return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
		});

		var targetsBuild = mySpawn.room.memory.constructionSites;
		var _a = Game.creeps;

		var _f = function _f(creep) {
			switch (creep.memory.role) {
				case 'harvester':
					targetsHarvest.length > 0 ? _role.roleHarvester.run(creep, targetsHarvest[0]) : _role.roleBuilder.run(creep);
					break;
				case 'upgrader':
					_role.roleUpgrader.run(creep);
					break;
				case 'builder':
					targetsBuild.length > 0 ? _role.roleBuilder.run(creep, targetsBuild[0]) : _role.roleHarvester.run(creep, targetsHarvest[0]);
					break;
				case 'miner':
					_role.roleMiner.run(creep);
					break;
			}
		};

		var _r = [];

		for (var _i = 0; _i < _a.length; _i++) {
			_r.push(_f(_a[_i], _i, _a));
		}

		_r;
	}

};