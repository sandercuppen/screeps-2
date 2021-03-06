import { CreepAction } from '../Action';

class BoostingAction extends CreepAction {
	constructor() {
		super('boosting');
		this.setDefault({
			isValidMineralType: mineralType => {
				for (const category in BOOSTS) {
					for (const compound in BOOSTS[category]) {
						if (mineralType === compound) return true;
					}
				}
				return false;
			},
		});
		this._isAddableTarget = this.isAddableTarget;
		this.isAddableTarget = (target, creep) => {
			const boostPartType = this.getBoostPartType(target.mineralType);
			// mineralType is a boosting compound
			return (
				this._isAddableTarget(target, creep) &&
				creep.getStrategyHandler([this.name], 'isValidMineralType', target.mineralType) &&
				// creep has active body parts matching the mineralType's boost
				creep.hasActiveBodyparts(boostPartType) &&
				// can further boost parts of the mineralType's boost
				this.canBoostType(creep, boostPartType)
			);
		};
	}

	// max allowed creeps per target
	maxPerTarget = 1;
	// max allowed creeps per action (and room)
	maxPerAction = 1;

	isValidMineralType = mineralType => {
		for (const category in BOOSTS) {
			for (const compound in BOOSTS[category]) {
				if (mineralType === compound) return true;
			}
		}
		return false;
	};

	/**
	 * Check to see if the mineralType has a boost
	 */

	isValidMineralType = mineralType => {
		for (const category in BOOSTS) {
			for (const compound in BOOSTS[category]) {
				if (mineralType === compound) return true;
			}
		}
		return false;
	};

	/**
	 * Gets the part type matching the compound's boost
	 */

	getBoostPartType = mineralType => {
		for (const category in BOOSTS) {
			for (const compound in BOOSTS[category]) {
				if (mineralType === compound) return category;
			}
		}
	};

	canBoostType = (creep, type) => {
		return !_(creep.body)
			.filter({ type })
			.every(part => part.boost);
	};

	isValidAction = creep => {
		// only valid if not every part is boosted
		return !_.every(creep.body, part => part.boost);
	};

	isValidTarget = (target, creep) => {
		// target is lab
		return (
			target instanceof StructureLab &&
			// target must be active
			target.active &&
			// target has the minimum energy and mineral
			target.energy >= LAB_BOOST_ENERGY &&
			target.mineralAmount >= LAB_BOOST_MINERAL
		);
	};

	newTarget = creep => {
		return _(creep.room.structures.labs.all)
			.filter(this.isValidTarget)
			.filter(lab => this.isAddableTarget(lab, creep))
			.min(lab => creep.pos.getRangeTo(lab));
	};

	work = creep => {
		if (creep.target instanceof StructureLab) {
			return creep.target.boostCreep(creep);
		}
		return ERR_INVALID_TARGET;
	};

	onAssignment = creep => {
		if (SAY_ASSIGNMENT) creep.say(Util.emoji.boosting, SAY_PUBLIC);
	};
}

export default new BoostingAction();
