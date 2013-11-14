/**
 * In a range of numbers, return the lowest number that is evenly divisible by all of them
 * 82 bytes - http://projecteuler.net/problem=2
 * @param {Array} r range of numbers to consider
 * @param i* unused, var hack
 * @param c* unused, var hack
 * @returns {Number}
 */
function m(r,i,c){i=0,c=function(e){return i%e!=0};while(i++,r.some(c)){}return i}

console.time('new');
console.log(m(rangeTo(10)), m.toString().length);
console.timeEnd('new');

/**
 * @description Create an array range helper
 * @param {Number} i range size
 * @returns {Array}
 */
function rangeTo(i){return i?rangeTo(i-1).concat(i):[]}
