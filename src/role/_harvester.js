import {isFull} from '../_util'
import {transfer, pickup, withdraw} from '../action'
export default (creep) => {
	let target;
	// memory
	isFull(creep)
	// run
	target = _.filter(creep.room.memory.structures.container,
		container => container.id != '58d4d78f1b7445f663aacaca' &&
		container.store.energy > 0
	).sort((a, b) => b.store.energy - a.store.energy)
	if (target && target.length > 0) {
		if (!creep.memory.full) {
			const dropped = creep.room.memory.dropped.energy;
			if (dropped.length > 0) {
				target = creep.pos.findInRange(dropped, 6);
				if (pickup(creep, target[0])) return;
			}
			if (withdraw(creep, target[0])) return;
		} else {
			target = creep.room.memory.structures.needFill;
			if (target.length > 0) {
				target = creep.pos.findClosestByRange(target);
			} else {
				target = creep.room.storage
			}
			if (transfer(creep, target)) return;
		}
	} else {
		if (!creep.memory.full) {
			const dropped = creep.room.memory.dropped.energy;
			if (dropped.length > 0) {
				target = creep.pos.findClosestByRange(dropped);
				if (pickup(creep, target)) return;
			}
			target = creep.room.storage;
			if (withdraw(creep, target)) return;
		} else {
			target = creep.room.memory.structures.needFill;
			target = creep.pos.findClosestByRange(target);
			if (transfer(creep, target)) return;
			target = creep.room.memory.structures.tower.sort((a, b) => a.energy - b.energy)[0];
			if (target && target.energy == target.energyCapacity) return;
			if (transfer(creep, target)) return;
		}
	}
	
}