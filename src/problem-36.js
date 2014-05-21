/**
 * @description Brute force sum of base2 and base10 palindromes up to a number
 * 146 bytes. http://projecteuler.net/problem=36
 * @param {Number} a Max number
 * @param {*=} l unused, var hack
 * @param {*=} i unused, var hack
 * @param {*=} n unused, var hack
 * @param {*=} d unused, var hack
 * @param {*=} r unused, var hack
 * @returns {Number}
 */
function p(a,l,i,n,d,r){for(l='',r=function(n){return(n+l).split(l).reverse().join(l)==n},d=0,n=0;n<a;n++)r(n)&&r(n.toString(2))&&(d+=n);return d}

console.time('palendome bases');
console.log(p(1000000), p.toString().length);
console.timeEnd('palendome bases');
