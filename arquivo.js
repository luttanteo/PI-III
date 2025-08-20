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

    // métodos
    atualizarTela() {
        this.elemento.style.left = this.posX + "px"; // atualiza a posição pelo css (por isso o style e o "px")
        this.elemento.style.top = this.posY + "px"; // atualiza a posição pelo css (por isso o style e o "px")
    }

    // Criar um método de posição aleatória
    aleatorio() {
        this.posX = Math.floor(Math.random()) * 570;
        this.posY = Math.floor(Math.random()) * 370;
        this.atualizarTela;
    }

    mover(direcao) {
        switch (direcao) {
        case "baixo": // seta p/baixo
            this.posY += this.passo;
            break;
        case "cima": // seta p/cima
            this.posY -= this.passo;        
            break;
        case "esquerda": // seta p/esq
            this.posX -= this.passo;
            break;
        case "direita": // seta p/dir
            this.posX += this.passo;     
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

    const personagem2 = new Personagem("inimigo");
    document.addEventListener("keydown", (e) => {
        switch(e.key) {
            case "s":
                personagem2.mover("baixo");
                break;
            case "w":
                personagem2.mover("cima");
                break;
            case "a":
                personagem2.mover("esquerda");
                break;
            case "d":
                personagem2.mover("direita");
                break;
        }
    });

    personagem2.aleatorio();
