document.addEventListener("DOMContentLoaded",function(){
    createBoard(16);
    let buttonPopUp = document.getElementById('select-button')
    buttonPopUp.addEventListener('click', ()=>{
        let size = getSize()
        createBoard(size)
    })
 })
 
 function createBoard (size){
      let board = document.querySelector('.board')
 
     board.style.gridTemplateColumns = `repeat(${size},1fr)`;
     board.style.gridTemplateRows = `repeat(${size},1fr)`
 
     let numDiv = size * size
 
     for (let i = 0; i < numDiv; i++) {
         let div = document.createElement('div')
         board.insertAdjacentElement("beforeend", div)
     }
 }
 
 function getSize(){
     let input = parseInt(prompt("What will be the sized?"))
 
     let message = document.querySelector(".message")
 
     if (typeof input !== "number"){
         message.innerHTML = "Please type a number"
     }
     else if (input < 1 || input > 100){
         message.innerHTML = "Please type a number between 1 and 100"
     }
     return input
 }
 