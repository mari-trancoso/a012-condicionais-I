//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou 
//ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

let idade = 28
let terminouEnsinoMedio = true
let isCursandoOutraFaculdade = false


//Crie um `if` para cada variável, checando as seguintes afirmacões:
//- Se a pessoa tem 18 anos ou mais;
//- Se a pessoa terminou o ensino médio;
//- Se a pessoa NÃO está cursando alguma faculdade;


if(idade >=18){
    console.log("A pessoa é maior de idade.")
}else{
	console.log("A pessoa é menor de idade.")
}

if(terminouEnsinoMedio){
    console.log("A pessoa terminou o ensino médio")
} else {
    console.log("A pessoa não terminou o ensino médio.")
}

if (isCursandoOutraFaculdade){
    console.log("A pessoa está cursando faculdade.")
} else{
    console.log("A pessoa não está cursando faculdade.")
}