module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timer = __webpack_require__(20);

Object.defineProperty(exports, 'timer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_timer).default;
  }
});

var _build = __webpack_require__(16);

Object.defineProperty(exports, 'build', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_build).default;
  }
});

var _emoji = __webpack_require__(17);

Object.defineProperty(exports, 'emoji', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_emoji).default;
  }
});

var _action = __webpack_require__(15);

Object.defineProperty(exports, 'action', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_action).default;
  }
});

var _isFriend = __webpack_require__(18);

Object.defineProperty(exports, 'isFriend', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFriend).default;
  }
});

var _isFull = __webpack_require__(19);

Object.defineProperty(exports, 'isFull', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFull).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveTo = __webpack_require__(27);

Object.defineProperty(exports, "moveTo", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_moveTo).default;
  }
});

var _attack = __webpack_require__(21);

Object.defineProperty(exports, "attack", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_attack).default;
  }
});

var _heal = __webpack_require__(26);

Object.defineProperty(exports, "heal", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heal).default;
  }
});

var _build = __webpack_require__(22);

Object.defineProperty(exports, "build", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_build).default;
  }
});

var _repair = __webpack_require__(29);

Object.defineProperty(exports, "repair", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_repair).default;
  }
});

var _dismantle = __webpack_require__(24);

Object.defineProperty(exports, "dismantle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dismantle).default;
  }
});

var _harvest = __webpack_require__(25);

Object.defineProperty(exports, "harvest", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_harvest).default;
  }
});

var _pickup = __webpack_require__(28);

Object.defineProperty(exports, "pickup", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pickup).default;
  }
});

var _transfer = __webpack_require__(30);

Object.defineProperty(exports, "transfer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_transfer).default;
  }
});

var _withdraw = __webpack_require__(32);

Object.defineProperty(exports, "withdraw", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withdraw).default;
  }
});

var _upgradeController = __webpack_require__(31);

Object.defineProperty(exports, "upgradeController", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_upgradeController).default;
  }
});

var _claimController = __webpack_require__(23);

Object.defineProperty(exports, "claimController", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_claimController).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flags = __webpack_require__(57);

Object.defineProperty(exports, 'flags', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_flags).default;
  }
});

var _log = __webpack_require__(58);

Object.defineProperty(exports, 'log', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_log).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	return (/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g
	);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var originalFindPath = Room.prototype.findPath;
var setup = false;

function creepMemoryCleanUp() {
  if (Game.time - Memory.screepsPerf.lastMemoryCleanUp > 100) {
    Object.keys(Memory.creeps).forEach(function (creepName) {
      if (!Game.creeps[creepName]) {
        Memory.creeps[creepName] = undefined;
      }
    });
    Memory.screepsPerf.lastMemoryCleanUp = Game.time;
  }
};

module.exports = function (options) {
  if (!setup) {
    options = options || {};
    Memory.screepsPerf = Memory.screepsPerf || {
      lastMemoryCleanUp: Game.time
    };

    if (options.speedUpArrayFunctions || options.speedUpArrayFunctions === undefined) {
      Array.prototype.filter = function (callback, thisArg) {
        var results = [];
        var arr = this;
        for (var iterator = 0; iterator < arr.length; iterator++) {
          if (callback.call(thisArg, arr[iterator], iterator, arr)) {
            results.push(arr[iterator]);
          }
        }
        return results;
      };

      Array.prototype.forEach = function (callback, thisArg) {
        var arr = this;
        for (var iterator = 0; iterator < arr.length; iterator++) {
          callback.call(thisArg, arr[iterator], iterator, arr);
        }
      };

      Array.prototype.map = function (callback, thisArg) {
        var arr = this;
        var returnVal = [];
        for (var iterator = 0; iterator < arr.length; iterator++) {
          returnVal.push(callback.call(thisArg, arr[iterator], iterator, arr));
        }
        return returnVal;
      };
    }

    /**
     * Creep memory clean up... this speeds up the initial memory parse each tick.
     */
    if (options.cleanUpCreepMemory || options.cleanUpCreepMemory === undefined) {
      // Monkey patch creating creeps so that we can clean up their memory without forcing the user to make a call.
      var originalCreateCreep = Spawn.prototype.createCreep;
      Spawn.prototype.createCreep = function () {
        creepMemoryCleanUp();
        return originalCreateCreep.apply(this, arguments);
      };
    }

    /**
     * FIND PATH OPTIMIZATION
     * This cache's the built in findPath results in memory and reuses them as long as that same path is used at least 1/300 ticks.
     * The cached path is also refreshed every 2000 ticks.  This helps to ensure that creeps respond to changing room terrain.
     */
    if (options.optimizePathFinding || options.optimizePathFinding === undefined) {
      var roomPositionIdentifier = function roomPositionIdentifier(roomPosition) {
        return roomPosition.roomName + 'x' + roomPosition.x + 'y' + roomPosition.y;
      };

      ;

      Room.prototype.findPath = function (fromPos, toPos, options) {
        creepMemoryCleanUp();
        if (!Memory.pathOptimizer) {
          Memory.pathOptimizer = { lastCleaned: Game.time };
        }

        if (Game.time - Memory.pathOptimizer.lastCleaned > 40 && !this._cleanedUp) {
          var keys = Object.keys(Memory.pathOptimizer);
          keys.forEach(function (key) {
            var val = Memory.pathOptimizer[key];
            if (val && (val.used / (Game.time - val.tick) < 1 / 300 || Game.time - val.tick > 2000)) {
              Memory.pathOptimizer[key] = undefined;
            }
          });
          this._cleanedUp = true;
          Memory.pathOptimizer.lastCleaned = Game.time;
        }

        var pathIdentifier = roomPositionIdentifier(fromPos) + roomPositionIdentifier(toPos);
        if (!Memory.pathOptimizer[pathIdentifier]) {
          var path = originalFindPath.apply(this, arguments);
          Memory.pathOptimizer[pathIdentifier] = {
            tick: Game.time,
            path: Room.serializePath(path),
            used: 1
          };
        } else {
          Memory.pathOptimizer[pathIdentifier].used++;
        }

        return Room.deserializePath(Memory.pathOptimizer[pathIdentifier].path);
      };
    }
    setup = true;
  }

  return {
    originalFindPath: originalFindPath
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var usedOnStart = 0;
var enabled = false;
var depth = 0;

function setupProfiler() {
  depth = 0; // reset depth, this needs to be done each tick.
  Game.profiler = {
    stream: function stream(duration, filter) {
      setupMemory('stream', duration || 10, filter);
    },
    email: function email(duration, filter) {
      setupMemory('email', duration || 100, filter);
    },
    profile: function profile(duration, filter) {
      setupMemory('profile', duration || 100, filter);
    },
    background: function background(filter) {
      setupMemory('background', false, filter);
    },
    restart: function restart() {
      if (Profiler.isProfiling()) {
        var filter = Memory.profiler.filter;
        var duration = false;
        if (!!Memory.profiler.disableTick) {
          // Calculate the original duration, profile is enabled on the tick after the first call,
          // so add 1.
          duration = Memory.profiler.disableTick - Memory.profiler.enabledTick + 1;
        }
        var type = Memory.profiler.type;
        setupMemory(type, duration, filter);
      }
    },

    reset: resetMemory,
    output: Profiler.output
  };

  overloadCPUCalc();
}

function setupMemory(profileType, duration, filter) {
  resetMemory();
  var disableTick = Number.isInteger(duration) ? Game.time + duration : false;
  if (!Memory.profiler) {
    Memory.profiler = {
      map: {},
      totalTime: 0,
      enabledTick: Game.time + 1,
      disableTick: disableTick,
      type: profileType,
      filter: filter
    };
  }
}

function resetMemory() {
  Memory.profiler = null;
}

function overloadCPUCalc() {
  if (Game.rooms.sim) {
    usedOnStart = 0; // This needs to be reset, but only in the sim.
    Game.cpu.getUsed = function getUsed() {
      return performance.now() - usedOnStart;
    };
  }
}

function getFilter() {
  return Memory.profiler.filter;
}

var functionBlackList = ['getUsed', // Let's avoid wrapping this... may lead to recursion issues and should be inexpensive.
'constructor'];

function wrapFunction(name, originalFunction) {
  return function wrappedFunction() {
    if (Profiler.isProfiling()) {
      var nameMatchesFilter = name === getFilter();
      var start = Game.cpu.getUsed();
      if (nameMatchesFilter) {
        depth++;
      }
      var result = originalFunction.apply(this, arguments);
      if (depth > 0 || !getFilter()) {
        var end = Game.cpu.getUsed();
        Profiler.record(name, end - start);
      }
      if (nameMatchesFilter) {
        depth--;
      }
      return result;
    }

    return originalFunction.apply(this, arguments);
  };
}

function hookUpPrototypes() {
  Profiler.prototypes.forEach(function (proto) {
    profileObjectFunctions(proto.val, proto.name);
  });
}

function profileObjectFunctions(object, label) {
  var objectToWrap = object.prototype ? object.prototype : object;

  Object.getOwnPropertyNames(objectToWrap).forEach(function (functionName) {
    var extendedLabel = label + '.' + functionName;
    try {
      var isFunction = typeof objectToWrap[functionName] === 'function';
      var notBlackListed = functionBlackList.indexOf(functionName) === -1;
      if (isFunction && notBlackListed) {
        var originalFunction = objectToWrap[functionName];
        objectToWrap[functionName] = profileFunction(originalFunction, extendedLabel);
      }
    } catch (e) {} /* eslint no-empty:0 */
  });

  return objectToWrap;
}

function profileFunction(fn, functionName) {
  var fnName = functionName || fn.name;
  if (!fnName) {
    console.log('Couldn\'t find a function name for - ', fn);
    console.log('Will not profile this function.');
    return fn;
  }

  return wrapFunction(fnName, fn);
}

var Profiler = {
  printProfile: function printProfile() {
    console.log(Profiler.output());
  },
  emailProfile: function emailProfile() {
    Game.notify(Profiler.output());
  },
  output: function output(numresults) {
    var displayresults = !!numresults ? numresults : 20;
    if (!Memory.profiler || !Memory.profiler.enabledTick) {
      return 'Profiler not active.';
    }

    var elapsedTicks = Game.time - Memory.profiler.enabledTick + 1;
    var header = 'calls\t\ttime\t\tavg\t\tfunction';
    var footer = ['Avg: ' + (Memory.profiler.totalTime / elapsedTicks).toFixed(2), 'Total: ' + Memory.profiler.totalTime.toFixed(2), 'Ticks: ' + elapsedTicks].join('\t');
    return [].concat(header, Profiler.lines().slice(0, displayresults), footer).join('\n');
  },
  lines: function lines() {
    var stats = Object.keys(Memory.profiler.map).map(function (functionName) {
      var functionCalls = Memory.profiler.map[functionName];
      return {
        name: functionName,
        calls: functionCalls.calls,
        totalTime: functionCalls.time,
        averageTime: functionCalls.time / functionCalls.calls
      };
    }).sort(function (val1, val2) {
      return val2.totalTime - val1.totalTime;
    });

    var lines = stats.map(function (data) {
      return [data.calls, data.totalTime.toFixed(1), data.averageTime.toFixed(3), data.name].join('\t\t');
    });

    return lines;
  },


  prototypes: [{ name: 'Game', val: Game }, { name: 'Room', val: Room }, { name: 'Structure', val: Structure }, { name: 'Spawn', val: Spawn }, { name: 'Creep', val: Creep }, { name: 'RoomPosition', val: RoomPosition }, { name: 'Source', val: Source }, { name: 'Flag', val: Flag }],

  record: function record(functionName, time) {
    if (!Memory.profiler.map[functionName]) {
      Memory.profiler.map[functionName] = {
        time: 0,
        calls: 0
      };
    }
    Memory.profiler.map[functionName].calls++;
    Memory.profiler.map[functionName].time += time;
  },
  endTick: function endTick() {
    if (Game.time >= Memory.profiler.enabledTick) {
      var cpuUsed = Game.cpu.getUsed();
      Memory.profiler.totalTime += cpuUsed;
      Profiler.report();
    }
  },
  report: function report() {
    if (Profiler.shouldPrint()) {
      Profiler.printProfile();
    } else if (Profiler.shouldEmail()) {
      Profiler.emailProfile();
    }
  },
  isProfiling: function isProfiling() {
    if (!enabled || !Memory.profiler) {
      return false;
    }
    return !Memory.profiler.disableTick || Game.time <= Memory.profiler.disableTick;
  },
  type: function type() {
    return Memory.profiler.type;
  },
  shouldPrint: function shouldPrint() {
    var streaming = Profiler.type() === 'stream';
    var profiling = Profiler.type() === 'profile';
    var onEndingTick = Memory.profiler.disableTick === Game.time;
    return streaming || profiling && onEndingTick;
  },
  shouldEmail: function shouldEmail() {
    return Profiler.type() === 'email' && Memory.profiler.disableTick === Game.time;
  }
};

module.exports = {
  wrap: function wrap(callback) {
    if (enabled) {
      setupProfiler();
    }

    if (Profiler.isProfiling()) {
      usedOnStart = Game.cpu.getUsed();

      // Commented lines are part of an on going experiment to keep the profiler
      // performant, and measure certain types of overhead.

      // var callbackStart = Game.cpu.getUsed();
      var returnVal = callback();
      // var callbackEnd = Game.cpu.getUsed();
      Profiler.endTick();
      // var end = Game.cpu.getUsed();

      // var profilerTime = (end - start) - (callbackEnd - callbackStart);
      // var callbackTime = callbackEnd - callbackStart;
      // var unaccounted = end - profilerTime - callbackTime;
      // console.log('total-', end, 'profiler-', profilerTime, 'callbacktime-',
      // callbackTime, 'start-', start, 'unaccounted', unaccounted);
      return returnVal;
    }

    return callback();
  },
  enable: function enable() {
    enabled = true;
    hookUpPrototypes();
  },


  output: Profiler.output,

  registerObject: profileObjectFunctions,
  registerFN: profileFunction,
  registerClass: profileObjectFunctions
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(41);

Object.defineProperty(exports, 'root', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_root).default;
  }
});

var _memory = __webpack_require__(39);

Object.defineProperty(exports, 'memory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_memory).default;
  }
});

var _structure = __webpack_require__(42);

Object.defineProperty(exports, 'structure', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_structure).default;
  }
});

var _role = __webpack_require__(40);

Object.defineProperty(exports, 'role', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_role).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function assembleStyles() {
	var styles = {
		modifiers: {
			reset: [0, 0],
			bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		colors: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39]
		},
		bgColors: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49]
		}
	};

	// fix humans
	styles.colors.grey = styles.colors.gray;

	Object.keys(styles).forEach(function (groupName) {
		var group = styles[groupName];

		Object.keys(group).forEach(function (styleName) {
			var style = group[styleName];

			styles[styleName] = group[styleName] = {
				open: '\x1B[' + style[0] + 'm',
				close: '\x1B[' + style[1] + 'm'
			};
		});

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	});

	return styles;
}

Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var escapeStringRegexp = __webpack_require__(10);
var ansiStyles = __webpack_require__(8);
var stripAnsi = __webpack_require__(12);
var hasAnsi = __webpack_require__(11);
var supportsColor = __webpack_require__(13);
var defineProps = Object.defineProperties;
var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(process.env.TERM);

function Chalk(options) {
	// detect mode if not set manually
	this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
}

// use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\x1B[94m';
}

var styles = function () {
	var ret = {};

	Object.keys(ansiStyles).forEach(function (key) {
		ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

		ret[key] = {
			get: function get() {
				return build.call(this, this._styles.concat(key));
			}
		};
	});

	return ret;
}();

var proto = defineProps(function chalk() {}, styles);

function build(_styles) {
	var builder = function builder() {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder.enabled = this.enabled;
	// __proto__ is used because we must return a function, but there is
	// no way to create a function with a different prototype.
	/* eslint-disable no-proto */
	builder.__proto__ = proto;

	return builder;
}

function applyStyle() {
	// support varags, but simply cast to string in case there's only one arg
	var args = arguments;
	var argsLen = args.length;
	var str = argsLen !== 0 && String(arguments[0]);

	if (argsLen > 1) {
		// don't slice `arguments`, it prevents v8 optimizations
		for (var a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || !str) {
		return str;
	}

	var nestedStyles = this._styles;
	var i = nestedStyles.length;

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	var originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
		ansiStyles.dim.open = '';
	}

	while (i--) {
		var code = ansiStyles[nestedStyles[i]];

		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;
	}

	// Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.
	ansiStyles.dim.open = originalDim;

	return str;
}

function init() {
	var ret = {};

	Object.keys(styles).forEach(function (name) {
		ret[name] = {
			get: function get() {
				return build.call(this, [name]);
			}
		};
	});

	return ret;
}

defineProps(Chalk.prototype, init());

module.exports = new Chalk();
module.exports.styles = ansiStyles;
module.exports.hasColor = hasAnsi;
module.exports.stripColor = stripAnsi;
module.exports.supportsColor = supportsColor;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(3);
var re = new RegExp(ansiRegex().source); // remove the `g` flag
module.exports = re.test.bind(re);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(3)();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var argv = process.argv;

var terminator = argv.indexOf('--');
var hasFlag = function hasFlag(flag) {
	flag = '--' + flag;
	var pos = argv.indexOf(flag);
	return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = function () {
	if ('FORCE_COLOR' in process.env) {
		return true;
	}

	if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
		return false;
	}

	if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
		return true;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return true;
	}

	if ('COLORTERM' in process.env) {
		return true;
	}

	if (process.env.TERM === 'dumb') {
		return false;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
		return true;
	}

	return false;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _action = __webpack_require__(1);

exports.default = function (creep, target, fc, text) {
	switch (fc) {
		case OK:
			if (text) creep.say(text);
			return true;
			break;
		case ERR_NOT_OWNER:
			creep.say(text + "OWNER");
			break;
		case ERR_NO_PATH:
			creep.say(text + "PATH");
			break;
		case ERR_NAME_EXISTS:
			creep.say(text + "NAME");
			break;
		case ERR_BUSY:
			creep.say(text + "BUSY");
			break;
		case ERR_NOT_FOUND:
			creep.say(text + "FOUND");
			break;
		case ERR_NOT_ENOUGH_ENERGY:
			creep.say(text + "ENERGY");
			break;
		case ERR_NOT_ENOUGH_RESOURCES:
			creep.say(text + "RESOURCES");
			break;
		case ERR_INVALID_TARGET:
			creep.say(text + "TARGET");
			break;
		case ERR_FULL:
			creep.say(text + "FULL");
			break;
		case ERR_NOT_IN_RANGE:
			(0, _action.moveTo)(creep, target);
			return true;
			break;
		case ERR_INVALID_ARGS:
			creep.say(text + "ARGS");
			break;
		case ERR_TIRED:
			creep.say(text + "TIRED");
			break;
		case ERR_NO_BODYPART:
			creep.say(text + "BODYPART");
			break;
		case ERR_NOT_ENOUGH_EXTENSIONS:
			creep.say(text + "EXTENSIONS");
			break;
		case ERR_RCL_NOT_ENOUGH:
			creep.say(text + "RCL");
			break;
		case ERR_GCL_NOT_ENOUGH:
			creep.say(text + "GCL");
			break;
	}
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (x, y, type) {
	if (x && y && type) {
		console.log('[Build] ' + type + ' in x:' + x + ' y:' + y, Game.spawns['Spawn1'].room.createConstructionSite(x, y, type));
	} else {
		console.log('You can build: ' + ['spawn', 'extension', 'road', 'constructedWall', 'rampart', 'keeperLair', 'portal', 'controller', 'link', 'storage', 'tower', 'observer', 'powerBank', 'powerSpawn', 'extractor', 'lab', 'terminal', 'container', 'nuker'].join('|'));
	}
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	attack: unescape("%uD83D%uDD2B"),
	harvest: unescape("%u26CF"),
	error: unescape("%u274C"),
	move: unescape("%uD83D%uDEB6"),
	transfer: unescape("%uD83D%uDD01"),
	build: unescape("%uD83D%uDEA7"),
	repair: unescape("%uD83D%uDD27"),
	claim: unescape("%uD83D%uDEA9"),
	heal: unescape("%uD83D%uDC9A"),
	pickup: unescape("%uD83D%uDC4B"),
	withdraw: unescape("%uD83D%uDCB0"),
	upgrade: unescape("%uD83D%uDE80"),
	recycle: unescape("%uD83D%uDD04"),
	dismantle: unescape("%u2B55")
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var friends = ["Ruo", "FanHua"];

exports.default = function (owner) {
	if (!owner || owner == 'Invader') return false;
	return friends.toString().match(owner) ? true : false;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (creep) {
	if (!creep.memory.full && creep.carry.energy == creep.carryCapacity) creep.memory.full = true;
	if (creep.memory.full && creep.carry.energy == 0) creep.memory.full = false;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (tick) {
    if (!Memory.timer) Memory.timer = {};
    if (Memory.timer[tick] && Game.time - Memory.timer[tick] < tick) return false;
    Memory.timer[tick] = Game.time;
    return true;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.attack(target), _util.emoji.attack)) return true;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.build(target), _util.emoji.build)) return true;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.reserveController(target), _util.emoji.claim)) return true;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.dismantle(target), _util.emoji.dismantle)) return true;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.harvest(target), _util.emoji.harvest)) return true;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.heal(target), _util.emoji.heal)) return true;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, target) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#ffffff';


    if (creep.fatigue > 0) return false;
    if (!target) return false;

    if ((0, _util.action)(creep, target, creep.moveTo(target, {
        reusePath: 12,
        serializeMemory: true,
        visualizePathStyle: { stroke: color }
    }))) return true;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.pickup(target), _util.emoji.pickup)) return true;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.repair(target), _util.emoji.repair)) return true;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RESOURCE_ENERGY;

	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	};

	if ((0, _util.action)(creep, target, creep.transfer(target, type), _util.emoji.transfer)) return true;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.upgradeController(target), _util.emoji.upgrade)) return true;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (creep, rawTarget) {
	var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RESOURCE_ENERGY;

	if (!rawTarget) return false;
	var target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (target.length == 0) return false;
		target = target[0];
	}
	if ((0, _util.action)(creep, target, creep.withdraw(target, type), _util.emoji.withdraw)) return true;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var room = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Game.rooms['W81S67'];

    var needBuild = room.memory.structures ? room.memory.structures.needBuild : [];
    var builderNumber = needBuild.length > 0 ? Math.ceil(needBuild.length / 2) : 1;
    var repair = {
        percent: 0.5,
        maxHits: 20000
    };
    var role = [{
        role: "claim",
        body: { claim: 2, move: 1 },
        number: 1,
        priority: 7
    }, {
        role: "farMiner",
        body: { work: 8, carry: 1, move: 4 },
        timeout: 100,
        number: 1,
        priority: 1
    }, {
        role: 'farHarvester',
        body: { carry: 5, move: 3, attack: 1 },
        number: 2,
        priority: 5
    }, {
        role: 'farBuilder',
        body: { carry: 5, work: 1, move: 3 },
        number: 1,
        priority: 5
    }, {
        role: 'harvester',
        body: { carry: 12, move: 6 },
        number: 3,
        priority: 2
    }, {
        role: 'upgrader',
        body: { carry: 2, work: 4, move: 2 },
        number: builderNumber > 1 ? 1 : 3,
        priority: 3
    }, {
        role: 'builder',
        body: { work: 3, carry: 3, move: 3 },
        number: builderNumber > 4 ? 4 : builderNumber,
        priority: 6
    }, {
        role: "miner",
        body: { work: 8, move: 4 },
        number: 2,
        timeout: 0,
        priority: 1
    }, {
        role: 'cleaner',
        body: { carry: 2, move: 1 },
        number: 2,
        priority: 0
    }, {
        role: 'attacker',
        body: { attack: 2, move: 3 },
        number: 0,
        priority: 0
    }];

    return {
        role: role.sort(function (a, b) {
            return a.priority - b.priority;
        }),
        repair: repair
    };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

exports.default = function (room, config) {
	var creeps = room.find(FIND_CREEPS),
	    creepsMyRaw = _.filter(creeps, function (creep) {
		return creep.my;
	}),
	    creepsOther = _.filter(creeps, function (creep) {
		return !creep.my;
	}),
	    creepsMy = creepRole(creepsMyRaw, config.role);

	return {
		my: creepsMy,
		friend: _.filter(creepsOther, function (creep) {
			return (0, _util.isFriend)(creep.owner.username);
		}),
		enemy: _.filter(creepsOther, function (creep) {
			return !(0, _util.isFriend)(creep.owner.username);
		})
	};
};

function creepRole(creepsMyRaw, configRole) {
	var creepsMy = {};
	configRole.forEach(function (role) {
		creepsMy[role.role] = _.filter(creepsMyRaw, function (creep) {
			return creep.name.split('#')[0] == role.role;
		});
	});
	return creepsMy;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (room) {
	var resources = room.find(FIND_DROPPED_RESOURCES);
	return {
		resources: resources,
		energy: _.filter(resources, function (resource) {
			return resource.resourceType == RESOURCE_ENERGY;
		})
	};
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (room) {
    var flags = room.find(FIND_FLAGS).sort(function (a, b) {
        return a.secondaryColor - b.secondaryColor;
    }).sort(function (a, b) {
        return a.color - b.color;
    });
    return flags;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (room, miner) {
	var rawSources = room.find(FIND_SOURCES);
	var sources = [];
	rawSources.forEach(function (source) {
		var minerNumber = 0;
		miner.forEach(function (creep) {
			creep.memory.harvestTarget == source.id && creep.ticksToLive > 50 ? minerNumber++ : null;
		});
		sources.push({
			source: source,
			minerNumber: minerNumber
		});
	});
	if (sources.length > 0) {
		sources.sort(function (a, b) {
			return a.minerNumber - b.minerNumber;
		});
	}
	return sources;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (room, config) {

	var structures = room.find(FIND_STRUCTURES),
	    structuresStorage = room.storage,
	    structuresMy = _.filter(structures, function (structure) {
		return structure.my;
	}),
	    structuresOther = _.filter(structures, function (structure) {
		return !structure.my;
	}),
	    structuresContainer = _.filter(structuresOther, function (structure) {
		return structure.structureType == STRUCTURE_CONTAINER;
	});

	var structuresDocker = _.compact(structuresContainer.concat([structuresStorage]));

	var needFix = _.filter(structures, function (structure) {
		return (structure.my || structure.structureType == STRUCTURE_ROAD || structure.structureType == STRUCTURE_WALL) && structure.hits / structure.hitsMax < config.repair.percent && structure.hits < config.repair.maxHits && structure.id !== Memory.flags.dismantle;
	});

	return {
		enemy: _.filter(structuresOther, function (structure) {
			return structure.structureType != STRUCTURE_CONTAINER && structure.structureType != STRUCTURE_ROAD && structure.structureType != STRUCTURE_WALL;
		}),
		terminal: room.terminal,
		controller: room.controller,
		storage: structuresStorage,
		tower: _.filter(structuresMy, function (structure) {
			return structure.structureType == STRUCTURE_TOWER;
		}),
		spawn: _.filter(structuresMy, function (structure) {
			return structure.structureType == STRUCTURE_SPAWN;
		})[0],
		container: _.filter(structuresOther, function (structure) {
			return structure.structureType == STRUCTURE_CONTAINER;
		}),
		canWithdraw: structuresDocker.length > 0 ? _.filter(structuresDocker, function (structure) {
			return structure.store && structure.store.energy > 0;
		}) : [],
		canFill: structuresDocker.length > 0 ? _.filter(structuresDocker, function (structure) {
			return structure.store && structure.store.energy < structure.storeCapacity;
		}) : [],
		needFill: _.filter(structuresMy, function (structure) {
			return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity && structure.energy < 300;
		}),
		needFix: needFix.sort(function (a, b) {
			return a.hits - b.hits;
		}),
		needBuild: room.find(FIND_MY_CONSTRUCTION_SITES)
	};
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(33);

var _config2 = _interopRequireDefault(_config);

var _creeps = __webpack_require__(34);

var _creeps2 = _interopRequireDefault(_creeps);

var _structures = __webpack_require__(38);

var _structures2 = _interopRequireDefault(_structures);

var _sources = __webpack_require__(37);

var _sources2 = _interopRequireDefault(_sources);

var _dropped = __webpack_require__(35);

var _dropped2 = _interopRequireDefault(_dropped);

var _flags = __webpack_require__(36);

var _flags2 = _interopRequireDefault(_flags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (roomArrary) {
    _.each(roomArrary, function (room) {
        if (!Game.rooms[room]) return;
        room = Game.rooms[room];
        var config = (0, _config2.default)(room);
        var creeps = (0, _creeps2.default)(room, config);
        var memory = {
            energyAvailable: room.energyAvailable,
            config: config,
            creeps: creeps,
            structures: (0, _structures2.default)(room, config),
            sources: (0, _sources2.default)(room, creeps.my.miner),
            dropped: (0, _dropped2.default)(room),
            flags: (0, _flags2.default)(room)
        };
        room.memory = memory;
        // Memory.game  = Game;
    });
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _role = __webpack_require__(53);

var role = _interopRequireWildcard(_role);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (roomArrary) {

		_.each(roomArrary, function (room) {
				if (!Game.rooms[room]) return;
				room = Game.rooms[room];
				var Memory = room.memory;
				var myCreeps = Memory.creeps.my;
				var newRoom = {
						pos: new RoomPosition(25, 47, roomArrary[1]),
						memory: Game.rooms[roomArrary[1]] ? Game.rooms[roomArrary[1]].memory : {}
				};

				// cheap base
				myCreeps.cleaner.forEach(function (creep) {
						return role.cleaner(creep);
				});

				// source
				myCreeps.harvester.forEach(function (creep) {
						return role.harvester(creep);
				});
				myCreeps.miner.forEach(function (creep) {
						return role.miner(creep);
				});
				myCreeps.upgrader.forEach(function (creep) {
						return role.upgrader(creep);
				});
				myCreeps.builder.forEach(function (creep) {
						return role.builder(creep);
				});

				// far
				myCreeps.farBuilder.forEach(function (creep) {
						return role.farBuilder(creep, newRoom);
				});
				myCreeps.farHarvester.forEach(function (creep) {
						return role.farHarvester(creep, newRoom);
				});
				myCreeps.farMiner.forEach(function (creep) {
						return role.farMiner(creep, newRoom);
				});
				myCreeps.claim.forEach(function (creep) {
						return role.claim(creep, newRoom);
				});

				// attack
				myCreeps.attacker.forEach(function (creep) {
						return role.attacker(creep, newRoom);
				});
		});
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	for (var name in Memory.creeps) {
		if (!Game.creeps[name]) {
			delete Memory.creeps[name];
		} else {
			if (!Game.creeps[name].memory) Game.creeps[name].memory = { role: name.split('#')[0] };
		}
	}
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _structure = __webpack_require__(56);

var structure = _interopRequireWildcard(_structure);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (roomArray) {
	var room = Game.rooms[roomArray[0]];
	var roomNext = Game.rooms[roomArray[1]];
	var Memory = room.memory;
	var targetStructures = Memory.structures;
	var targetCreeps = Memory.creeps;
	var config = Memory.config;

	var spawn = roomNext ? _.merge(targetCreeps.my, roomNext.memory.creeps.my) : targetCreeps.my;

	structure.spawn(targetStructures.spawn, spawn, config);
	targetStructures.tower.forEach(function (tower) {
		return structure.tower(tower, targetStructures.needFix, targetCreeps.enemy);
	});
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = __webpack_require__(1);

var _task = __webpack_require__(2);

exports.default = function (creep) {
  // let flagMemory = creep.room.memory.flags
  // if (flagMemory && flagMemory.length > 0) flags(creep)

  (0, _action.moveTo)(creep, Game.getObjectById('58ccc9d99f9ea168313dd115'));
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _action = __webpack_require__(1);

exports.default = function (creep) {
	var target = void 0;
	// memory
	(0, _util.isFull)(creep);
	// run
	if (creep.memory.full) {
		var needBuild = creep.room.memory.structures.needBuild;
		if (needBuild.length > 0) {
			target = creep.pos.findClosestByRange(needBuild);
			if ((0, _action.build)(creep, target)) return;
		}
		var needFix = creep.room.memory.structures.needFix;
		if (needFix.length > 0) {
			target = creep.pos.findClosestByRange(needFix);
			if ((0, _action.repair)(creep, target)) return;
		}
		target = creep.room.controller;
		if ((0, _action.upgradeController)(creep, target)) return;
	} else {
		var dropped = creep.room.memory.dropped.energy;
		if (dropped.length > 0) {
			target = creep.pos.findInRange(dropped, 3);
			if ((0, _action.pickup)(creep, target[0])) return;
		}
		target = creep.room.storage;
		if ((0, _action.withdraw)(creep, target)) return;
	}
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _action = __webpack_require__(1);

exports.default = function (creep, newRoom) {
	var target = Game.getObjectById('5873bc3511e3e4361b4d738f');
	if (!target) {
		(0, _action.moveTo)(creep, newRoom.pos);
		return;
	} else {
		if ((0, _action.claimController)(creep, target)) return;
	}
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _action = __webpack_require__(1);

exports.default = function (creep) {
	var target = void 0;
	if (creep.room.name !== 'W81S67') {
		(0, _action.moveTo)(creep, Game.spawns['Spawn1']);
		return;
	}
	// memory
	(0, _util.isFull)(creep);
	// run
	if (!creep.memory.full) {
		var dropped = creep.room.memory.dropped.energy;
		if (dropped.length > 0) {
			target = creep.pos.findClosestByRange(dropped);
			if ((0, _action.pickup)(creep, target)) return;
		}
		target = creep.room.storage;
		if ((0, _action.withdraw)(creep, target)) return;
	} else {
		target = creep.room.memory.structures.needFill;
		target = creep.pos.findClosestByRange(target);
		if ((0, _action.transfer)(creep, target)) return;
		target = creep.room.memory.structures.tower.sort(function (a, b) {
			return a.energy - b.energy;
		})[0];
		if (target && target.energy == target.energyCapacity) return;
		if ((0, _action.transfer)(creep, target)) return;
	}
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _action = __webpack_require__(1);

exports.default = function (creep, newRoom) {
	var room = Game.spawns['Spawn1'].room;
	var needBuild = newRoom.memory.structures.needBuild;
	var target = void 0;
	// memory
	(0, _util.isFull)(creep);
	// run
	if (needBuild.length > 0) {
		if (!creep.memory.full) {
			var dropped = creep.room.memory.dropped.energy;
			if (dropped.length > 0) {
				target = creep.pos.findInRange(dropped, 3);
				if ((0, _action.pickup)(creep, target[0])) return;
			}
			target = room.storage;
			if ((0, _action.withdraw)(creep, target)) return;
		} else {
			target = creep.pos.findClosestByRange(needBuild);
			if ((0, _action.build)(creep, target)) return;
			(0, _action.moveTo)(creep, newRoom.pos);
			return;
		}
	} else {
		if (!creep.memory.full) {
			var _dropped = creep.room.memory.dropped.energy;
			if (_dropped.length > 0) {
				target = creep.pos.findInRange(_dropped, 4);
				if ((0, _action.pickup)(creep, target[0])) return;
			}
			target = newRoom.memory.structures.canWithdraw;
			if ((0, _action.withdraw)(creep, target[0])) return;
			var farMiner = newRoom.memory.creeps.my.farMiner;
			if (farMiner.length > 0) {
				target = Game.getObjectById(farMiner[0].id);
				(0, _action.moveTo)(creep, target);
				return;
			}
		} else {
			var needFix = newRoom.memory.structures.needFix;
			if (needFix.length > 0) {
				target = creep.pos.findClosestByRange(needFix);
				if ((0, _action.repair)(creep, target)) return;
			}
			target = room.storage;
			if ((0, _action.transfer)(creep, target)) return;
		}
	}
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _action = __webpack_require__(1);

exports.default = function (creep, newRoom) {
	var room = Game.spawns['Spawn1'].room;
	var newRoomMemory = newRoom.memory;
	var enemy = newRoomMemory.creeps.enemy;
	var target = void 0;
	// memory
	(0, _util.isFull)(creep);
	// run
	if (enemy.length > 0) {
		target = creep.pos.findClosestByRange(enemy);
		if ((0, _action.attack)(creep, target)) return;
	}

	if (!creep.memory.full) {
		var dropped = creep.room.memory.dropped.energy;
		if (dropped.length > 0) {
			target = creep.pos.findInRange(dropped, 4);
			if ((0, _action.pickup)(creep, target[0])) return;
		}
		target = newRoom.memory.structures.canWithdraw;
		if ((0, _action.withdraw)(creep, target[0])) return;
		var farMiner = newRoom.memory.creeps.my.farMiner;
		if (farMiner.length > 0) {
			target = Game.getObjectById(farMiner[0].id);
			(0, _action.moveTo)(creep, target);
			return;
		}
	} else {
		if ((0, _action.transfer)(creep, room.storage)) return;
	}
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _action = __webpack_require__(1);

exports.default = function (creep, newRoom) {
	var target = void 0;
	target = Game.getObjectById('58d564b2c4e2b16629ae028f');
	if (target && creep.carry.energy >= 50 && target.hits < target.hitsMax / 5) {
		if ((0, _action.repair)(creep, target)) return;
	}
	if (!creep.memory.harvestTarget) creep.memory.harvestTarget = newRoom.memory.sources[0].source.id;
	target = Game.getObjectById(creep.memory.harvestTarget);
	if (!target) {
		(0, _action.moveTo)(creep, newRoom.pos);
		return;
	} else {
		if ((0, _action.harvest)(creep, target)) return;
	}

	// // memory
	// isFull(creep)
	// // run
	// if (!creep.memory.full) {
	// 	const dropped = creep.room.memory.dropped.energy;
	// 	if (dropped.length > 0) {
	// 		target = creep.pos.findInRange(dropped, 0);
	// 		if (pickup(creep, target[0])) return;
	// 	}
	// 	target = Game.getObjectById('5873bc3511e3e4361b4d7390');
	// 	if (!target) {
	// 		moveTo(creep, newRoom.pos)
	// 	} else {
	// 		if (harvest(creep, target)) return;
	// 	}
	// } else {
	// 	target = creep.pos.findInRange(creep.room.memory.structures.canFill, 4);
	// 	if (transfer(creep, target[0])) return;
	// 	target = newRoom.memory.structures.needBuild;
	// 	if (build(creep, target[0])) return;
	// }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _action = __webpack_require__(1);

exports.default = function (creep) {
	var target = void 0;
	// memory
	(0, _util.isFull)(creep);
	// run
	if (!creep.memory.full) {
		var dropped = creep.room.memory.dropped.energy;
		if (dropped.length > 0) {
			target = creep.pos.findInRange(dropped, 6);
			if ((0, _action.pickup)(creep, target[0])) return;
		}
		target = _.filter(creep.room.memory.structures.container, function (container) {
			return container.id != '58d4d78f1b7445f663aacaca' && container.store.energy > 0;
		}).sort(function (a, b) {
			return b.store.energy - a.store.energy;
		});

		if ((0, _action.withdraw)(creep, target[0])) return;
	} else {
		target = creep.room.memory.structures.needFill;
		if (target.length > 0) {
			target = creep.pos.findClosestByRange(target);
		} else {
			target = creep.room.storage;
		}
		if ((0, _action.transfer)(creep, target)) return;
	}
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _action = __webpack_require__(1);

exports.default = function (creep) {
    var memory = creep.room.memory;
    var target = void 0;
    // root

    if (!creep.memory.harvestTarget) creep.memory.harvestTarget = memory.sources[0].source.id;
    target = Game.getObjectById(creep.memory.harvestTarget);
    if ((0, _action.harvest)(creep, target)) {}
    // if (!creep.memory.position) {
    // 	target = creep.pos.findInRange(memory.structures.container, 0)
    // 	if (target.length > 0) creep.memory.position = true;
    // 	target = creep.pos.findClosestByRange(memory.structures.container)
    // 	moveTo(creep, target)
    // } else {
    // 	return
    // }
    // return


    // // memory
    // isFull(creep)
    // // run
    // if (creep.memory.full) {
    // 	target = creep.pos.findInRange(creep.room.memory.structures.canFill, 4);
    // 	if (transfer(creep, target[0])) return;
    // 	if (creep.memory.harvestTarget == "5873bc3511e3e4361b4d7393") {
    // 		target = creep.room.controller;
    // 		if (upgradeController(creep, target)) return;
    // 	}
    // } else {
    // 	const dropped = creep.room.memory.dropped.energy;
    // 	if (dropped.length > 0) {
    // 		target = creep.pos.findInRange(dropped, 0);
    // 		if (pickup(creep, target[0])) return;
    // 	}
    // 	target = Game.getObjectById(creep.memory.harvestTarget)
    // 	if (harvest(creep, target)) return;
    // }
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _action = __webpack_require__(1);

exports.default = function (creep) {
	var target = void 0;
	// memory
	(0, _util.isFull)(creep);
	// run
	if (creep.memory.full) {
		target = creep.room.controller;
		if ((0, _action.upgradeController)(creep, target)) return;
	} else {
		target = creep.pos.findClosestByRange(creep.room.memory.structures.canWithdraw);
		if ((0, _action.withdraw)(creep, target)) return;
	}
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _harvester = __webpack_require__(50);

Object.defineProperty(exports, 'harvester', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_harvester).default;
  }
});

var _upgrader = __webpack_require__(52);

Object.defineProperty(exports, 'upgrader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_upgrader).default;
  }
});

var _builder = __webpack_require__(44);

Object.defineProperty(exports, 'builder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_builder).default;
  }
});

var _miner = __webpack_require__(51);

Object.defineProperty(exports, 'miner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_miner).default;
  }
});

var _cleaner = __webpack_require__(46);

Object.defineProperty(exports, 'cleaner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cleaner).default;
  }
});

var _farBuilder = __webpack_require__(47);

Object.defineProperty(exports, 'farBuilder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_farBuilder).default;
  }
});

var _farHarvester = __webpack_require__(48);

Object.defineProperty(exports, 'farHarvester', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_farHarvester).default;
  }
});

var _farMiner = __webpack_require__(49);

Object.defineProperty(exports, 'farMiner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_farMiner).default;
  }
});

var _claim = __webpack_require__(45);

Object.defineProperty(exports, 'claim', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_claim).default;
  }
});

var _attacker = __webpack_require__(43);

Object.defineProperty(exports, 'attacker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_attacker).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

exports.default = function (spawn, my, config) {
    var target = spawn.pos.findInRange(spawn.room.memory.creeps.my.attacker, 1);
    if (target && target.length > 0) {
        console.log(spawn.recycleCreep(target[0]));
    }
    if (spawn.spawning) {
        var percent = Math.round((1 - spawn.spawning.remainingTime / spawn.spawning.needTime) * 100),
            text = [_util.emoji.build, spawn.spawning.name.split('#')[0], '(' + percent + '%)'].join(' ');
        console.log(text);
        spawn.room.visual.text(text, spawn.pos.x + 1, spawn.pos.y, {
            align: 'left',
            stroke: '#111111',
            color: '#ffffff'
        });
        return;
    }

    var roleFactory = config.role;
    var priority = false;
    roleFactory.forEach(function (roleType) {
        var roleName = roleType.role;
        var roleTimeout = roleType.timeout ? roleType.timeout : 10;
        var roleMy = _.filter(my[roleName], function (roleCreep) {
            return roleCreep.ticksToLive >= roleTimeout;
        });
        if (roleMy.length - roleType.number >= 0 || priority) return;
        var spawnName = buildName(roleName);
        spawn.createCreep(buildBody(roleType.body), spawnName, { role: roleName, name: spawnName });
        console.log(roleName, 'now:', roleMy.length, 'need:', roleType.number);
        priority = true;
    });
};

function buildName(role) {
    var date = new Date();
    return [role, "#", date.getHours(), date.getMinutes(), date.getSeconds()].join('');
}

function buildBody(obj) {
    var array = [];
    for (var key in obj) {
        for (var num = 0; num < obj[key]; num++) {
            array.push(key);
        }
    }
    return array;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (tower) {
	var needFix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	var enemy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	if (enemy.length > 0) {
		tower.attack(enemy[0]);
	} else if (needFix.length > 0) {
		tower.repair(needFix[0]);
	}
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tower = __webpack_require__(55);

Object.defineProperty(exports, "tower", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tower).default;
  }
});

var _spawn = __webpack_require__(54);

Object.defineProperty(exports, "spawn", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_spawn).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _action = __webpack_require__(1);

exports.default = function (creep) {
	var flag = creep.room.memory.flags[0];
	if (!flag) return;
	var name = flag.name;
	if (!name.match(/\//)) flag.remove();
	var pos = flag.pos;
	var command = void 0,
	    commandContent = void 0;
	command = name.replace('/', '');
	if (name.match(' ')) {
		command = command.match(/[a-z]+ /);
		commandContent = name.replace('/' + command, '');
	}
	console.log(command, commandContent);
	var target = void 0;
	switch (command) {
		case 'attack' || 'a':
			if (commandContent) {
				target = Game.getObjectById(commandContent.replace(' ', ''));
				if ((0, _action.attack)(creep, target[0])) break;
			}
			target = pos.findInRange(creep.room.memory.creeps.enemy, 6);
			if (target.length > 0) {
				if ((0, _action.attack)(creep, target[0])) break;
			}
			target = creep.pos.findInRange(creep.room.memory.structures.enemy, 6);
			if (target.length > 0) {
				if ((0, _action.attack)(creep, target[0])) break;
			}
			break;
		case 'move' || 'moveTo' || 'moveto' || 'm':
			if (commandContent == 'home') {
				if ((0, _action.moveTo)(creep, Game.getObjectById('58ccc9d99f9ea168313dd115'))) break;
			} else if (commandContent) {
				if ((0, _action.moveTo)(creep, new RoomPosition(48, 21, commandContent))) break;
			}
			target = pos;
			(0, _action.moveTo)(creep, target);
			break;
		case 'chai' || 'dis' || 'dismantle':
			if (commandContent) {
				target = Game.getObjectById(commandContent.replace(' ', ''));
				Memory.flags.dismantle = target.id;
				if ((0, _action.dismantle)(creep, target)) break;
			}
			target = pos.findInRange(creep.room.memory.structures.enemy, 6);
			if (target.length > 0) {
				Memory.flags.dismantle = target[0].id;
				if ((0, _action.dismantle)(creep, target[0])) break;
			}
			break;
	}
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _chalk = __webpack_require__(9);

var _util = __webpack_require__(0);

exports.default = function () {
	"use strict";

	var gcl = Game.gcl,
	    gclLeft = gcl.progressTotal - gcl.progress,
	    gclProcess = Math.round(gcl.progress / gcl.progressTotal * 100);
	var logGcl = _chalk.chalk.red('[GCL]') + ('Lv' + gcl.level + ' (' + gclProcess + '%|' + gclLeft + ')');

	var cl = Game.spawns['Spawn1'].room.controller,
	    clProcess = Math.round(cl.progress / cl.progressTotal * 100),
	    clSpeed = Math.round((cl.progress - Memory.timer['controller']) / 10),
	    clLeft = cl.progressTotal - cl.progress,
	    clTimeLeft = Math.round(clLeft / clSpeed);
	Memory.timer['controller'] = cl.progress;
	var logController = _chalk.chalk.blue('[GCL]') + ('Lv' + cl.level + ' (' + clProcess + '%|' + clLeft + '|' + clSpeed + '/tick|' + clTimeLeft + 'tickLeft)');

	console.log(_util.emoji.claim, logGcl, logController);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

var _manager = __webpack_require__(7);

var Manager = _interopRequireWildcard(_manager);

var _util = __webpack_require__(0);

var _task = __webpack_require__(2);

var _screepsProfiler = __webpack_require__(6);

var _screepsProfiler2 = _interopRequireDefault(_screepsProfiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var rooms = ['W81S67', 'W81S66', 'W82S67'];
_screepsProfiler2.default.enable();
console.log('# Coding Update!');
module.exports.loop = function () {
	if (Game.cpuLimit > 100) {
		_screepsProfiler2.default.wrap(function () {
			Manager.root();
			Manager.memory(rooms);
			Manager.role(rooms);
			Manager.structure(rooms);
		});
	}

	if ((0, _util.timer)(10)) (0, _task.log)();
};

/***/ })
/******/ ]);