function getElement(id){
    const element = document.getElementById(id);
    return element;
}

let totalHearts = 1;
 const cardButtons = document.getElementsByClassName("heart-btn")

for(let cardButton of cardButtons){
    cardButton.addEventListener("click", function(){
        let heart =document.getElementById("hearts").innerText = totalHearts++
    })
}

// Call Buttons Function

// const callButtons = document.getElementsByClassName("call-button")

// for(callButton of callButtons){
//     callButton.addEventListener("click", function(){
//         alert(`Calling ${serviceName} number ${serviceNumber}...`);
//     })
// }


 const callButtons = document.querySelectorAll('.call-button');

    for(const button of callButtons){
    button.addEventListener('click',function() {
    const card = this.closest('.card');
    this.style = 'black';
    if (!card) return;
    const title = card.querySelector('.title').textContent;
    const number = card.querySelector('.number').textContent;

    alert(`Calling ${title} number ${number}...`);
    });
  }












// let count = 0;
// count++

// document.querySelectorAll(".heart-button").addEventListener('click',function(){

   
//     document.getElementById("hearts").innerText = count
//     console.log(count)
// })


// let count = 0;
// const like = document.querySelectorAll(".heart-button").addEventListener("click", function(){

//     count++
//     let counts = document.getElementById("hearts")
//     let totalCounts = counts.innerText= count
//     console.log(totalCounts)

// })