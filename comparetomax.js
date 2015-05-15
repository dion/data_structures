function compareToMax (array, n) {
	var curMax = array[0],
		i;

	if (n <= 0) {
		return -1;
	}

	for (i = 1; i < n; ++i) {
		if (array[i] > curMax) {
			curMax = array[i];
		}
	}

	return curMax;
}