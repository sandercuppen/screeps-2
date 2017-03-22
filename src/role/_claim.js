export default (creep,newRoom) => {
	"use strict";
	const controller = Game.getObjectById('5873bc3511e3e4361b4d738f');
	if (!controller) {
		creep.moveTo(newRoom)
	} else {
		(creep.reserveController(controller) !== OK) ? creep.moveTo(controller) : null;
	}

}