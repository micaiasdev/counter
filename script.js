var numero1 = 0;
var numero2 = 0;

function incrementarPontos(time) {
	const pontosElement = document.getElementById(time);
	console.log(pontosElement);
	if (time == "Time1") {
		pontosElement.innerText = ++numero1;
	} else {
		pontosElement.innerText = ++numero2;
	}
}

function decrementarPontos(time) {
	const pontosElement = document.getElementById(time);
	if (time == "Time1" && numero1 > 0) {
		pontosElement.innerText = --numero1;
	} else if (numero2 > 0) {
		pontosElement.innerText = --numero2;
	}
}
