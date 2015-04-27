// QUESTION 1

//Use the reduce method in combination with the concat method to “flatten” an array of arrays
//into a single array that has all the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];

var reducer = function (array) {
	return array.reduce(function(a, b) {
		return a.concat(b);
	})
}

console.log(reducer(arrays));

// Your code here.
// → [1, 2, 3, 4, 5, 6]


//QUESTION 2 

// Using the example data set from this chapter, compute the average age difference between 
// mothers and children (the age of the mother when the child is born).
//  You can use the average function defined earlier in this chapter.

// Note that not all the mothers mentioned in the data are themselves present in the array. 
// The byName object, which makes it easy to find a person’s object from their name, might be useful here.

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
};

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

var hasMother = ancestry.filter(function(person) {
	return byName[person["mother"]] != null;
});

var ageDiff = hasMother.map(function(person){
	return person["born"] - byName[person["mother"]].born;
});

console.log(average(ageDiff));

// → 31.2