import { EventClass } from '../class';

module.exports = {
	fresh: () => {
		// ocurrs when a new invader has been spotted for the first time
		// param: invader creep
		Room.newInvader = new EventClass();

		// ocurrs every tick since an invader has been spotted until its not in that room anymore (will also occur when no sight until validated its gone)
		// param: invader creep id
		Room.knownInvader = new EventClass();

		// ocurrs when an invader is not in the same room anymore (or died). will only occur when (or as soon as) there is sight in the room.
		// param: invader creep id
		Room.goneInvader = new EventClass();

		// ocurrs when a room is considered to have collapsed. Will occur each tick until solved.
		// param: room
		Room.collapsed = new EventClass();

		// occurs when a room needs to rebuild its costMatrix
		Room.costMatrixInvalid = new EventClass();

		// occurs when a room's level has increased or decreased
		// param: room
		Room.RCLChange = new EventClass();
	},
};
