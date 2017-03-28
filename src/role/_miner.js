import { fullCheck, targetMaker } from '../_util'
import { build, harvest, repair, findInRange, moveTo, pickup } from '../action'
export default (creep) => {
	// root
	const isFull = fullCheck(creep)
	// target
	targetMaker(creep, creep.room.memory.sources[0].source, 'harvest')
	const harvestTarget = Game.getObjectById(creep.memory.target.harvest.id)
	console.log(harvestTarget)
	// task
	if (isFull) {
		try {
			const container = findInRange(harvestTarget, creep.room.memory.structures.container, 2)[0];
			if (!creep.pos.isEqualTo(container.pos) && moveTo(creep, container)) return;
			if (repair(creep, container, container.hits < container.hitsMax)) return;
			if (build(creep, findInRange(creep, creep.room.memory.structures.needBuild, 3)[0]))return;
		} catch (e) {}
	} else {
		try {
			if (pickup(creep, findInRange(creep, creep.room.memory.dropped.energy, 1)[0])) return;
		} catch (e) {}
	}
	if (harvest(creep, harvestTarget)) return;
}