import { emoji, action,colorType,targetFormat,targetMaker } from "../../_util"
export default (creep, target) => {
	target = targetFormat(target)
	if (!target) return;
	targetMaker(creep,target,'heal')
	if (action(creep, target, creep.heal(target), emoji.heal, colorType.green)) return true;
}