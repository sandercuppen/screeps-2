import {moveTo} from '../action'
import {emoji, targetChanger} from '../_util'
export default (creep, target, fc, text = "", color = "#fff") => {
	switch (fc) {
		case OK:
			if (text) creep.say(text);
			return true;
			break;
		case ERR_NOT_OWNER             :
			creep.say(text + "OWNER");
			break;
		case ERR_NO_PATH               :
			creep.say(text + "PATH");
			if (creep.memory.role.match('iner')) {
				targetChanger(creep, creep.room.memory.sources[0], 'harvest');
			} else {
				targetChanger(creep, creep.room.memory.structures.container[0], 'withdraw')
			}
			break;
		case ERR_NAME_EXISTS           :
			creep.say(text + "NAME");
			break;
		case ERR_BUSY                  :
			creep.say(text + "BUSY");
			break;
		case ERR_NOT_FOUND             :
			creep.say(emoji.move);
			moveTo(creep, target, color, false);
			return true;
			break;
		case ERR_NOT_ENOUGH_ENERGY     :
			creep.say(text + "ENERGY");
			if (creep.memory.role.match('iner')) {
				moveTo(creep, target, color);
			} else {
				targetChanger(creep, creep.room.memory.structures.container[0], 'withdraw')
			}
			return true;
			break;
		case ERR_NOT_ENOUGH_RESOURCES  :
			creep.say(text + "RESOURCES");
			break;
		case ERR_INVALID_TARGET        :
			if (creep.memory.role.match('iner')) moveTo(creep, target, color);
			creep.say(text + emoji.move);
			break;
		case ERR_FULL                  :
			creep.say(text + "FULL");
			break;
		case ERR_NOT_IN_RANGE          :
			moveTo(creep, target, color);
			return true;
			break;
		case ERR_INVALID_ARGS          :
			creep.say(text + "ARGS");
			break;
		case ERR_TIRED                 :
			creep.say(text + "TIRED");
			break;
		case ERR_NO_BODYPART           :
			creep.say(text + "BODYPART");
			break;
		case ERR_NOT_ENOUGH_EXTENSIONS :
			creep.say(text + "EXTENSIONS");
			break;
		case ERR_RCL_NOT_ENOUGH        :
			creep.say(text + "RCL");
			break;
		case ERR_GCL_NOT_ENOUGH        :
			creep.say(text + "GCL");
			break;
	}
}