import 'screeps-perf';
import * as role from './role';
import * as structure from './structure';
import {Loop} from './_util/Loop'

const mySpawn = Game.spawns['Spawn1'];





module.exports.loop = () => {


    const targetsHarvest = mySpawn.room.memory.structures.filter(structure =>
        (
            structure.structureType == STRUCTURE_EXTENSION ||
            structure.structureType == STRUCTURE_SPAWN ||
            structure.structureType == STRUCTURE_TOWER
        ) && structure.energy < structure.energyCapacity
    )
    const targetsBuild = mySpawn.room.memory.constructionSites;
    const targetsPickup = mySpawn.room.memory.drop;


    console.log([
        '[Log]',
        'Harvest:', targetsHarvest.length,
        'Build:', targetsBuild.length,
        'Pickup:', targetsPickup.length,
    ].join(' '))


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
                structure.container(structureName, targetsHarvest.length, targetsBuild.length)
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



