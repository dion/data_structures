function Queue () {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
	this.count = count;
}

function enqueue (element) {
	this.dataStore.push(element);
}

function dequeue () {
	return this.dataStore.shift();
}

function front () {
	return this.dataStore[0];
}

function back () {
	return this.dataStore[this.dataStore.length - 1];
}

function toString () {
	var retStr = "";

	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}

	return retStr;
}

function empty () {
	if (this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}

function count () {
	return this.dataStore.length;
}
/*
var q = new Queue();
q.enqueue('meredith');
q.enqueue('cynthia');
q.enqueue('jennifer');
q.toString();*/

function Dancer (name, sex) {
	this.name = name;
	this.sex = sex;
}

function getDancers (males, females) {
	var names = read("dancers.txt").split("\n");

	for (var i = 0; i < names.length; ++i) {
		names[i] = names[i].trim();
	}

	for (var i = 0; i < names.length; ++i) {
		var dancer = names[i].split(" "),
			sex = dancer[0],
			name = dancer[1];

		if (sex == "F") {
			females.enqueue(new Dancer(name, sex));
		} else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}

function dance (males, females) {
	print("The dance partners are: \n");
	while (!females.empty() && !males.empty()) {
		person = females.dequeue();
		putstr("Female dancer is: " + person.name);
		person = males.dequeue();
		putstr(" and the male dancer is: " + person.name);
	}
	print();
}

var maleDancers = new Queue(),
    femaleDancers = new Queue();

getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (maleDancers.count() > 0) {
	print("There are " + maleDancers.count() + " male dancers waiting to dance.");
}

if (femaleDancers.count() > 0) {
	print("There are " + femaleDancers.count() + " female dancers waiting to dance.");
}

function distribute (nums, queues, n, digit) {
	for (var i = 0; i < n; ++i) {
		if (digit == 1) {
			queues[nums[i]%10].enqueue(nums[i]);	
		} else {
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
		}
	}
}

function collect (queues, nums) {
	var i = 0;

	for (var digit = 0; digit < 10; ++digit) {
		while (!queues[digit].empty()) {
			nums[i++] = queues[digit].dequeue();
		}
	}
}

function distribute(nums, queues, n, digit) {
	
}
////////////
function Patient (name, code) {
	this.name = name;
	this.code = code;
}

function dequeue () {
	var priority = this.dataStore[0].code;
console.log(priority);

	for (var i = 1; i < this.dataStore.length; ++i) {
		if (this.dataStore[i].code < priority) {
			priority = i;
		}
	}
	return this.dataStore.splice(priority, 1);

}

function toString () {
	var retStr = "";

	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i].name + " code: " 
			   + this.dataStore[i].code + "\n" ;
	}

	return retStr;
}

var p = new Patient("smith", 5),
	ed = new Queue();

ed.enqueue(p);
p = new Patient('jones', 4);
ed.enqueue(p);
p = new Patient('feherencbah', 6);
ed.enqueue(p);
p = new Patient('brown', 1);
ed.enqueue(p);
p = new Patient('ingram', 1);
ed.enqueue(p);

var seen = ed.dequeue();
print("being treated: " + seen[0].name);
print("patients waiting to be seen" + ed.toString());


