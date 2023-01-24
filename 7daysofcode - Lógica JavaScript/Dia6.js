let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
 
let adicionarLista = prompt("Quer adicionar algum item a lista? Responda com sim ou não.");
let categoria = "";
let item = "";
let removerItem = "";

while(adicionarLista != 'sim' && adicionarLista != 'não'){
    alert("Não consegui entender :/");
    adicionarLista = prompt("Tente novamente: ");
}
 
while(adicionarLista == 'sim'){
 
    categoria = prompt("Qual categoria vc quer adicionar: frutas, laticínios, congelados ou doces? ");
 
    while(categoria != 'frutas' && categoria != 'laticínios' && categoria != 'congelados' && categoria != 'doces'){
        categoria = prompt("Categoria invalida. Tente novamente: ");
    }
 
    item = prompt("Qual item quer adicionar? ");
 
    if(categoria == 'frutas'){
        frutas.push(item);
    } else if(categoria == 'laticínios'){
        laticinios.push(item);
    } else if(categoria == 'congelados'){
        congelados.push(item);
    } else if(categoria == 'doces'){
        doces.push(item);
    }
 
    adicionarLista = prompt("Deseja adicionar mais algo 'sim' ou 'não'? Caso desejar remover algo digite 'remover'");
 
    while(adicionarLista != 'sim' && adicionarLista != 'não' && adicionarLista != 'remover'){
        alert("Não consegui entender, tente novamente: ");
        adicionarLista = prompt("Deseja adicionar ou remover algo? ");
    }

    while(adicionarLista == 'remover'){

        alert(`Frutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}`);

        categoria = prompt("Qual a categoria do item que deseja remover? ");
    
        while(categoria != 'frutas' && categoria != 'laticínios' && categoria != 'congelados' && categoria != 'doces'){
            categoria = prompt("Categoria invalida. Tente novamente: ");
        }

        removerItem = prompt("Qual item deseja remover? ");
    
        if(categoria == 'frutas'){

            var temItem = frutas.includes(removerItem);
            while(temItem == false){
                removerItem = prompt("Item invalido. Tente novamente");
                temItem = frutas.includes(removerItem);
            }
            var achaIndice = frutas.indexOf(removerItem);
            var remove = frutas.splice(achaIndice, 1);
            alert(`Frutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}`);

        } else if(categoria == 'laticínios'){

            temItem = laticinios.includes(removerItem);
            while(temItem == false){
                removerItem = prompt("Item invalido. Tente novamente");
                temItem = laticinios.includes(removerItem);
            }
            achaIndice = laticinios.indexOf(removerItem);
            remove = laticinios.splice(achaIndice, 1);
            alert(`Frutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}`);

        } else if(categoria == 'congelados'){

            temItem = congelados.includes(removerItem);
            while(temItem == false){
                removerItem = prompt("Item invalido. Tente novamente");
                temItem = congelados.includes(removerItem);
            }
            achaIndice = congelados.indexOf(removerItem);
            remove = congelados.splice(achaIndice, 1);
            alert(`Frutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}`);

        } else if(categoria == 'doces'){

            temItem = doces.includes(removerItem);
            while(temItem == false){
                removerItem = prompt("Item invalido. Tente novamente");
                temItem = doces.includes(removerItem);
            }
            achaIndice = doces.indexOf(removerItem);
            remove = doces.splice(achaIndice, 1);
            alert(`Frutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}`);
            
        }
    
        adicionarLista = prompt("Deseja adicionar mais algo 'sim' ou 'não'? Caso desejar remover algo digite 'remover'");
    
    }

}
 
alert(`Frutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}`);
