const personagem = document.getElementById("personagem");
let posX = 0;
let posY = 0;
const passo = 5;

document.addEventListener("keydown", (e) => { // função com parâmetro e, que vai ser substituido por algo dps
    switch(e.key) { // escolha caso a tecla pressionada seja...
        case "ArrowDown": // seta p/baixo
        if(posY < 370) {
        posY += passo;
            personagem.style.top = posY + 'px';
            personagem.style.backgroundPosition = '0px 0px';
        } 
            break;
        case "ArrowUp": // seta p/cima
        if(posY > 0) {
            posY -= passo;
            personagem.style.top = posY + 'px';
            personagem.style.backgroundPosition = '0px 0px'; 
        }
            break;
        case "ArrowLeft": // seta p/esq
        if(posX < 570) {
            posX -= passo;
            personagem.style.left = posX + 'px';
            personagem.style.backgroundPosition = '0px 0px'; 
        }
            break;
        case "ArrowRight": // seta p/dir
        if(posX > 0) {
            posX += passo;
            personagem.style.left = posX + 'px';
            personagem.style.backgroundPosition = '0px 0px';
        }
            break;
    }
});