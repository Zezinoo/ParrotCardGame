
let play_counter = 0;
let N_card = 1;
let arr = ["ross","explody","fiesta","metal","triplets","unicorn","revertit"]
const table = document.querySelector(".table_desktop");


while(N_card%2 !==0 || N_card < 4 || N_card > 14){
    console.log(N_card)
    N_card = prompt("Insira um numero par de cartas para jogar(Entre 2 a 14):")
}

for (let i = 0 ; i< N_card ; i++){
    addCard();
}
//sorts the card array
sortCard(arr);
arr = arr.slice(0,(N_card/2))   
doublearr = arr.concat(arr)
sortCard(doublearr);
addSortedCards();







function checkMatch(){
    if(play_counter%2===0 && play_counter!==0){
        let turned_List = document.querySelectorAll(".turned:not(.found)")
        const first_pair_image = turned_List[0].children[1].firstChild.classList[0]
        const second_pair_image = turned_List[1].children[1].firstChild.classList[0]
        if(first_pair_image===second_pair_image){
            arr.splice(arr.indexOf(first_pair_image),1)
            turned_List[0].classList.add("found")
            turned_List[1].classList.add("found")
        }
        else{
            setTimeout(() => {turnCard(turned_List[0]);}, 1000);
            setTimeout(() => {turnCard(turned_List[1]);}, 1000);
            setTimeout(() => {turned_List[0].setAttribute("onclick",'makePlay(this)');},1001)
            setTimeout(() => {turned_List[1].setAttribute("onclick",'makePlay(this)');},1001)

        }

    }
}

function checkGameEnd(){
    console.log("checked")
    if (arr.length === 0){
        setTimeout(() => {alert(`Você ganhou em ${play_counter} jogadas!`)},600)
    }
}


function addSortedCards(){
    let cardList = document.querySelectorAll(".card .card_back img")
    const len = cardList.length
    for(let i = 0;i<len;i++){
           cardList[i].classList.add(doublearr[i])
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
    const card_front = document.createElement("div");
    const card_back = document.createElement("div");
    const front_image = document.createElement("img")
    const back_image = document.createElement("img")
    
    card_front.classList.add("card_front")
    front_image.classList.add("front_image")
    card_back.classList.add("card_back")

    card.classList.add("card");
    table.appendChild(card);
    card.appendChild(card_front);
    card.appendChild(card_back);
    card_front.appendChild(front_image);
    card_back.appendChild(back_image);
    card.setAttribute("onclick",'makePlay(this)')
}

function makePlay(element){
    turnCard(element)
    play_counter++ 
    console.log(play_counter)
    checkMatch();
    console.log(arr)
    checkGameEnd();
}

function turnCard(element){
    element.classList.toggle("turned")
    element.setAttribute("onclick","")
}

