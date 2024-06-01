let vitoria = 50;
let derrota = 15;

function calcularRank(vitoria, derrota){
    let rankAtual = vitoria - derrota;
    
    if (rankAtual <= 10){
        console.log("Você é Ferro");
    } else if (rankAtual > 10 && rankAtual <= 20){
        console.log("Você é Bronze");
    } else if (rankAtual > 20 && rankAtual <= 50){
        console.log("Você é Prata");
    } else if (rankAtual > 50 && rankAtual <= 80){
        console.log("Você é Ouro");
    } else if (rankAtual > 80 && rankAtual <= 90){
        console.log("Você é Diamante");
    } else if (rankAtual > 90 && rankAtual <= 100){
        console.log("Você é Lendário");
    } else if (rankAtual >= 101){
        console.log("Você é Imortal");
    }
}

calcularRank(vitoria, derrota);
