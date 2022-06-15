
let N_card = 1;
while(N_card%2 != 0){
    N_card = prompt("Insira o numero de cartas para jogar:")
}

const table = document.querySelector(".table_desktop")

let counter = 0;


function addCard(){
    const card = table.createElement("div")
    card.classList.add(card);
    table.appendChild(card)    
}
