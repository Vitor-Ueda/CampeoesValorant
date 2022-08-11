document.querySelectorAll(".card")[0].setAttribute("class", "card fundo-card fundo-card-white selecionado");

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar  = document.getElementById("btn-voltar");
const todosCards = document.querySelectorAll(".card");
let   cardAtual  = 0;

//Funções

//Remove selecionado dentro da tag do cartão anterior
function escondeCardSelect (){
    let cardSelect = document.querySelector(".selecionado");
    cardSelect.classList.remove("selecionado");
};

//Cria o selecionado dentro da tag do cartão atual
function mostraCardAtual (arrayCard){
    todosCards[arrayCard].classList.add("selecionado");
}


btnAvancar.addEventListener("click", function () {

    if (cardAtual === todosCards.length - 1) {
        return;
    };

    escondeCardSelect();

    cardAtual++;
    mostraCardAtual(cardAtual);
});

btnVoltar.addEventListener("click", function (){

    if(cardAtual === 0){
        return;
    }

    escondeCardSelect();

    cardAtual--;
    mostraCardAtual(cardAtual);
});