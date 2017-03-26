export default (link) => {
	const linkMain = link.room.memory.config.linkMain;
	if (link.id == linkMain || link.cooldown > 0 || link.energy < link.energyCapacity) return;
	const target = Game.getObjectById(linkMain);
	if (linkMain.energy == 0)link.transferEnergy(target);
	
}