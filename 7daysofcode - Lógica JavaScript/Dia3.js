const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");

switch (area){
    case 'Front-End':
       const front = prompt("Você quer aprender React ou Vue?");
        if(front === 'React'){
             alert('Segue link para estudos https://pt-br.reactjs.org/docs/getting-started.html');
        } 
        else if (front === 'Vue') {
            alert('Segue link para estudos https://br.vuejs.org/v2/guide/index.html');
        }
        else{
            alert('Opção inválida!')
        }
        break;
    case 'Back-End':
        const back = prompt("Você quer aprender C# ou Java?");
        if(back === 'C#'){
            alert('Segue link para estudos https://learn.microsoft.com/pt-br/dotnet/csharp/'); 
        }
        else if(back === 'Java'){
            alert('Segue link para estudos https://docs.oracle.com/en/java/');
        }
        else{
            alert('Opção inválida!')
        }
        break;
    default:
        alert('Opção Inválida!');
}

const escolha = prompt ('Você quer se especializar na área escolhida ou se desenvolver para se tornar Fullstack? Responda com especializar ou Fullstack.');

switch(escolha){
    case 'especializar':
        alert(`Continue estudando para dominar a ${area}`);
    break;
    case 'Fullstack':
        alert('Parabéns! Para isto você pode estudar as linguagens Html, Css, JavaScript, C# e Java.');
    break;
    default:
        alert('Opção Inválida!');
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}
