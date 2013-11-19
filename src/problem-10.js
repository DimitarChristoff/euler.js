/**
 * Returns the sum of all primes between number 1 and number 2
 * 101 bytes - http://projecteuler.net/problem=10
 * @param {Number} r
 * @param {Number} i
 * @param m* unused, var hack
 * @param e* unused, var hack
 * @param s* unused, var hack
 * @param _*
 * @returns {Number}
 *//*jshint -W041*/
function p(r,i,m,e,s){for(s=0;r<i;r++){for(e=0,m=2;m<=Math.sqrt(r)&&!e;e=0==r%m++);s+=r*+!e}return s}

/*
longer but faster, 107 bytes, cached Math.sqrt(r):

function p(r,i,m,e,s,_){for(s=0;r<i;r++){for(e=0,_=Math.sqrt(r),m=2;m<=_&&!e;e=0==r%m++);s+=r*+!e}return s}
                    ^^ +2bytes                   ^^ +3bytes            ^ +1byte

Longer but faster still, 110 bytes, does odd numbers only and compares against int sqrt, not float, which 
is upto 50% faster in V8 (node.js) and Safari:

function p(r,i,m,e,s,_){for(s=0;r<i;r+=2){for(e=!1,_=Math.sqrt(r)|0,m=2;m<=_&&!e;e=0==r%m++);s+=r*+!e}return s}
                                       ^ +1byte                  ^^ +2bytes
 */
console.log(p(3,2000000), p.toString().length);
