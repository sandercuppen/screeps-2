import {targetChange} from  '../../_util'
export default (room) => {
	const rawSources = room.find(FIND_SOURCES);
	let sources      = []
	rawSources.forEach(source => sources.push({
		source: source,
		miner : source.pos.findInRange(source.room.memory.creeps.my.all, 4).filter(creep => creep.name.match('iner'))
	}))
	if (sources.length > 0) {
		sources.sort((a, b) => b.source.energy - a.source.energy)
			.sort((a, b) => a.miner.length - b.miner.length);
	}
	if (sources.length > 1 && sources[0].miner.length == 0 && sources[sources.length - 1].miner.length > 1) {
		const targetSource = sources[sources.length - 1],
		      targetCreep  = Game.getObjectById(targetSource.miner.sort((a, b) => b.ticksToLive - a.ticksToLive)[0].id);
		console.log(targetCreep)
		targetChange(targetCreep, sources[0].source, 'harvest')
	}
	return sources
}