let numerosSorteados = [];
let listaDeNumerosSorteados = [];
let tentativas = 1;
numeroSecreto = gerarNumeroAleatorio();


function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
textoNaTela('h1', 'Bem vindos ao jogo do numero secreto');
textoNaTela('p', 'Escolha um numero entre 1 e 10');
}

mensagemInicial();

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    listaDeNumerosSorteados = numerosSorteados.length;

    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limiteNumero(){
    if(listaDeNumerosSorteados == 4){
        numerosSorteados = [];
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
    if(chute == numeroSecreto){
        textoNaTela('h1' , 'Acertou!');
        textoNaTela('p' , `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limparTela()
    } else if(numeroSecreto > chute){
        textoNaTela('h1' , 'Quase lá!');
        textoNaTela('p' , 'O numero secreto é maior');
    }else{
        textoNaTela('h1' , 'Quase lá!');
        textoNaTela('O numero secreto é menor');
    }
    tentativas++
    limparTela();
    }

    function limparTela(){
        campo = document.querySelector('input');
        campo.value = '  ';
    }

    function reiniciarJogo(){
        tentativas = 1;
        numeroSecreto = gerarNumeroAleatorio;
        limparTela();
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled');
    }