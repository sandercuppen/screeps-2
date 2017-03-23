import { emoji, action } from "../_util"
export default (creep, rawTarget, type = RESOURCE_ENERGY) => {
	if (!rawTarget) return false;
	let target = rawTarget;
	if (target instanceof Array) {
		target = _.compact(target);
		if (rawTarget.length == 0) return false;
		target = target[0];
	}
	action(creep, target, creep.withdraw(target, type), emoji.withdraw);
	return true;
}
