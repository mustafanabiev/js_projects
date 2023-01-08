let a= [0,1];
let n = +prompt('N?');
let i = 2;
 while(i < n){
 	
 	a[i] = a[i-1] + a[i-2];
 	i++;
 }
 console.log(a[n-1]);

 		