import {taskFindMiner} from './task'

export default (creep) => {

    const targets = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES),
        halfBroken = creep.pos.findInRange(FIND_STRUCTURES, 5, {filter: structure => (structure.hits / structure.hitsMax) < 0.5 && structure.hits < 5000})[0];

    if (creep.memory.building && creep.carry.energy == 0) {
        creep.memory.building = false;
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
        creep.memory.building = true;
        creep.say('[B]build');
    }

    if (creep.memory.building) {
        if (halfBroken) {
            if (creep.repair(halfBroken) == ERR_NOT_IN_RANGE) {
                creep.moveTo(halfBroken, {visualizePathStyle: {reusePath: 8, stroke: '#ffffff'}});
            }
        } else if (targets) {
            if (creep.build(targets) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets, {visualizePathStyle: {reusePath: 8, stroke: '#ffffff'}});
            }
        }
    } else {
        taskFindMiner(creep)
    }
}