const botaoPlayPause = document.getElementById("play-pause");
const botaoAvanca = document.getElementById("proximo");
const botaoVolta = document.getElementById("anterior");
const audioCapitulo = document.getElementById("audio-capitulo");

const numeroCapitulos = 10;
let taTocando = 0;

let numCap = 10;
let capAtual = 1;


function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }else{
        pausarFaixa();
        taTocando = 0;
    }
}


function proximaFaixa(){
    if(capAtual === numCap){
        capAtual = 1;
    }else{
        capAtual += 1;
    }
    audioCapitulo.src = "books/dom-casmurro/" + capAtual + ".mp3";
    console.log(audioCapitulo);
}

function voltaFaixa(){
    if(capAtual === 1){
        capAtual = numCap;
    }else{
        capAtual -= 1;
    }
    audioCapitulo.src = "books/dom-casmurro/" + capAtual + ".mp3";
    console.log(audioCapitulo);
}

botaoPlayPause.addEventListener("click",tocarOuPausar);
botaoAvanca.addEventListener("click",proximaFaixa);
botaoVolta.addEventListener("click", voltaFaixa);



