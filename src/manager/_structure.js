import * as structure from '../structure';

export default (room, roomNext) => {
	const Memory = room.memory;
	const nextMemory = (roomNext)?roomNext.memory:null;
	const targetStructures = Memory.structures;
	const targetCreeps = Memory.creeps;
	const config = Memory.config;

	const spawn = (nextMemory)?_.merge(targetCreeps.my, nextMemory.creeps.my):targetCreeps.my;

	structure.spawn(targetStructures.spawn, spawn, config);
	structure.tower(targetStructures.tower, targetStructures.needFix, targetCreeps.enemy);
}