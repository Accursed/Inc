var attacks = 0;
function attack(number) {
	attacks = attacks + number;
	document.getElementById('attacks').innerHTML = attacks;
}