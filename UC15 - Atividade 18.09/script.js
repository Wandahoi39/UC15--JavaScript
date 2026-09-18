function mostrarCidade() {
    var cidade = document.getElementById("cidade").value;
    document.getElementById("resultado").innerHTML = "Você mora em " + cidade + ".";
}

function mudarCor() {
    var elemento = document.getElementById("resultado");
    if (elemento.style.color === "blue") {
        elemento.style.color = "black";
    } else {
        elemento.style.color = "blue";
    }
}

function mudartamanhoFonte() {
    var elemento = document.getElementById("resultado");
    if (elemento.style.fontSize === "16px") {
        elemento.style.fontSize = "20px";
    } else {
        elemento.style.fontSize = "16px";
    }
}

let contador = 10;

function aumentar() {
    contador++;
    document.getElementById("numero").textContent = contador;
}

function diminuir() {
    contador--;
    document.getElementById("numero").textContent = contador;
}