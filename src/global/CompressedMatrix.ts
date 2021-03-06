// Wrapper class for PathFinder.CostMatrix to define our own compression
export class CompressedMatrix {
	state: obj = {
		nSize: 0,
		cSize: 0,
	};
	serialize = (costMatrix: CostMatrix): number => {
		let ret = `${costMatrix._bits[0]}x`;
		let count = 1;
		for (let i = 1; i < costMatrix._bits.length; i++) {
			let curr = costMatrix._bits[i];
			if (curr !== costMatrix._bits[i - 1]) {
				ret += `${count},${curr}x`;
				count = 1;
			} else {
				count++;
			}
		}
		ret += `${count}`;
		return ret;
	};
	deserialize = (data: string): CostMatrix => {
		const matrix = new PathFinder.CostMatrix();
		const entries = data.split(',');
		let total = 0;
		let entry, cost, count;
		entries.forEach(e => {
			entry = e.split('x');
			cost = entry[0];
			count = entry[1];
			if (cost) {
				_.times(count, i => {
					matrix._bits[total] = cost;
					total++;
				});
			} else {
				total += count;
			}
		});
		return matrix;
	};
	compareEfficiency = (
		count: number,
		costMatrix: CostMatrix = new PathFinder.CostMatrix(),
		verbose: boolean = true,
	): void => {
		let serialized, stringified, normalStringified, compressedStringified;
		for (let i = 0; i < count; i++) {
			serialized = costMatrix.serialize();
			if (verbose) Log.module('Matrix', 'normal', serialized);
			stringified = JSON.stringify(serialized);
			normalStringified = stringified;
			if (verbose)
				Log.module(
					'Matrix',
					'normal-deserialize',
					PathFinder.CostMatrix.deserialize(JSON.parse(stringified)).serialize(),
				);
			serialized = this.serialize(costMatrix);
			if (verbose) Log.module('Matrix', 'comp-serialize', serialized);
			stringified = JSON.stringify(serialized);
			compressedStringified = stringified;
			if (verbose) Log.module('Matrix', 'comp-deserialize', this.deserialize(JSON.parse(stringified)).serialize());
		}
		this.state.nSize = normalStringified.length / 1024;
		this.state.cSize = compressedStringified.length / 1024;
		Log.module(
			'Matrix',
			'normal size:',
			_.round(this.state.nSize, 2),
			'compressed size:',
			_.round(this.state.cSize, 2),
			'reduction(% of original size):',
			_.round(this.state.cSize / this.state.nSize, 2),
		);
	};
}
