const taskSpawn = (json) => {
    json = Object.entries(json)
    json.map(data => {
        const roleSpawn = data[0],
            maxNum = data[1],
            roleNumber = _.filter(Game.creeps, (creep) => creep.memory.role == roleSpawn).length;
        if (roleNumber < maxNum) {
            const newName = Game.spawns['Spawn1'].createCreep(
                [WORK,
                    CARRY,
                    MOVE],
                `${roleSpawn}${Math.floor(Math.random() * 10)}`,
                {role: roleSpawn}
            );
            console.log('Spawn: ' + newName);
        }
    })

}

export default taskSpawn;