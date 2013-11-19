/**
 * Returns the sum of all primes between number 1 and number 2
 * 109 bytes - http://projecteuler.net/problem=10
 * @param {Number} r
 * @param {Number} i
 * @param m* unused, var hack
 * @param e* unused, var hack
 * @param s* unused, var hack
 * @param _*
 * @returns {Number}
 *//*jshint -W041*/
function p(r,i,m,e,s,_){for(s=0;r<i;r++){for(e=!1,_=Math.sqrt(r),m=2;m<=_&&!e;e=0==r%m++);e||(s+=r)}return s}
/*
function p(r,i,m,e,s,_){for(s=0;r<i;r+=2){for(e=!1,_=Math.sqrt(r)|0,m=2;m<=_&&!e;e=0==r%m++);e||(s+=r)}return s}
                                       ^ +byte                   ^^ +2bytes

this is not shorter but 50% faster on v8 and marginally faster in browsers
after coercing sqrt result to int. */
console.log(p(3,2000000), p.toString().length);