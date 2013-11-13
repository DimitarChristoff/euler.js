var data = require('fs').readFileSync('data-13.txt', 'utf-8').split('\n');
/**
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 * @param d
 * @param l
 * @param b
 * @param i
 * @returns {String}
 */
function s(d,l,c,i){
	c=d[i=0],l--;
	while(i<l)c=big(c,d[++i]);
	return c.slice(0,10);
}

function big(a,b,r,o,l) {
	a=a.split(''),b=b.split(''),r=a.length-b.length?b:a,o=0;
	while(a.length!==b.length) r.unshift(0);
	l = a.length, r = [];
	while(l--)
		r[l] = (+a[l] + +b[l] + o), (o=+(r[l]>=10))&&(r[l]=r[l]%10),r[l];
	return o ? (r.unshift(o), (r[0] = o), r.join('')) : r.join('');
}

console.log(s(data,data.length), s.toString().length);
