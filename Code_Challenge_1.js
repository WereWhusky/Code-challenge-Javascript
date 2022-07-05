//Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.
//
//Use Array.prototype.map() to map each element to the value returned by fn.
//Use Array.prototype.reduce() to add each value to an accumulator, initialized with a value of 0.
//
//Note: Write code on an initialized git repository

const sumBy = (arr, fn) =>
arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);

	console.log(sumBy([{ n: 1 }, { n: -2 }, { n: 3 }, { n: -4 }], o => o.n));
	console.log(sumBy([{ n: 5 }, { n: -6 }, { n: 7 }, { n: -8 }], 'n'));
