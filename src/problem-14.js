/**
 * @description Which starting number, under a value, produces the longest Collatz chain?
 * 108 bytes, http://projecteuler.net/problem=14
 * @param {Number} o max number to check
 * @param {*=} l unused var hack, max number so far
 * @param {*=} a unused var hack, max collatz moves so far
 * @param {*=} t unused var hack, collatz local count
 * @param {*=} z unused var hack, collatz local loop
 */
function C(o,l,a,t,z){l=o,a=1;while(o--){t=1,z=o;while(z>1)t++,z=!(z%2)?z/2:(3*z)+1;t>a&&(l=o,a=t)}return l}
console.time('collatz');
console.log(C(1000000), C.toString().length);
console.timeEnd('collatz');
/**
 *
 * @param {Number} o
 * @param l
 * @param z
 */
function c(o,l){l=1;while(o>1)l++,o=!(o%2)?o/2:(3*o)+1;return l}
console.log(c(13), c.toString().length);
