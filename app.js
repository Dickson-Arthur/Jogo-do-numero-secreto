// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10:";


// Função com parâmetro (e sem retorno)
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // Icluindo a voz na página
}

// Função sem parâmetro (e sem retorno)
function exibirMensagemInicial () {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10:");
}

exibirMensagemInicial();

// Função sem parâmetro sendo chamada no HTML (e sem retorno)
let tentativas = 1;

function verificarChute () {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTetativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTetativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor!");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior!");
        }
        tentativas++;
        limparCampo();
    }
}


//Trabalhando com Array (Lista)
let listaDeNumerosSorteados = [];
let numeroLimite = 10;


// Função com retorno (sem parâmetro)
let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroEscolhido) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {   // .includes é uma função que vai verificar se um valor já está dentro de uma lista
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);  // o método .push() adiciona item ao final da lsita && o método .pop() remove o último elemento
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

// Função sem retorno (e sem parâmetro)
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

// Função sem retorno (e sem parâmetro)
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}