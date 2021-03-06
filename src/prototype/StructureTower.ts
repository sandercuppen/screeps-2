class StructureTowerExtend extends StructureTower {
	constructor() {}

	get active(): boolean {
		if (!this.room.owner) return false;
		if (this.room.owner !== this.owner.username) return false;
		if (this.room.RCL < 3) return false;
		return _.get(this.room.memory, ['structures', this.id, 'active'], true);
	}
}

Util.define(StructureTower, StructureTowerExtend);
