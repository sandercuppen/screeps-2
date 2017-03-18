const taskSpawn = (number, body) => {

    for (let key in number) {
        const roleSpawn = key;
        for (let i = 0; i < number[key].length; i++) {
            let maxNum = number[key][i - 1],
                roleNumber = _.filter(Game.creeps, (creep) => creep.memory.role == roleSpawn).length;
            if (roleNumber < maxNum && Game.spawns['Spawn1'].canCreateCreep(body[key]) === 0) {
                const newName = Game.spawns['Spawn1'].createCreep(
                    body[key],
                    `${roleSpawn}${Math.floor(Math.random() * 100)}`,
                    {role: roleSpawn, source: i - 1}
                );
                console.log('Spawn: ' + newName);
            }
        }
    }
}

export default taskSpawn;