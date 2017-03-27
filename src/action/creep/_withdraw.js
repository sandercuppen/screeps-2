import { emoji, action, colorType, targetFormat, targetMaker } from "../../_util"
export default (creep, target, type = RESOURCE_ENERGY) => {
	target = targetFormat(target)
	if (!target) return;
	targetMaker(creep,target,'withdraw')
	if (action(creep, target, creep.withdraw(target, type), emoji.withdraw, colorType.purple))return true;
}