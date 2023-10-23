let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto , 'Brazilian Portuguese Female',{rate: 1.2});
}
function exibirMensagemInicial(){
exibirTextoNaTela("h1" , "Jogo do número secreto");
exibirTextoNaTela("p" , "Escolha um número entre 1 e 10");
}
exibirMensagemInicial()

//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Voce acertou!');
    let palavraTentaviva = tentativas > 1? 'tentativas': 'tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentaviva}!`
    document.getElementById('reiniciar').removeAttribute('disabled');   
    exibirTextoNaTela('p' , mensagemTentativas);
}   else{
    if (chute < numeroSecreto){
        exibirTextoNaTela('p' , 'Numero secreto e maior.');
    }
    else
        exibirTextoNaTela('p' , 'Número secreto e menor.');

}
tentativas++;
limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidaDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidaDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
 function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
 }