function factorial (n) {
	if (n > 1) {
		return factorial (n-1) * n;
	} else {
		return 1;
	}
}

/*function factorial (n) {
	var val = 1;

	for (; n > 1; n--) {
		val *= 1;
	}

	return val;
