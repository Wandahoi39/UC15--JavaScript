//Questão 1
let numero1 = 10;
let numero2 = 5;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);

//Questão 2
let numero = 2;

console.log("Dobro:", numero * 2)
console.log("Triplo:", numero * 3)

//Questão 3
let nome = prompt("Qual é o seu nome?", "Digite aqui");
if (nome) {
alert("Olá, seja bem-vindo, "  + nome);
} else {
alert("Você não informou seu nome.");
}

let idade = prompt("Qual a sua idade?", "Digite aqui");
if (nome) {
alert("Obrigado por colocar sua idade!");
} else {
alert("Você não informou sua idade.");
}

console.log(nome)
console.log(idade)
console.log("Olá, " + nome + "Você tem " + idade + "anos.")

//Questão 4
let nota1 = prompt('Qual a primeira nota?');
let nota2 = prompt('Qual a segunda nota?');
let nota3 = prompt('Qual a terceira nota?');

let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

let resultado = alert('A sua média é ' + media + '.')

//Questão 5
let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let loginUsuario = prompt('Qual o seu usuário?')
let loginSenha = prompt('Qual a sua senha?')

if (loginSenha == "1234" && loginUsuario == "Admin") {
    alert("Login realizado com sucesso!")
} else {
    alert("Login ou senha incorretos")
}

//Questão 6
let valor1 = prompt("Escolha um valor.")
let valor2 = prompt("Escolha outro valor diferente do anterior")

if (valor1 < valor2){
    alert(`${valor1} é menor que ${valor2}`)
} else {
    alert(`${valor1} é maior que ${valor2}`)
}