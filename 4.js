let CARDS = [
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

let pin = +prompt('Ваш пин код');
let kod = +prompt('Ваш код');
	let found = false;

for (let i = 0; i < CARDS.length; i++){
	if (pin == CARDS[i].pin && kod == CARDS[i].kod) {
		found = true;
		break;


		}
};
if ( found == true){

	alert('Кош келиниз');
}
else {
	alert('Туура эмес');
}

			
		
			
			













