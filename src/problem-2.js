/**
 * @description returns the sum of all even Fibernacci numbers under 4,000,000, starting from 1
 * 63 bytes - http://projecteuler.net/problem=2
 * by @Danielepolencic
 * @param {Number} s starting, should be 1
 * @param {Number} m max, should be 4000000
 * @param {*=} r unused, var hack
 * @param {*=} n unused, var hack
 * @returns {Number}
 *//*jshint -W041*/
function f(s,m,r){return(r=s+s||1)<m?(0==r%2?r:0)+f(r,m,~~s):0}
console.log(f(1,4000000), f.toString().length);