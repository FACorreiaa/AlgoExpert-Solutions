//time O(n) | space O(1)

function isOutOfBounds(
	row: number,
	column: number,
	height: number,
	width: number
): boolean {
	return row < 0 || row > height || column < 0 || column > width;
}

function zigZagTraverse(arr: Array<Array<number>>) {
	const height = arr.length - 1;
	//const height: Array<number> = arr.at(-1) as Array<number>;

	const width = arr[0].length - 1;
	let result: Array<number> = [];

	let row = 0;
	let col = 0;
	let goingDown = true;
	let outOfBounds = isOutOfBounds(row, col, height, width);
	while (!outOfBounds) {
		console.log('arr[row][col]', arr[row][col]);

		result.push(arr[row][col]);
		if (goingDown) {
			if (col == 0 && row == height) {
				goingDown = false;
				row == height ? (col += 1) : (row += 1);
			} else {
				row += 1;
				col -= 1;
			}
		} else {
			if (row == 0 || col == width) {
				goingDown = true;
				col == width ? (row += 1) : (col += 1);
			} else {
				row -= 1;
				col += 1;
			}
		}
	}
	return result;
}

console.log(
	zigZagTraverse([
		[1, 2, 2, 5, 7],
		[2, 2, 3, 3, 6],
		[3, 3, 3, 4, 4],
		[4, 4, 4, 4, 5],
	])
);
