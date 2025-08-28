function getElement(id){
    const element = document.getElementById(id);
    return element;
}

let totalHearts = 0;
 const cardButtons = document.getElementsByClassName("heart-btn")

for(let cardButton of cardButtons){
    cardButton.addEventListener("click", function(){
        let heart =document.getElementById("hearts").innerText = totalHearts++
        console.log(heart)
    })
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