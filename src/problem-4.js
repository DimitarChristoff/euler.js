/**
 * Brute force highest Palindrome that is a product of a range of numbers
 * 104bytes + 66bytes flip code. http://projecteuler.net/problem=4
 * @param {Number} a Start number
 * @param {Number} l End number
 * @param e* unused, var hack
 * @param n* unused, var hack
 * @param d* unused, var hack
 * @param r* unused, var hack
 * @returns {Number}
 */
var p = (function(){
	/**
	 * Flip string. Reversed strings of Palindrome numbers are the same as the original, written for speed
	 * @param {String} s the string to reverse
	 * @param i* unused, var hack
	 * @param o* unused, var hack
	 * @returns {String}
	 */
	function f(s,i,o){for(i=s.length-1,o='';i>=0;o+=s[i--]){}return o}
	return function p(a,l,e,n,d,r){for(d=0,e=l;e>=a;--e)for(n=l;n>=a;--n,(r=e*n,f(r+'')==r&&d<r&&(d=r))){}return d}
}());

console.time('Flip string via loop')
console.log(p(100,999), p.toString().length);
console.timeEnd('Flip string via loop');

/**
 * Brute force highest Palindrome that is a product of a range of numbers
 * A smaller version but less performant due to array operations, only +10% on v8.
 * 137bytes. http://projecteuler.net/problem=4
 * @param {Number} a Start number
 * @param {Number} l End number
 * @param e* unused, var hack
 * @param n* unused, var hack
 * @param d* unused, var hack
 * @param r* unused, var hack
 * @returns {Number}
 */

function P(a,l,e,n,d,r,o){for(o='',d=0,e=l;e>=a;--e)for(n=l;n>=a;--n,(r=e*n,(r+o).split(o).reverse().join(o)==r&&d<r&&(d=r))){}return d}

console.time('Array.reverse');
console.log(P(100,999), P.toString().length);
console.timeEnd('Array.reverse');
