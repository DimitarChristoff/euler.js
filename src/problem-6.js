/**
 * Returns the difference of the sum of all natural numbers squared and the sum of squares of the same.
 * 62 bytes - http://projecteuler.net/problem=6
 * @param {Number} q Starting number -1
 * @param {Number} u Ending number
 * @param a* unused, var hack
 * @param r* unused, var hack
 * @returns {Number}
 */
function s(q,u,a,r){for(a=r=0;q<u;a+=++q,r+=q*q);return a*a-r}

console.log(s(0,100), s.toString().length);