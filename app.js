let counter = 0;
let N_card = 1;
let arr = ["ross","explody","fiesta","metal","triplets","unicorn","revertit"]
const table = document.querySelector(".table_desktop");

while(N_card%2 != 0){
    N_card = prompt("Insira o numero de cartas para jogar:")
}

for (let i = 0 ; i< N_card ; i++){
    addCard();
}
//sorts the card array
sortCard(arr);
arr = arr.slice(0,(N_card/2))   
arr = arr.concat(arr)
sortCard(arr);
addSortedCards();

function addSortedCards(){
    let cardList = document.querySelectorAll(".card .card_back")
    const len = cardList.length
    for(let i = 0;i<len;i++){
        cardList[i].classList.add(arr[i])
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function sortCard(arr){
    arr.sort(comparador);
}


function addCard(){
    const card=document.createElement("div");
    const front_image = document.createElement("img");
    const back_image = document.createElement("img");
    front_image.classList.add("card_front")
    back_image.classList.add("hidden","card_back")

    card.classList.add("card");
    table.appendChild(card);
    card.appendChild(front_image);
    card.appendChild(back_image);
    card.setAttribute("onclick",'turnCard(this)')
}

function turnCard(element){
    element.children[0].classList.toggle("hidden")
    element.children[1].classList.toggle("hidden")
}

