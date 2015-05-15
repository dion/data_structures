function Stack () { 
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
}

function push (element) {
	this.dataStore[this.top++] = element;
}

function pop (element) {
	return this.dataStore[--this.top];
}

function peek () {
	return this.dataStore[this.top-1];
}

function length () {
	return this.top;
}

function clear () {
	this.top = 0;
}

function isPalindrome (word) {
	var s = new Stack();

	for (var i = 0; i < word.length; ++i) {
		//going through word length and pushing each letter into stack
		s.push(word[i]);
	}

	var rword = "";

	while (s.length() > 0) {
		// removing stack contents in reverse and appending it to rword variable
		rword += s.pop();
	}

	if (word == rword) {
		return true;
	} else {
		return false;
	}
}