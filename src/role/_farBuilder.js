import {isFull, targetMaker, targetChanger} from '../_util'
import {withdraw, build, pickup, transfer, repair, findClosestInRange, findClosestByRange} from '../action'
export default (creep, roomName) => {
	const storage = Game.getObjectById('58d07b35bfeec6256575be5d')
	isFull(creep)
	targetMaker(creep, Memory.rooms[roomName].structures.container[0], 'withdraw')
	// run
	
	let withdrawTarget = creep.memory.target.withdraw
	if (!creep.memory.full) {
		if (pickup(creep, findClosestInRange(creep, creep.room.memory.dropped.energy, 3))) return;
		if (withdraw(creep, withdrawTarget))return;
	} else {
		if (creep.pos.roomName == creep.memory.target.withdraw.pos.roomName) {
			const needBuild = creep.room.memory.structures.needBuild,
			      needFix   = creep.room.memory.structures.needFix
			if (build(creep, findClosestByRange(creep, needBuild)))return;
			if (repair(creep, findClosestByRange(creep, needFix)))return;
			
		}
		targetChanger(creep, Memory.rooms[roomName].structures.container[0], 'withdraw')
		if (transfer(creep, storage)) return;
	}
}