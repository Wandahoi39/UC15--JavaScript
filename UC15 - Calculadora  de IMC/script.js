//Projeto: Calculadora de IMC

/* Classificação
Abaixo de 18,5 - Abaixo do peso
18,5 a 24,9 - Peso normal
25 a 29,9 - Sobrepeso
30 a 34,9 - Obesidade grau I
35 a 39,9 - Obesidade grau II
40 ou mais - Obesidade grau III */

let nome = prompt("Qual é o seu nome?")
if (nome) {
    
} else{
    alert("Você não colocou o seu nome")
};

let pesoStr = prompt(`Olá, ${nome}! Qual é o seu peso em kg?\n(use vírgula ou ponto - ex: 75,5 ou 75.5)`)
if (pesoStr) {
    
} else{
    alert("Você não colocou o seu peso")
};

let altStr = prompt ('Qual é a sua altura em metros? \n(ex: 1,75 ou 1.75)')
if (altStr) {
    
} else{
    alert("Você não colocou a sua altura")
}

let peso = Number(pesoStr.replace(',', '.'));
let alt = Number(altStr.replace(',','.'));

console.log('Nome', nome);
console.log('Peso', peso, typeof peso);
console.log('Altura', alt, typeof alt);

let imc = peso / (alt * alt);
let imcFormatado = imc.toFixed(1);

if (imc < 18.5) {
    classificação = "Abaixo do peso"
    console.log('Abaixo da peso')
} else if (imc < 25) {
    classificação = "com peso normal"
    console.log('Peso normal')
} else if (imc < 30) {
    classificação = "com sobrepeso"
    console.log('Sobrepeso')
} else if (imc < 35) {
    classificação = "com obesidade grau I"
    console.log('Obesidade grau I')
} else if (imc < 40) {
    classificação = "com obesidade grau II"
    console.log('Obesidade grau II')
} else if (imc > 40) {
    classificação = "com obesidade grau III"
    console.log('Obesidade grau III')
}

let aviso = alert(`O seu IMC é ${imcFormatado}, ou seja, você está ${classificação}`)

