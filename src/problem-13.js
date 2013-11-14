var s = (function(){
	/**
	 * BigInt algo idea by Dawid Jakowiak - adds 2 BigInt numbers and returns a String that represents them
	 * JavaScript cannot cope with nums beyond 32bit signed int so we do this as strings and arrays
	 * @param {String} a Number A
	 * @param {String} b
	 * @param r* unused, var hack
	 * @param o* unused, var hack
	 * @param l* unused, var hack
	 * @private
	 * @returns {String}
	 */
	function b(a,b,r,o,l){
		a=a.split(''),b=b.split(''),r=a.length-b.length?b:a,o=0;
		// equal the lengths of the 2
		while(a.length!==b.length)r.unshift(0);
		l=a.length,r=[];
		// loop from right and shift, keeping remainder in o to pass on to prev item on next iteration.
		while(l--)r[l]=+a[l]+ +b[l]+o,(o=+(r[l]>=10))&&(r[l]=r[l]%10),r[l];
		// if remainder in memory, store it, return the array as string.
		return o?(r.unshift(o),(r[0]=o),r.join('')):r.join('');
	}


	/**
	 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
	 * 78 bytes - http://projecteuler.net/problem=13
	 * @param {Array} d Array of numbers to add
	 * @param {Number} l Length to consider
	 * @param b* unused, var hack
	 * @param i* unused, var hack
	 * @returns {String}
	 */
	return function s(d,l,c,i){c=d[i=0],l--;while(i<l)c=b(c,d[++i]);return c.slice(0,10)}
}());

// read data and pass an array to the function
console.log(s(require('fs').readFileSync('../data/data-13.txt', 'utf-8').split('\n'), 100), s.toString().length);