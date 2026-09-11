console.log("Olá, Larissa! Seja bem vinda!")
console.log("Olá, Levi! Seja bem vindo!")
console.log("Olá, Julia! Seja bem vinda!")

function darBoasVindas(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo!`)
}

darBoasVindas("Levi");
darBoasVindas("Julia");
darBoasVindas("Larissa");


function apresentar(nome, idade){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
}

function estudo(nome){
    console.log(`${nome} está estudando.`)
}

estudo("Gaby")


function somar(a, b) {
    return a + b;
}

somar(5, 3)

let resultafo = somar(5, 3);
console.log(resultado);

// Criar uma função que pegue dois valores e de a média se ele for acima de 6 é aprovado senão é reprovado

function verificarMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;

    if (media > 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(verificarMedia(8, 7));

let nome = prompt("digite o nome do aluno.");
let nota1 = Number("digite a primeira nota.");
let nota2 = Number("digite a segunda nota.");

let media1 = calcularMedia(nota1, nota2);

console.log('$(nome) ficou com a media $(media1)');

if (media1 >= 6) {
    console.log('$(nome) está aprovado!');
    
} else {
    console.log('$(nome) está reprovado!');
}

calcularMedia(nota1, nota2)

// Crie um programa que ultilize uma função com vários parâmetros para calcular o custo de uma viagem. O programa deverá receber os valores de passagem, alimentação e passeios, calcular o total e informar se a viagem está dentro do orçamento de R$ 2.000,00

function calcularViagem(passagem, alimentacao, passeios) {
    let total = passagem + alimentacao + passeios;

    console.log("Custo total da viagem: R$ " + total);

    if (total <= 2000) {
        console.log("A viagem está dentro do orçamento!");
    } else {
        console.log("A viagem ultrapassou o orçamento!");
    }
}

calcularViagem(800, 600, 400);
