import { emoji } from '../_util'
import { targetFormat } from '../_util'
export default (creep, target, type = 'default') => {
	try {
		target = targetFormat(target)
		if (!target.pos) return false;
		if (!creep.memory.target) creep.memory.target = {}
		if (!creep.memory.target[type] || !creep.memory.target[type].id) {
			creep.memory.target[type] = {
				id  : target.id,
				pos : target.pos,
				time: Game.time
			};
			creep.say(emoji.target)
		}
		return true;
	} catch (e) {
		return false;
	}
}