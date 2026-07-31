let nome = prompt("Qual é o seu nome?", "Digite aqui");
if (nome) {
alert("Olá, seja bem-vindo, "  + nome);
} else {
alert("Você não informou seu nome.");
}

let função = prompt("Qual o cargo (ou função) que você exerce?")
if (função) {
    alert("Obrigado por informar sua função/cargo!")
} else {
    alert("Você não informou o seu cargo!")
}

let instituição = prompt("Qual instituição (empresa ou escola) você frequenta?")
if (instituição) {
    alert("Obrigado por informar sua instituição!")
} else {
    alert("Você não informou a empresa/escola!")
}
let email = prompt("Qual o seu email?")
if (email) {
    alert("Obrigado por informar seu e-mail!")
} else {
    alert("Você não informou seu e-mail!")
}

    console.log(nome)
    console.log(função)
    console.log(instituição)
    console.log(email)


let tarefa2 = alert("Tarefa 2 - Calculadora de Desconto")

let produto = prompt("Qual o nome do produto?")
if (produto) {
    alert("Obrigado por informar o produto!")
} else {
    alert("Você não informou o produto!")
}

let desconto = prompt("Quanto você deseja  saber de desconto?")
if (desconto) {
    alert("Obrigado por informar o desconto!")
} else {
    alert("Você não informou o desconto!")
}

let percentual = prompt("Quanto você deseja saber de percentual?")
if (percentual) {
    alert("Obrigado por informar o percentual!")
} else {
    alert("Você não informou o percentual!")
}
let preço_final = desconto * percentual / 100

let resultado = alert("O valor de " + desconto + " com o percentual de desconto de " + percentual + " é " + preço_final)

