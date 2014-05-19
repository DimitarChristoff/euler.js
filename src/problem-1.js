/**
 * @description returns the sum of all numbers dividable by 3 or 5 under 1000
 * 63 bytes - http://projecteuler.net/problem=1
 * @param {Number} m max value
 * @param {*=} n unused, var hack
 * @param {*=} i unused, var hack
 * @returns {Number}
 *//*jshint -W041*/
function s(m,n,i){for(n=i=0;++i<m;)0==i%3*i%5&&(n+=i);return n}
console.log(s(1000), s.toString().length);