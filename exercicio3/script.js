//Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o 
//valor da resposta em uma const `nacionalidade`.

let nacionalidade = prompt("Escreva aqui a sua nacionalidade.")
nacionalidade = nacionalidade.toLowerCase()

//Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
//- brasileira;
//- argentina;
//- uruguaia;
//- chilena;
//- colombiana;

//Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na 
//const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a 
//nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor
//de `nacionalidade` não corresponda a nenhum dos valores.

if (nacionalidade === "brasileira"  || nacionalidade === "argentina" || 
nacionalidade === "uruguaia" || nacionalidade === "chilena" || 
nacionalidade === "colombiana"){
    console.log("A sua nacionalidade é:", nacionalidade)
} else {
    console.log("Nacionalidade não encontrada.")
}