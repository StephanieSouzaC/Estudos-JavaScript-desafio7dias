let qualOperacao = "";
let n1 = "";
let n2 = "";


function soma (){
    n1 = Number(prompt ("Digite o primeiro número."));
    n2 = Number(prompt ("Digite o segundo número."));
    return alert(`A soma entre ${n1} e ${n2} é igual à ${n1 + n2}`);
}

function subtracao (){
    n1 = Number(prompt ("Digite o primeiro número."));
    n2 = Number(prompt ("Digite o segundo número."));
    return alert(`A subtração entre ${n1} e ${n2} é igual à ${n1 - n2}`);
}

function multiplicacao (){
    n1 = Number(prompt ("Digite o primeiro número."));
    n2 = Number(prompt ("Digite o segundo número."));
    return alert(`A multiplicação entre ${n1} e ${n2} é igual à ${n1 * n2}`);
}

function divisao (){
    n1 = Number(prompt ("Digite o primeiro número."));
    n2 = Number(prompt ("Digite o segundo número."));
    return alert(`A divisão entre ${n1} e ${n2} é igual à ${n1 / n2}`);
}

do{
    qualOperacao = prompt("Qual operação você deseja realizar? Responda 'soma', 'subtração', 'multiplicação' ou 'divisão'. Caso desejar sair responda 'sair'.");

    switch(qualOperacao){
        case 'soma':
            soma();
        break;

        case 'subtração':
            subtracao();
        break;

        case 'multiplicação':
            multiplicacao();
        break;

        case 'divisão':
            divisao();
        break;

        case 'sair':
        break;

        default:
            alert("Opção inválida, tente novamente."); 
    }

}while(qualOperacao != 'sair');

alert ('Até logo!');
