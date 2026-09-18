function mudartexto() {
    document.getElementById
    ("titulo").textContent = "Você clicou no botão!";
}

function mudarcor() {
    document.getElementById("mensagem").style.color =
    "blue";
}

//--ontem, hj-->

function mostrarNome() {
    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").textContent = "Olá, " + nome + "!";
}


let contador = 0;

function aumentar() {
    contador++;
    document.getElementById("numero").textContent = contador;
}

function diminuir() {
    contador--;
    document.getElementById("numero").textContent = contador;
}