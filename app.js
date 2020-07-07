// Fail #1
//function filterOutOdds(...nums) {
// 	return (nums.filter = (num) => {
// 		return num % 2 === 1;
// 	});
// }

// Fail #2
// const filterOutOdds = (...nums) => {
// 	return (nums.filter = (val) => {
// 		return num % 2 === 1, [];
// 	});
// };

//1 ES5 Function that takes a variable number of arguments
const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

//2 findMin
const min = (...nums) => {
	return nums.reduce((min, currVal) => {
		return currVal < min ? currVal : min;
	});
};

// better version
//const findMin = (...args) => Math.min(...args);

//3 mergeObjects
const mergeObjects = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

// better version
//const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

//4 doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => {
	return [ ...arr, ...args.map((v) => v * 2) ];
};

//better version
//const doubleAndReturnArgs = (arr, ...args) => [ ...arr, ...args.map((v) => v * 2) ];

//5 Slice and Dice
/** remove a random element in the items array
and return a new array without that item. */

/** remove a random element in the items array and return a new array without that item. */
const removeRandom = (items) => {
	let idx = Math.floor(Math.random() * items.length);
	console.log(idx + 1);
	return [ ...items.slice(0, idx), ...items.slice(idx + 1) ]; // start to idx, then idx + 1until the end.
};

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
	return [ ...array1, ...array2 ];
};

/** Return a new object with all the keys and values
  from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
	let newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
	let newObj = { ...obj };
	delete newObj[key];
	return newObj;
};

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
	let newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};
