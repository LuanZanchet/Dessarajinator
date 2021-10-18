function retornaValor()
{
	let n = document.getElementById('input').value;
	if (n > 21) {
		n = 21;
		document.getElementById('input').value = 21;		
	}
	return n;
}

function Desarranjo() 
{
	let n = retornaValor();

	let frac3 = 0
	for (i = 2; i <= n; i++) {
		if (i % 2 == 0) {
			cont2 = i;
			den = 1;
			for (cont1 = 1; cont1 <= cont2; cont1++) {
				den = den * cont1;
			}
			frac1 = 1 / den;
			frac3 = frac3 + frac1;
		} else {
			cont2 = i;
			den = 1;
			for (cont1 = 1; cont1 <= cont2; cont1++) {
				den = den * cont1;
			}
			frac2 = 1 / den;
			frac3 = frac3 - frac2;
		}
	}
	var fat1 = 1;
	for (fat2 = 1; fat2 <= n; fat2++) 
	{
		fat1 = fat1 * fat2;
	}
	des = frac3 * fat1;

	console.log(des % 1 === 0);
	let valorFinal = 	des % 1 === 0 ? des : des.toFixed(2);

	document.getElementById('resultado').innerText = "A quantia de desarranjos para " + n + " termos é: " + valorFinal;

}