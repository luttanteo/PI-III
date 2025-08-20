class Personagem {

    // atributos
    elemento; // id do personagem no html
    passo = 5;
    posX = 0;
    posY = 0;

    // construtor
    constructor(nome){
        this.elemento = document.getElementById(nome);
    }

    constructor(){
        this.elemento = document.getElementById("personagem");
    }

    // métodos
    atualizarTela() {
        this.elemento.style.left = this.posX + "px"; // atualiza a posição pelo css (por isso o style e o "px")
        this.elemento.style.top = this.posY + "px"; // atualiza a posição pelo css (por isso o style e o "px")
    }

    mover(direcao) {
        switch (direcao) {
        case "baixo": // seta p/baixo
            this.posY += passo;
            break;
        case "cima": // seta p/cima
            posY += passo;        
            break;
        case "esquerda": // seta p/esq
            posX -= passo;
            break;
        case "direita": // seta p/dir
            posX += passo;     
            break;
    }
        this.atualizarTela();
        }  
    }

    // Instanciando um objeto do tipo personagem
    const personagem = new Personagem("personagem");
    document.addEventListener("keydown", (e) => {
        switch(e.key) {
            case "ArrowDown":
                personagem.mover("baixo");
                break;
            case "ArrowUp":
                personagem.mover("cima");
                break;
            case "ArrowLeft":
                personagem.mover("esquerda");
                break;
            case "ArrowRight":
                personagem.mover("direita");
                break;
        }
    });
