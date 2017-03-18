const roleConfig = {
    number: {
        harvester: 8,
        upgrader: 1,
        builder: 1,
        miner: 0,
    },
    body: {

        miner: [MOVE,WORK,WORK,CARRY],
        harvester:  [MOVE,MOVE,MOVE,WORK,CARRY],
        upgrader: [MOVE,MOVE,CARRY,CARRY,CARRY],
        builder: [MOVE,MOVE,MOVE,WORK,CARRY],
    }
}



/*
 "move": 50,
 "work": 100,
 "attack": 80,
 "carry": 50,
 "heal": 250,
 "ranged_attack": 150,
 "tough": 10,
 "claim": 600
 */

function buildBody(obj) {
    let array = [];
    for (let key in obj) {
        let keyType;
        switch (key) {
            case 'work':
                keyType = WORK;
                break;
            case 'move':
                keyType = MOVE;
                break;
            case 'attack':
                keyType = ATTACK;
                break;
            case 'ganged_attack':
                keyType = RANGED_ATTACK;
                break;
            case 'heal':
                keyType = HEAL;
                break;
            case 'claim':
                keyType = CLAIM;
                break;
            case 'tough':
                keyType = TOUGH;
                break;
        }

        for (let num = 0; num < obj[key]; num++) {
            array.push(keyType)
        }

    }
    return array;
}

export default roleConfig;