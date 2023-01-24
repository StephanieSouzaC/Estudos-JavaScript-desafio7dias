let numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let tentativa = "";
let acertou = false;

alert ('Tente adivinhar o número estabelecido. Você terá 3 tentativas para acertar.');

for (let contador = 3; contador > 0; contador--){
    tentativa = Number(prompt('Digite um número de 0 a 10.'));
    if (tentativa === numeroAleatorio){
        alert(`Parabéns, você acertou! O número é ${numeroAleatorio}!`);
        acertou = true;
        break;
    }

    alert (`Resposta incorreta, tente novamente! Você ainda tem ${contador-1} tentativas`);
}

if(!acertou){
    alert (`Que pena, suas tentativas esgotaram. O número era ${numeroAleatorio}`);
}
