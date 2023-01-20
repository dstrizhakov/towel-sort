
// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (!matrix) return [];
	return matrix.flatMap((submatrix, index) =>
		(index % 2 !== 0)
			? submatrix.reverse()
			: submatrix
	)
}
