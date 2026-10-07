// BANCO DE DADOS DOS FILMES
// Adicione ou edite os filmes e pistas aqui!
const bancoDeFilmes = [
    {
        respostasValidas: ["homem aranha", "homem-aranha", "spiderman", "spider-man"],
        pistas: [
            "O protagonista é um jovem que leva uma vida comum, mas acaba ganhando poderes especiais.",
            "O personagem consegue escalar paredes e se movimentar pelas cidades.",
            "Depois de ganhar seus poderes, ele passa a usar uma roupa especial para combater o crime.",
            "O personagem utiliza teias para se locomover e capturar seus inimigos.",
            "O herói é conhecido como Homem-Aranha e precisa conciliar sua vida pessoal com a responsabilidade de ser um herói."
        ]
    },
    {
        respostasValidas: ["harry potter", "harry potter e a pedra filosofal"],
        pistas: [
            "O protagonista descobre no seu aniversário de 11 anos que possui capacidades mágicas.",
            "Ele recebe uma carta para estudar em um colégio interno muito especial.",
            "Ele tem dois grandes amigos que o ajudam em suas aventuras.",
            "O personagem principal possui uma cicatriz em forma de raio na testa.",
            "É um bruxo famoso no universo da magia que estuda em Hogwarts."
        ]
    },
    {
        respostasValidas: ["o rei leao", "rei leao", "the lion king"],
        pistas: [
            "A história se passa nas savanas africanas.",
            "O protagonista passa por uma perda traumática na infância e decide fugir.",
            "Ele faz amizade com um suricati e um facocheiro que ensinam a filosofia 'Hakuna Matata'.",
            "O vilão da história é o seu próprio tio, que busca tomar o trono.",
            "O filme conta a jornada de Simba para se tornar o rei da floresta."
        ]
    }
];

// VARIÁVEIS DE CONTROLE DO JOGO

let filmeAtual = 0;           
let numeroPista = 1;          
let pontosFilmeAtual = 100;  
let pontuacaoTotal = 0;       
let aguardandoTroca = false; 

// Elementos da interface
const containerEl = document.querySelector(".container");
const pistaBoxEl = document.querySelector(".pista");


// FUNÇÕES DO JOGO


// Carrega os dados do filme atual com a animação no container
function carregarFilme() {
    numeroPista = 1;
    pontosFilmeAtual = 100;
    aguardandoTroca = false;

    let filme = bancoDeFilmes[filmeAtual];

    // Animação de transição do container principal
    containerEl.classList.remove("troca-filme-animacao");
    void containerEl.offsetWidth; // Força reflow do CSS
    containerEl.classList.add("troca-filme-animacao");

    setTimeout(() => {
        document.getElementById("numeroPista").textContent = numeroPista;
        document.getElementById("textoPista").textContent = filme.pistas[0];
        document.getElementById("pontos").textContent = pontosFilmeAtual;
        document.getElementById("mensagem").textContent = "";
        document.getElementById("resposta").value = "";
        document.getElementById("resposta").disabled = false;
        document.getElementById("botaoPista").style.display = "inline-block";
    }, 400);
}

// Libera a próxima pista e reduz 20 pontos
function novaPista() {
    let pistasDoFilmeAtual = bancoDeFilmes[filmeAtual].pistas;

    if (numeroPista < pistasDoFilmeAtual.length) {
        numeroPista++;

        // Efeito de Fade Out
        pistaBoxEl.classList.remove("fade-in");
        pistaBoxEl.classList.add("fade-out");

        setTimeout(() => {
            document.getElementById("numeroPista").textContent = numeroPista;
            document.getElementById("textoPista").textContent = pistasDoFilmeAtual[numeroPista - 1];

            // Tira 20 pontos a cada pista liberada
            pontosFilmeAtual = Math.max(0, pontosFilmeAtual - 20);
            document.getElementById("pontos").textContent = pontosFilmeAtual;

            // Efeito de Fade In
            pistaBoxEl.classList.remove("fade-out");
            pistaBoxEl.classList.add("fade-in");
        }, 300);
    }
}

// Passa para o próximo filme ou encerra o jogo
function proximoFilme() {
    if (filmeAtual < bancoDeFilmes.length - 1) {
        filmeAtual++;
        setTimeout(() => {
            carregarFilme();
        }, 2000);
    } else {
        // Fim de jogo definitivo
        let maximoPossivel = bancoDeFilmes.length * 100;
        setTimeout(() => {
            document.getElementById("resposta").disabled = true;
            document.getElementById("botaoPista").style.display = "none";
            document.getElementById("resultado").textContent = 
                `🏆 Fim de jogo! Sua pontuação total foi: ${pontuacaoTotal} de ${maximoPossivel} pontos!`;
            document.getElementById("reiniciar").style.display = "inline-block";
        }, 1500);
    }
}

// Verifica se a resposta está certa ou errada
function verificarResposta() {
    // Evita executar múltiplos cliques seguidos enquanto a tela transiciona
    if (aguardandoTroca) return;

    let respostaInput = document.getElementById("resposta");
    let respostaUsuario = respostaInput.value.toLowerCase().trim();
    let mensagem = document.getElementById("mensagem");

    if (respostaUsuario === "") {
        mensagem.textContent = "⚠️ Digite uma resposta!";
        return;
    }

    let respostasCorretas = bancoDeFilmes[filmeAtual].respostasValidas;
    let pistasDoFilmeAtual = bancoDeFilmes[filmeAtual].pistas;

    if (respostasCorretas.includes(respostaUsuario)) {
        // ACERTOU: Trava o jogo durante a transição
        aguardandoTroca = true;
        
        // Soma os pontos deste filme uma única vez
        pontuacaoTotal += pontosFilmeAtual;

        mensagem.textContent = `🎉 Parabéns! Você acertou e ganhou ${pontosFilmeAtual} pontos!`;
        
        respostaInput.disabled = true;
        document.getElementById("botaoPista").style.display = "none";
        proximoFilme();
    } else {
        // ERROU: Limpa o campo
        respostaInput.value = "";

        if (numeroPista < pistasDoFilmeAtual.length) {
            mensagem.textContent = "❌ Resposta errada! Uma nova pista foi liberada.";
            novaPista();
        } else {
            // Errou na 5ª pista: Trava o jogo e zera os pontos deste filme
            aguardandoTroca = true;
            pontosFilmeAtual = 0;
            document.getElementById("pontos").textContent = 0;
            mensagem.textContent = "❌ Resposta errada! Você esgotou as pistas e fez 0 pontos neste filme.";
            
            respostaInput.disabled = true;
            document.getElementById("botaoPista").style.display = "none";
            proximoFilme();
        }
    }
}

// Reinicia o jogo do início
function reiniciarJogo() {
    filmeAtual = 0;
    pontuacaoTotal = 0;
    aguardandoTroca = false;
    document.getElementById("resultado").textContent = "";
    document.getElementById("reiniciar").style.display = "none";
    carregarFilme();
}

// Inicia o jogo na abertura da página
carregarFilme();