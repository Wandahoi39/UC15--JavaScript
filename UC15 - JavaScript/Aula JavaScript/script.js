//Aula 1

console.log("Hello, World!")
console.log("Hi")
alert("Erro no sistema") //alguem me desconfigurou
confirm("Você deseja continuar?")

let apelido = "Vinícius"
console.log(apelido)

let numero = 30+9
console.log(numero)

let idade = 16
console.log(idade + "anos")

console.log(10 < 5)

let identidade = prompt("Qual o seu nome?")
console.log("Olá," + nome)

if (identidade == "Vinícius") {
    alert("Aprovado")
} else{
    alert("Recusado")
} 

//Aula 2

let nome = 'Vinícius';
let curso = 'MedioTec';
let ano = 2;

let texto = ('Olá, ' + nome + '! Você está no ' + ano + '° ano do ' + curso + '.')
console.log(texto)

let atualizado = `Olá ${nome}! Você está no ${ano} ° do ${curso}`
console.log(atualizado)

let multilinhas = `
Primeira Linha
Segunda Linha
Terceira Linha
`;

console.log(texto)
console.log(atualizada)
console.log(multilinhas)

let texto = ' Desenvolvedor Front-end ';

//Comprimento
let tamanho = texto.length

//Remover espaços das bordas
texto.trim()

//Maiúsculo e minúsculo
texto.trim().toUpperCase
texto.trim().toLowerCase

texto.replace('Front-end', 'Back-end')

//Número - Oparações e cuidados

//As quatro operações
3 + 9
3 - 9
3 * 9
3 / 9

//Módulo (resto da divisão)
3 % 9

//Potência
3 ** 9

//Incremento e decremento
let x = 5,
x++
x--
x += 3
x *= 2

//O objeto math - funções matemáticas

Math. round(4.7)
Math. floor (4.9)
Math. cell (4.1)
Math. abs (-10)
Math. max(3,7,1)
Math. min(3,7,1)
Math. sqrt(16)
Math. PI
Math. random

//Número aleatório entre 1 e 10
Math. floor (Math. random()* 10) + 1

//Quando você soma string com número, JS concatena
'5' + 3
'5' - 3

//Sempre converter antes de somar
Number('5') + 3
parseInt('5') + 3