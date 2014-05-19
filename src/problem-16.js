/**
 * @description  power digit sum - given 2 numbers, returns sum of the individual digits in the pow result
 * 88 bytes - http://projecteuler.net/problem=16
 * @param {Number} u - initial number
 * @param {Number} m - pow factor
 * @returns {Number}
 */
function s(u,m){return(Math.pow(u,m)+'').split('').reduce(function(s,n){return~~s+~~n})}
console.log(s(2, 15), s.toString().length);
console.log(Math.pow(2, 1000));