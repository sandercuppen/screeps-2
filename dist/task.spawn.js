'use strict';

exports.__esModule = true;

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var taskSpawn = function taskSpawn(json) {
    json = (0, _entries2.default)(json);
    var _a = json;

    var _f = function _f(data) {
        var roleSpawn = data[0],
            maxNum = data[1],
            roleNumber = _.filter(Game.creeps, function (creep) {
            return creep.memory.role == roleSpawn;
        }).length;
        if (roleNumber < maxNum) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], '' + roleSpawn + Math.floor(Math.random() * 10), { role: roleSpawn });
            console.log('Spawn: ' + newName);
        }
    };

    var _r = [];

    for (var _i = 0; _i < _a.length; _i++) {
        _r.push(_f(_a[_i], _i, _a));
    }

    _r;
};

exports.default = taskSpawn;
module.exports = exports['default'];