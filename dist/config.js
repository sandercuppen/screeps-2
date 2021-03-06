const config = {
	ME: _ME,
	// New
	LOG_LEVEL: 'debug',
	LOG_EMOJI: true,
	LOG_TRACE: false, // use Memory.debugTrace for low-level information,
	CPU_CHECK: false,
	CPU_CHECK_CONFIG: {
		CREEP: false,
		ROOM: ['E8N45', 'W8N3'],
	},
	AUTO_LAYOUT: true,
	AUTO_LAYOUT_INTERVAL: 5,
	// Old
	CHATTY: false, // creeps say their current action
	HONK: true, // HONK when stored path is blocked by other creeps
	OOPS: true, // Creeps say Oops when dropping energy during dropmining
	SAY_ASSIGNMENT: true, // say a symbol representing the assiged action
	SAY_PUBLIC: false, // creeps talk public
	DEBUG: true, // gimme some more details, use false not undefined to unset
	DEBUG_STACKS: false, // add stack frame to EVERY console.log message (spammy!)
	TRAVELER_MAX_OPS: 1000,
	TRAVELER_STUCK_TICKS: 2, // Number of ticks not moving to be considered stuck by the Traveler API
	TRAVELER_THRESHOLD: 5, // Average creep CPU usage/tick before warning about pathing cost, starts after 25 ticks
	USE_UNBUILT_ROADS: true, // enabling this will set the pathing cost of road construction sites to that of roads
	GRAFANA: true, // track for Grafana data
	GRAFANA_INTERVAL: 10, // loops between Grafana tracking - No lower than 3.
	CENSUS_ANNOUNCEMENTS: true, // log birth and death
	SELL_NOTIFICATION: true, // send mail when selling minerals
	SPAWN_INTERVAL: 5, // loops between regular spawn probe
	ROOM_VISUALS: true, // display basic room statistics with RoomVisuals
	ROOM_VISUALS_ALL: false, // displays visuals in all rooms you have vision in. Only your rooms when false.
	VISUALS: {
		// if ROOM_VISUALS is enabled, you can select what you want to display - All is a bit much for some people.
		VISIBLE_ONLY: true, // depends on userscript: https://github.com/Esryok/screeps-browser-ext/blob/master/visible-room-tracker.user.js
		ROOM: true, // displays basic info relative to the room
		ROOM_ORDERS: true, // display orders the room creates
		ROOM_OFFERS: true, // display what a room will offer another
		SPAWN: true, // displays creep name and spawn progress percentage when spawning
		CONTROLLER: true, // displays level, progress, and ticks to downgrade if active
		STORAGE: true, // displays storage contents
		TERMINAL: true, // displays terminal contents
		REACTIONS: true, // displays reactions orders
		TOWER: false, // displays tower contents
		TRANSACTIONS: false, // displays 2 most recent transactions over room terminal
		LABS: false, // displays lab energy, mineral, or cooldown
		MINERAL: true, // displays mineral amount, or ticks to regen
		SOURCE: true, // displays energy amount, or ticks to regen
		CREEP: true, // draws creep paths
		WALL: false, // highlight weakest wall and display hits
		RAMPART: false, // highlight weakest rampart and display hits
		ROAD: false, // highlight weakest road and display hits
		HEATMAP: false, // collects creep positioning to display a heatmap. WARNING: HIGH MEMORY USAGE
		HEATMAP_INTERVAL: 2, // intervals between collections
		ACTION_ASSIGNMENT: true, // draws a line from a creep and it's new assignment
	},
	// function parameters: room. expected result: boolean
	SEMI_AUTOMATIC_CONSTRUCTION: true, // enables semi-automatic construction. Will construct based on flags.
	// function parameters: room, structure type. expected result: boolean
	REMOVE_CONSTRUCTION_FLAG: true, // if false, flag will remain. This is good if a structure decays, it can rebuild
	MAX_STORAGE_ENERGY: {
		// get rid of energy when reached
		1: 2000,
		2: 2000,
		3: 2000,
		4: 5000,
		5: 10000,
		6: 25000,
		7: 50000,
		8: 300000,
	},
	MIN_STORAGE_ENERGY: {
		// prefer storing energy until reached
		1: 1000,
		2: 1000,
		3: 1000,
		4: 1000,
		5: 5000,
		6: 10000,
		7: 25000,
		8: 50000,
	},
	MAX_STORAGE_MINERAL: 200000, // keep a max of each type of minerals in store
	ROOM_TRADING: true, // set this true to enable haulers within your colony to request resources from other rooms in your colony
	FILL_POWERSPAWN: true,
	MIN_MINERAL_SELL_AMOUNT: 5000,
	ENERGY_VALUE_CREDITS: 0.05, // assumed energy exchange rate (in credits) to determine best mineral sell offer
	MAX_SELL_RANGE: 40,
	TERMINAL_ENERGY: 100000,
	ENERGY_BALANCE_TRANSFER_AMOUNT: 50000, // amount to transfer when balancing empire energy
	TARGET_STORAGE_SUM_RATIO: 0.6,
	AUTOMATED_RATIO_COUNT: false,
	MIN_SELL_RATIO: {
		power: 0.2,
		H: 0.15,
		O: 0.15,
		U: 0.2,
		L: 0.2,
		K: 0.2,
		Z: 0.2,
		X: 0.3,
		OH: 1,
		ZK: 1,
		UL: 1,
		G: 3,
		UH: 1,
		UO: 1,
		KH: 1,
		KO: 1,
		LH: 1,
		LO: 1,
		ZH: 1,
		ZO: 1,
		GH: 4,
		GO: 4,
		UH2O: 3,
		UHO2: 3,
		KH2O: 3,
		KHO2: 3,
		LH2O: 3,
		LHO2: 3,
		ZH2O: 3,
		ZHO2: 3,
		GH2O: 6.5,
		GHO2: 6.5,
		XUH2O: 5,
		XUHO2: 5,
		XKH2O: 5,
		XKHO2: 5,
		XLH2O: 5,
		XLHO2: 5,
		XZH2O: 5,
		XZHO2: 5,
		XGH2O: 5,
		XGHO2: 8,
	},
	// prices for automated buy, adjust it to your shard prices
	MAX_BUY_RATIO: {
		power: 0.2,
		H: 0.2,
		O: 0.2,
		U: 0.4,
		L: 0.4,
		K: 0.4,
		Z: 0.4,
		X: 0.5,
		OH: 1.5,
		ZK: 2,
		UL: 2,
		G: 4,
		UH: 1.5,
		UO: 1.5,
		KH: 1.5,
		KO: 1.5,
		LH: 1.5,
		LO: 1.5,
		ZH: 1.5,
		ZO: 1.5,
		GH: 5,
		GO: 5,
		UH2O: 3,
		UHO2: 3,
		KH2O: 3,
		KHO2: 3,
		LH2O: 3,
		LHO2: 3,
		ZH2O: 3,
		ZHO2: 3,
		GH2O: 6.5,
		GHO2: 6.5,
		XUH2O: 5,
		XUHO2: 5,
		XKH2O: 5,
		XKHO2: 5,
		XLH2O: 5,
		XLHO2: 5,
		XZH2O: 5,
		XZHO2: 5,
		XGH2O: 5,
		XGHO2: 8,
	},
	MAX_REPAIR_LIMIT: {
		// Limits how high structures get repaired by towers, regarding RCL
		1: 1000,
		2: 1000,
		3: 2000,
		4: 4000,
		5: 8000,
		6: 15000,
		7: 20000,
		8: 40000,
	},
	MIN_FORTIFY_LIMIT: {
		// Minimum fortification level
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 10000000, // focus is usually RCL growth, so 0 until 8
	},
	MAX_FORTIFY_LIMIT: {
		// Limits how high structures get repaired by creeps, regarding RCL
		1: 1000,
		2: 1000,
		3: 2000,
		4: 50000,
		5: 100000,
		6: 300000,
		7: 750000,
		8: 30000000,
	},
	MAX_FORTIFY_CONTAINER: 50000,
	LIMIT_URGENT_REPAIRING: 750, // urgent repair when hits below
	GAP_REPAIR_DECAYABLE: 800, // decayables (e.g. roads) only get repaired when that much hits are missing
	MEMORY_RESYNC_INTERVAL: 500, // interval to reload spawns & towers present in a room
	PROCESS_ORDERS_INTERVAL: 100, // interval to process room orders and run terminalBroker
	TIME_REPORT: 50000, // ticks between room reports
	REPORT_MAX_LENGTH: 100,
	REPORTS_PER_LOOP: 100,
	SEND_STATISTIC_REPORTS: false, // Set to true to receive room statistics per mail, otherwise set to false.
	ROAD_CONSTRUCTION_ENABLE: false, // Set to False to disable automatic road construction, or to a number to enable for owned rooms reaching that RC Level. WARNING: HIGH MEMORY USAGE
	ROAD_CONSTRUCTION_FORCED_ROOMS: { shard2: [] }, //Add room names to force automatic road construction regardless of ROAD_CONSTRUCTION_ENABLE e.g. {'shard0':['W0N0','W1N0'],'shard1':['W0N0', 'W1N0']}.
	ROAD_CONSTRUCTION_INTERVAL: 500,
	ROAD_CONSTRUCTION_MIN_DEVIATION: 1.2,
	ROAD_CONSTRUCTION_ABS_MIN: 3,
	TIME_ZONE: 8, // zone offset in hours (-12 through +12) from UTC
	USE_SUMMERTIME: true, // Please define isSummerTime in global.js to suit to your local summertime rules
	SPAWN_DEFENSE_ON_ATTACK: true, // This will attempt to store enough to have a defense and spawn troops when invaded.
	MANAGED_CONTAINER_TRIGGER: 0.25, // managed containers get filled below this relative energy amount and emptied when above 1-this value
	ROUTE_ROOM_COST: { shard0: {} }, // custom room routing cost: e.g. `{'shard0':{ 'W0N0':5, 'W4N4': 11 },'shard1':...}`. Affects bestSpawnRoomFor, CreepManager.Setup calculations, and travel cost predictions. Please call 'delete Memory.routeRange;' whenever you change this property.
	TRAVELLING_BORDER_RANGE: 4, // room arrival distance for travelling and routes
	NOTIFICATE_INVADER: false, // Also log common 'Invader' hostiles
	NOTIFICATE_INTRUDER: true, // Log any hostiles in your rooms
	NOTIFICATE_HOSTILES: true, // Log any hostiles - Ignores NOTIFICATE_INTRUDER and NOTIFICATE_INVADER
	COMBAT_CREEPS_RESPECT_RAMPARTS: true, // causes own creeps not to leave through ramparts when defending
	COST_MATRIX_VALIDITY: 1000,
	// function parameters: room. expected result: array
	CONSTRUCTION_PRIORITY: [
		STRUCTURE_SPAWN,
		STRUCTURE_EXTENSION,
		STRUCTURE_LINK,
		STRUCTURE_TOWER,
		STRUCTURE_STORAGE,
		STRUCTURE_CONTAINER,
		STRUCTURE_EXTRACTOR,
		STRUCTURE_ROAD,
		STRUCTURE_TERMINAL,
		STRUCTURE_LAB,
		STRUCTURE_OBSERVER,
		STRUCTURE_POWER_SPAWN,
		STRUCTURE_NUKER,
		STRUCTURE_RAMPART,
		STRUCTURE_WALL,
	],
	CONTROLLER_SIGN: true,
	// function parameters: room. expected result: string
	CONTROLLER_SIGN_MESSAGE: `Sign by ${_ME} ${String.fromCodePoint(0x1f3b5)}`,
	CONTROLLER_SIGN_UPDATE: false, // Update sign message if user changes CONTROLLER_SIGN_MESSAGE
	MINERS_AUTO_BUILD: true, // miners and remoteMiners will build their own containers if they are missing.
	MINER_WORK_THRESHOLD: 50, // how long to wait before a miner checks for repairs/construction sites nearby again
	REMOTE_HAULER: {
		ALLOW_OVER_CAPACITY: 2450, // Hauler capacity rounds up by MIN_WEIGHT, or this number value.
		DRIVE_BY_BUILD_ALL: true, // If REMOTE_HAULER.DRIVE_BY_BUILDING is enabled then this option will allow remote haulers will drive-by-build any of your structures.
		DRIVE_BY_BUILD_RANGE: 1, // A creep's max build distance is 3 but cpu can be saved by dropping the search distance to 1.
		DRIVE_BY_BUILDING: true, // Allows remote haulers to build roads and containers. Consider setting REMOTE_WORKER_MULTIPLIER to 0.
		DRIVE_BY_REPAIR_RANGE: 2, // range that remote haulers should search when trying to repair and move
		MIN_LOAD: 0.75, // Haulers will return home as long as their ratio of carrying/capacity is above this amount.
		MIN_WEIGHT: 800, // Small haulers are a CPU drain.
		MULTIPLIER: 3, // Max number of haulers spawned per source in a remote mining room.
		REHOME: true, // May haulers choose closer storage for delivery?
	},
	TASK_CREEP_CHECK_INTERVAL: 250, // Maximum number of ticks before a task checks to see if it needs to spawn new creeps
	REMOTE_RESERVE_HAUL_CAPACITY: 0.1, // Percent of allocated haul capacity before sending reservers.
	PIONEER_UNOWNED: false, // True: pioneers may attempt to work in unowned rooms.
	DRIVE_BY_REPAIR_RANGE: 2, // range that creeps should search when trying to repair and move
	REMOTE_WORKER_MULTIPLIER: 0, // Number of workers spawned per remote mining room.
	PLAYER_WHITELIST: ['sourwafer', 'Ruonyy', 'CaptainMuscles'],
	// Don't attack. Must be a member of CCC for permanent whitelisting in git repository. But you can change your own copy... Please ask if you are interested in joining CCC :)
	DEFENSE_BLACKLIST: [], // Don't defend those rooms (add room names). Blocks spawning via defense task (will not prevent offensive actions at all)
	CRITICAL_BUCKET_LEVEL: 1000, // take action when the bucket drops below this value to prevent the bucket from actually running out
	CRITICAL_BUCKET_OVERFILL: 200, // Overfill the bucket by this amount before disabling CPU throttle, this can reduce thrashing because all creeps try to act at once
	CRITICAL_ROLES: [
		'worker',
		'collapseWorker',
		'melee',
		'ranger',
		'healer',
		'miner',
		'hauler',
		'upgrader',
	], // when the bucket drops below the critical bucket level only these creep roles will be executed
	ROBBER_REHOME: false, // May robbers choose closer storage for delivery?
	OBSERVER_OBSERVE_RANGE: 3, // the range for observers to look at
	OBSERVER_OBSERVE_HIGHWAYS_ONLY: true, // the observers will only look at highways - changing this will require you to clear cached rooms
	COMPRESS_COST_MATRICES: false, // enable to compress cached cost matrices (1/5 the size, but currently about 2x CPU usage)

	// automatedBoostProduction
	// rooms with storage, terminal and flower registered labs loaded with energy are needed for the process
	// optionally you can place a purple/white flag to spawn a labTech
	// use _.values(Game.structures).filter(i => i.structureType === 'lab').map(i => i.room.setStore(i.id, RESOURCE_ENERGY, 2000));
	// to fill labs with energy.
	// if something goes wrong use Util.resetBoostProduction() to reset all rooms or Util.resetBoostProduction('roomName'), and MAKE_COMPOUNDS: false to turn off the process;

	// make boostProduction on/off
	MAKE_COMPOUNDS: false,
	// checks the rooms in this interval to make compounds
	MAKE_COMPOUNDS_INTERVAL: 5,
	MAKE_REACTIONS_WITH_3LABS: false,
	CHECK_ORDERS_INTERVAL: 50,
	PURCHASE_MINERALS: false,
	STORE_CHARGE_PURCHASE: 0.9,
	COMPOUNDS_TO_MAKE: {
		// which compounds to make
		G: {
			// for nukes
			make: false, // make it or not
			threshold: 0, // start producing when room.resourcesAll[compound] <= threshold
			amount: 5000, // amount to make when room.resourcesAll <= threshold (keep producing, while room.resourcesAll[compound] < amount + threshold
			rooms: [], // rooms involved, leave it empty for all rooms
		},
		XGH2O: {
			// +100% upgradeController effectiveness without increasing the energy cost
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: ['E8N45'],
		},
		XUH2O: {
			// +300% attack effectiveness
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: [],
		},
		XKHO2: {
			// +300% rangedAttack and rangedMassAttack effectiveness
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: [],
		},
		XLHO2: {
			// +300% heal and rangedHeal effectiveness
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: [],
		},
		XUHO2: {
			// +600% harvest effectiveness
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: [],
		},
		XKH2O: {
			// +150 capacity
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: [],
		},
		XLH2O: {
			// +100% repair and build effectiveness without increasing the energy cost
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: [],
		},
		XZH2O: {
			// +300% dismantle effectiveness
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: [],
		},
		XZHO2: {
			// +300% fatigue decrease speed
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: [],
		},
		XGHO2: {
			// -70% damage taken
			make: false,
			threshold: 9000,
			amount: 3000,
			rooms: [],
		},
	},
	TRADE_THRESHOLD: 1000,
	MIN_OFFER_AMOUNT: 100,
	MIN_COMPOUND_AMOUNT_TO_MAKE: 3000,
	// mineral allocation
	ALLOCATE_COMPOUNDS: false,
	ALLOCATE_COMPOUNDS_INTERVAL: 500,
	COMPOUNDS_TO_ALLOCATE: {
		XGH2O: {
			// +100% upgradeController effectiveness without increasing the energy cost
			allocate: false, // allocate this compound
			allocateRooms: ['E8N45'], // rooms to allocate, leave it empty for all rooms
			threshold: 3000, // allocating will start when compound is below threshold
			amount: 3000, // amount to allocate
			storeTo: 'lab', // 'storage' or 'lab'
			labRefilledAt: 500, // lab refilled below this amount, it is meaningless if storeTo = 'storage'
		},
		XUH2O: {
			// +300% attack effectiveness
			allocate: false,
			allocateRooms: [],
			threshold: 3000,
			amount: 3000,
			storeTo: 'storage',
			labRefilledAt: 500, // lab refilled below this amount
		},
		XKHO2: {
			// +300% rangedAttack and rangedMassAttack effectiveness
			allocate: false,
			allocateRooms: [],
			threshold: 3000,
			amount: 3000,
			storeTo: 'storage',
			labRefilledAt: 500,
		},
		XLHO2: {
			// +300% heal and rangedHeal effectiveness
			allocate: false,
			allocateRooms: [],
			threshold: 3000,
			amount: 3000,
			storeTo: 'storage',
			labRefilledAt: 500,
		},
		XUHO2: {
			// +600% harvest effectiveness
			allocate: false,
			allocateRooms: [],
			threshold: 3000,
			amount: 3000,
			storeTo: 'storage',
			labRefilledAt: 500,
		},
		XKH2O: {
			// +150 capacity
			allocate: false,
			allocateRooms: [],
			threshold: 3000,
			amount: 3000,
			storeTo: 'storage',
			labRefilledAt: 500,
		},
		XLH2O: {
			// +100% repair and build effectiveness without increasing the energy cost
			allocate: false,
			allocateRooms: [],
			threshold: 3000,
			amount: 3000,
			storeTo: 'storage',
			labRefilledAt: 500,
		},
		XZH2O: {
			// +300% dismantle effectiveness
			allocate: false,
			allocateRooms: [],
			threshold: 3000,
			amount: 3000,
			storeTo: 'storage',
			labRefilledAt: 500,
		},
		XZHO2: {
			// +300% fatigue decrease speed
			allocate: false,
			allocateRooms: [],
			threshold: 3000,
			amount: 3000,
			storeTo: 'storage',
			labRefilledAt: 500,
		},
		XGHO2: {
			//-70% damage taken
			allocate: false,
			allocateRooms: [],
			threshold: 15000,
			amount: 3000,
			storeTo: 'storage',
			labRefilledAt: 500,
		},
		power: {
			allocate: false,
			allocateRooms: [], // powers allocated between rooms with PowerSpawn only
			threshold: 100,
			amount: 1000,
			storeTo: 'storage',
			labRefilledAt: 500,
		},
	},
};

config.ROAD_CONSTRUCTION_FORCED_ROOMS.shard2 = _.map(
	_.filter(Memory.flags, o => o.task === 'mining'),
	'roomName',
);

module.exports = config;
