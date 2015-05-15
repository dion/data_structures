// load("sets.js")

function Set () {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
	this.contains = contains;
}

function size () {
	return this.dataStore.length;
}

function union (set) {
	var tempSet = new Set();

	for (var i = 0; i < this.dataStore.length; ++i) {
		tempSet.add(this.dataStore[i]);
	}

	for (var i = 0; i < set.dataStore.length; ++i) {
		if (!tempSet.contains(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}

	return tempSet;
}

function intersect (set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

function subset (set) {
	if (this.size() > set.size()) {
		return false;
	} else {
		for each (var member in this.dataStore) {
			if (!set.contains(member)) {
				return false;
			}
		}
	}
	return true;
}

function difference (set) {
	var tempSet = new Set();

	for (var i = 0; i < this.dataStore.length; ++i) {
		if (!set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}

	return tempSet;
}

function contains (data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	} else {
		return false;
	}
}

function add (data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);

		return true;
	} else {
		return false;
	}
}

function remove (data) {
	var pos = this.dataStore.indexOf(data);

	if (pos > -1) {
		this.dataStore.splice(pos, 1);

		return true;
	} else {
		return false;
	}
}

function show() {
	return this.dataStore;
}

var names = new Set();
names.add('david');
names.add('jennifer');
names.add('cynthia');
names.add('mike');
names.add('raymond');

if (names.add('mike')) {
	print('mike added');
} else {
	print('can\'t add mike, must already be in set');
}

names.show();


var cis = new Set();
cis.add('mike');
cis.add('clayton');
cis.add('jennifer');
cis.add('raymond');

var dmp = new Set();
dmp.add('raymond');
dmp.add('cynthia');
dmp.add('jonathan');

var it = new Set();
it = cis.union(dmp);
print(it.show());

var diff = new Set();
diff = cis.difference(it);