function interactiveBinarySearch(array: Array<number>, target: number): number {
	let left = 0;
	//change to arr.at(-1) later
	let right = array.length - 1;
	while (left < right) {
		let middle = (left + 2) / 2;
		let potentialMatch = array[middle];
		if (target == potentialMatch) {
			return middle;
		} else if (target < potentialMatch) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1;
}
