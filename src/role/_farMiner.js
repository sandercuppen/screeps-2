import { moveTo, harvest, repair, build, pickup, findClosestByRange } from '../action'
import { isFull, targetMaker, targetFormat } from '../_util'
export default (creep, newRoom) => {
	let target;
	isFull(creep)
	//
	targetMaker(creep, newRoom.memory.sources[0].source)
	//
	if (creep.memory.full) {
		const container = findClosestByRange(creep, creep.room.memory.structures.container, 0);
		if (container) {
			if (repair(creep, container, container.hits < container.hitsMax))return;
		} else {
			creep.room.createConstructionSite(creep.pos.x, creep.pos.y, STRUCTURE_CONTAINER)
		}
		target = findClosestByRange(creep, creep.room.memory.structures.needBuild, 0);
		if (build(creep, target))return;
	} else {
		target = findClosestByRange(creep, creep.room.memory.dropped.energy, 0);
		if (pickup(creep, target[0])) return;
	}

	const harvestTarget = targetFormat(creep.memory.target.harvest)
	if (!harvestTarget) {
		moveTo(creep, creep.memory.target.harvest)
	} else {
		if (harvest(creep, harvestTarget)) return
	}

}
