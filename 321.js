const CARDS = [
{
	pin:101,
	kod:102,
	balans:500,

},
{
	pin:103,
	kod:104,
	balans:600,
}
];
 
  let found = null;
 numbers = 3;

 const nabievv00 = (pin,kod) =>{
 	let found = null;
for (let i = 0; i < CARDS.length; i++){
	if (pin == CARDS[i].pin && kod == CARDS[i].kod) {
		found = CARDS[i].balans;
		break;


		}
	}
return found;

};

while(found === null && numbers > 0 ) {
	
let pin = +prompt('Ваш пин код');
let kod = +prompt('Ваш код');

	found = nabievv00(pin,kod)

numbers--;
if ( found == null && numbers> 0){
	alert(numbers + `${numbers > 1 ? 'шанстар калады!!!' : 'шанс калады!!!' }`);

}
};
	
if ( found !== null){

	alert('Кош келиниз');
	alert('Balans:'+ found + ' com');
	let u =prompt('Cколько вам нужно?');
		if (u <= found) {
			
			alert('Подождите 3 сек')
			alert('У вас остался')
			let p=found-u
			alert( p + ' com')

		}
		else{
			alert('Баланс жетишсиз')
		}
	
}
else {
	alert('Картаныз ключ?')
}

