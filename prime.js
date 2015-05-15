/*for (var counter = 2; counter <= 100; counter++) {
	var notPrime = false;

	for (var i = 2; i < counter; i++) {
		if (counter % i === 0 && i !== counter) {
			notPrime = true;			
		}
	}

	if (notPrime === false) {
		console.log(counter);
	}
}*/

for (var counter = 2; counter <= 20; ++counter) {
	var notPrime = false;

	for (var i = 2; i < counter; ++i) {
		if (counter % i === 0 && i !== counter) {
			notPrime = true;
		}
		/*if (!notPrime) {
			console.log('for ' + counter + ' mod ' + i + ': ' + counter % i);
		}*/
	}

	if (notPrime === false) {
		console.log(counter);
	}	
}
// seems that when a non-prime number is divided by a prime number then it is found out