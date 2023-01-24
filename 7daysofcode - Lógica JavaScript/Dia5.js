let adicionarItens = "";
let nomeItem = "";
let categoria = "";
let frutas = [];
let laticinios = [];
let congelados = [];
let doces =[];
let alimentosBasicos = [];

alert ('Olá, vamos organizar sua lista de compras? Digite os itens que você deseja adicionar.');

adicionarItens = prompt('Você deseja adicionar algum item na sua lista? Responda sim ou não.');

while(adicionarItens != "sim" && adicionarItens != "não"){

    alert (`${adicionarItens} é uma resposta inválida!`);
    adicionarItens = prompt('Tente novamente.');

}

while (adicionarItens === "sim"){

    nomeItem = prompt('Qual item você deseja adicionar?');

    categoria = prompt('Em qual categoria você deseja inserir esse item? Responda frutas, laticínios, congelados, doces ou alimentos básicos.');
    
    if (categoria === "frutas"){
        frutas.push(nomeItem);
    }

    else if (categoria === "laticínios"){
        laticinios.push(nomeItem);
    }

    else if (categoria === "congelados"){
        congelados.push(nomeItem);
    }

    else if(categoria === "doces"){
        doces.push(nomeItem);
    }

    else if (categoria === "alimentos básicos"){
        alimentosBasicos.push(nomeItem);
    }

    else {
        alert(`${categoria} é uma categoria inválida!`);
    }

    adicionarItens = prompt('Você deseja adicionar algum item na sua lista? Responda sim ou não.');
}

if (adicionarItens === "não"){
        alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n  Alimentos Básicos: ${alimentosBasicos}\n`);
}
