function p(r,i,m,e,s){for(i=2,s=0;s!=r;i++){for(e=0,m=2;m<=Math.sqrt(i)&&!e;e=0==i%m++);s+=+e}return i}

console.log(p(10001), p.toString().length);
