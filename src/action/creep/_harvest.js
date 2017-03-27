import { emoji, action, colorType ,targetFormat,targetMaker} from "../../_util"
export default (creep, target) => {
	target = targetFormat(target)
	if (!target) return;
	// targetMaker(creep,target,'harvest')
	if (action(creep, target, creep.harvest(target), emoji.harvest, colorType.yellow)) return true;
}