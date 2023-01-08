const a =+prompt('N?');
for (let i = 2; i <= a;i++){
	let prime = false;
	for ( let m = 2; m < i; m++){
		if (i % m == 0) {
			prime = true;

		}
	}
	if ( prime === false){
		console.log(i);
	}
}
	
	
	
	

