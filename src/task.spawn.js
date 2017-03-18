const taskSpawn = (number, body) => {

	for (let key in number) {
		const roleSpawn = key;
		for (let i = 0; i < number[key].length; i++) {
			const maxNum = number[key][i]
			const roleNumber = _.filter(Game.creeps, (creep) => creep.memory.role == roleSpawn && creep.memory.source == i).length;
			if (number[key][i] > 0 && roleNumber < maxNum && Game.spawns['Spawn1'].canCreateCreep(body[key]) === OK) {
				Game.spawns['Spawn1'].createCreep(
						body[key],
						`[${roleSpawn}]${getNowFormatDate()}`,
						{role: roleSpawn, source: i}
				);
				console.log('Spawn:', roleSpawn, i);
			}
		}
	}
}

export default taskSpawn;

function getNowFormatDate() {
	const date = new Date();
	return [date.getHours(),
	        date.getMinutes(),
	        date.getSeconds()].join(':')
}