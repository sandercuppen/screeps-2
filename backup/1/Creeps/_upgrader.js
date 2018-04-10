import {pickup, withdraw, upgradeController, findInRange, transfer, findClosestByRange} from  '../Action'
import {Is} from  '../_util'
export default (creep) => {
	const roonName = creep.memory.roomName;
	const isFull   = Is.full(creep);
	// run
	if (isFull) {
		if (creep.carry.energy == 0) transfer(creep, creep.room.storage);
		if (upgradeController(creep, Memory.tasks[roonName].upgrade))return
	} else {
		if (pickup(creep, findInRange(creep, Memory.tasks[roonName].pickup, 4))) return
		let container = Memory.flags[roonName].up;
		if (container) {
			container = Game.getObjectById(container.id)
			if (container.store.energy > 0 && withdraw(creep, container)) return
		} else {
			const withdrawTarget = _.filter([].concat(Memory.tasks[roonName].withdraw, [creep.room.storage]), t => t.store.energy > 0);
			if (withdraw(creep, findClosestByRange(creep, withdrawTarget), false))return
		}
	}
}