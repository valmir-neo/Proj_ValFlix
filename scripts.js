

/* 1 PASSO: A DOM, CRIAR VARIÁVEIS PARA OS ELEMENTOS DO HTML E PUXAR ELES ATRAVES DO "querySelector" */
let botaosom = document.querySelector(".botao-som")
let botaosomdeslig = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let tumdum = document.querySelector(".link-assistir")
let audio = document.querySelector(".audio")



/* 2 PASSO: ADICIONAR EVENTOS AOS ELEMENTOS, NESSE CASO, O EVENTO "CLICAR NO BOTÃO DO SOM" COM A FUNÇÃO, LIGAR E DESLIGAR QUE VEM A SEGUIR */
botaosom.addEventListener("click", ligasom)



/* 3 PASSO:FUNÇÃO QUE É ACIONADA QUANDO O BOTÃO DO SOM É CLICADO */
function ligasom(){
    video.muted = !video.muted 
}



/* 4 PASSO: ADICIONAR EVENTO AO BOTÃO DE INFORMAÇÕES PARA MOSTRAR O MODAL(INFORMAÇÕES DETALHADAS SOBRE O FILME/SERIE DE CAPA DA PAGINA) */
botao.addEventListener("click", mostramodal)

/* 5 PASSO: FUNÇÃO QUE É ACIONADA QUANDO O BOTÃO DE INFORMAÇÕES É CLICADO, MOSTRANDO OS DETALHES DO FILME/SERIE DE CAPA DA PAGINA */
function mostramodal() {
    modal.style.display = "block"
}


/* 6 PASSO: ADICIONAR EVENTO AO MODAL PARA ESCONDER O MESMO */
modal.addEventListener("click", escondemodal)

/* 7 PASSO: FUNÇÃO QUE É ACIONADA QUANDO O MODAL É CLICADO, ESCONDENDO-O */
function escondemodal() {
    modal.style.display = "none"
}



/* 8 PASSO: ADICIONAR EVENTO AO BOTÃO DE CAPA "ASSISTIR" PARA TOCAR O ÁUDIO "TUMDUM", QUANDO FOR CLICADO */
tumdum.addEventListener("click", tocatumdum)

/* 9 PASSO: FUNÇÃO QUE É ACIONADA QUANDO O BOTÃO "ASSISTIR" É CLICADO, TOCANDO O ÁUDIO "TUMDUM" */
function tocatumdum() {
    audio.play()
}






/* FUNÇÃO PARA ATIVAR O SANDUICHE NO JS */
const btnSanduiche = document.getElementById('btnSanduiche');

const menuLinks = document.getElementById('menuLinks');

btnSanduiche.addEventListener('click', () => {
     menuLinks.classList.toggle('ativo'); 
    }); 
    