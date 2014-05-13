/**
 * Given an argument n, return the n-th prime number
 * 109 bytes - http://projecteuler.net/problem=7
 * @param {Number} r - return the r-th prime number
 * @param {*=} i unused, var hack
 * @param {*=} m unused, var hack
 * @param {*=} e unused, var hack
 * @param {*=} s unused, var hack
 * @param {*=} _ unused, var hack
 * @returns {Number}
 */
function p(r,i,m,e,s,_){for(i=2,s=0;s!=r;i++){for(e=0,m=2;m<=Math.sqrt(i)&&!e;e=i%m++==0);s+=!e,_=i}return _}

console.log(p(10001), p.toString().length);
