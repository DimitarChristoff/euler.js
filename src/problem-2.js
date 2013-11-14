/**
 * returns the sum of all even Fibernacci numbers under 4,000,000, starting from 1
 * 72 bytes - http://projecteuler.net/problem=2
 * @param {Number} s starting, should be 1
 * @param {Number} m max, should be 4000000
 * @param r* unused, var hack
 * @param n* unused, var hack
 * @returns {number}
 */
function f(s,m,r,n){for(r=n=s+s;n<=m;)n=s+(s=n),n%2==0&&(r+=n);return r}
console.log(f(1,4000000), f.toString().length);
