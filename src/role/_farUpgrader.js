import { fullCheck, targetMaker, targetChanger } from '../_util'
import { findInRange, pickup, withdraw, upgradeController } from '../action'
export default (creep, roomName) => {
	// state
	const ifFull = fullCheck(creep);
	// target
	targetMaker(creep, Memory.rooms[roomName].structures.container[0], 'withdraw')
	// task
	if (!ifFull) {
		if (pickup(creep, findInRange(creep, creep.room.memory.dropped.energy, 2)[0])) return;
		const store = creep.room.memory.flags.store[0];
		if (store && withdraw(creep, store, store.store.energy > 0))return;
		if (withdraw(creep, Memory.rooms[roomName].structures.spawn)) return;
		if (withdraw(creep, creep.memory.target.withdraw)) return;
	} else {
		targetChanger(creep, Memory.rooms[roomName].structures.container[0], 'withdraw')
		if (upgradeController(creep, creep.room.controller)) return;
	}
}