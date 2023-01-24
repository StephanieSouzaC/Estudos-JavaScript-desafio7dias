var nome = prompt('Qual é seu nome?');
var idade = prompt('Quantos anos você tem?');
var linguagem = prompt('Qual linguagem de programação vocês está estudando?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

var estudar = Number(prompt(`Você gosta de estudar ${linguagem}? Responda com número 1 para SIM e número 2 para NÃO`));

if (estudar === 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
}
else if (estudar === 2) {
    alert('Ahh, que pena... Já tentou aprender outras linguagens?');
}
else{
    alert('Número invalido!!!')
}
