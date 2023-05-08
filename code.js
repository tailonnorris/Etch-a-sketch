let color = "black"
let click = false
document.addEventListener("DOMContentLoaded", function () {
   createBoard(32)
   document.querySelector("body").addEventListener("click", function(e){
    if(e.target.tagname != "BUTTON"){
        click = !click
        let draw = document.querySelector(".draw");
        if (click){
            draw.innerHTML = "Now you can draw";
        }
        else{ draw.innerHTML = "you cant draw"}
    }
   })
   let buttonSelect = document.querySelector(".select-button")
   buttonSelect.addEventListener("click", function(){
    let size = getSize()
    createBoard(size)
   })
} )




function createBoard(size){
    let board = document.querySelector(".board")

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;


    let numDivs = size * size 

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        div.classList.add('div1')
        board.insertAdjacentElement("beforeend",div)
    }
}


function getSize(){
    let input = prompt ("what will be the size of the board")
    let message = document.querySelector(".message")
    if (input == ""){
        message.innerHTML = "Please provide a number"
    }
    else if (input < 0 || input > 100){
        message.innerHTML = "please provide a number between 1 and 100"
    }
    else{
        message.innerHTML = "now you can play"
        return input
    }
}


function colorDiv(){
    if(click){

        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = "black"
        }
    }
  
}

function setColor(colorChoice){
    color = colorChoice
}

function resetBoard(){
    let divs = document.querySelectorAll(".div1")
    divs.forEach((div) => div.style.backgroundColor = "white")
}