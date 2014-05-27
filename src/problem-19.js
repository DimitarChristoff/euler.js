/**
 * @description Returns the number of Sundays falling on the first of the month between two dates
 * 95 bytes - http://projecteuler.net/problem=19
 * @param {Date} u - start date
 * @param {Date} n - end date
 * @param {*=} d, unused var hack
 * @param {*=} a, unused var hack
 * @returns {Number}
 */
function s(u,n,d,a){for(a=0;u<n;a+=u.getDate()+u.getDay()==1,u=new Date(+u+86400000));return a}

console.log(s(new Date(1901, 0, 1), new Date(2000, 11, 31)), s.toString().length);
