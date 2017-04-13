/**
 * @description In a range of numbers, return the lowest number that is evenly divisible by all of them
 * 82 bytes - http://projecteuler.net/problem=2
 * @param {Array} r range of numbers to consider
 * @param {*=} i unused, var hack
 * @param {*=} c unused, var hack
 * @returns {Number}
 *//*jshint -W041*/
m=(r,i=0,c=e=>i%e!=0)=>{while(i++,r.some(c)){}return i}


/**
 * @description Create an array range helper
 * @param {Number} i range size
 * @returns {Array}
 */
rangeTo = i=>i?rangeTo(i-1).concat(i):[]

range = rangeTo(10)
console.time('new')
console.log(m(range), m.toString().length)
console.timeEnd('new')
