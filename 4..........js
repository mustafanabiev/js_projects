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
 
 let found = false;
 numbers = 3;
while(found === false && numbers > 0 ) {
	;
let pin = +prompt('Ваш пин код');
let kod = +prompt('Ваш код');
	

for (let i = 0; i < CARDS.length; i++){
	if (pin == CARDS[i].pin && kod == CARDS[i].kod) {
		found = true;
		break;


		}
};
numbers--;
if ( found == false && numbers> 0){
	alert(numbers + ' шанс калады!!!');

}


}
if ( found == true){

	alert('Кош келиниз');
}
else {
	alert('Картаныз ключ?')
}

