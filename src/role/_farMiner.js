import { isFull } from '../_util'
import { pathFinder } from '../task'
import { harvest, transfer, build } from '../action'
export default (creep, newRoom) => {
	let target;
	// memory
	isFull(creep)
	// run
	if (!creep.memory.full) {
		let dropped = creep.memory.dropped.energy;
		if (dropped.length > 0) {
			target = creep.pos.findInRange(dropped, 0);
			if (pickup(creep, target[0])) return;
		}
		target = Game.getObjectById('5873bc3511e3e4361b4d7390');
		if (!target) {
			pathFinder(creep, newRoom.pos)
		} else {
			if (harvest(creep, target)) return;
		}
	} else {
		target = creep.pos.findInRange(newRoom.memory.creeps.my.farHarvester, 1, {
			filter: targetCreep => targetCreep.carry.energy < targetCreep.carryCapacity
		});
		if (target.length > 0) {
			if (transfer(creep, target[0])) return;
		}
		target = newRoom.memory.structures.needBuild;
		if (build(creep, target[0])) return;
	}
}
