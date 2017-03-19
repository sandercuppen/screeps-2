import * as role from './role';
import * as structure from './structure';
const mySpawn = Game.spawns['Spawn1'];
module.exports = {

    loop: () => {


        mySpawn.room.memory = {
            structures: mySpawn.room.find(FIND_STRUCTURES),
            constructionSites: mySpawn.room.find(FIND_CONSTRUCTION_SITES),
            source: mySpawn.room.find(FIND_SOURCES),
            miner: mySpawn.room.find(FIND_MY_CREEPS, {filter: (miner) => miner.memory.role === "miner"}),
            drop: mySpawn.room.find(FIND_DROPPED_ENERGY)
        }

        const targetsBuild = mySpawn.room.memory.constructionSites;
        const targetsPickup = mySpawn.room.memory.drop;


        for (let name in mySpawn.room.memory.structures) {
            const structureName = mySpawn.room.memory.structures[name];
            switch (structureName.structureType) {
                case 'spawn':
                    structure.spawn(structureName);
                    break;
                case 'tower':
                    structure.tower(structureName);
                    break;
                case 'container':
                    (targetsHarvest.length == 0 || targetsBuild.length > 0 ) ? structure.container(structureName) : null;
                    break;
            }
        }

        for (let name in Game.creeps) {
            const creep = Game.creeps[name];
            switch (creep.memory.role) {
                case 'claim':
                    role.claim(creep)
                    break;
                case 'farMiner':
                    role.farMiner(creep)
                    break;
                case 'farHarvester':
                    role.farHarvester(creep)
                    break;
                case 'harvester':
                    role.harvester(creep)
                    break;
                case 'upgrader':
                    role.upgrader(creep);
                    break;
                case 'builder':
                    (targetsBuild.length > 0) ? role.builder(creep) : role.harvester(creep)
                    break;
                case 'miner':
                    role.miner(creep);
                    break;
                case 'cleaner':
                    (targetsPickup.length > 0 ) ? role.cleaner(creep) : role.harvester(creep)
                    break;
            }
        }
    }

}