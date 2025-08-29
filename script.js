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


    let coin = 40;
    const callButtons = document.querySelectorAll('.call-button');

    for(const button of callButtons){
    button.addEventListener('click',function() {
    const card = this.closest('.card');
    if (!card) return;

    
    if (coin < 0) {
      alert('You have no enough coins, you need minimum 20 coins for call');
      return;
    }


    // কল হিস্ট্রি যোগ করার ফাংশন

    
    // const historyList = document.getElementById('call-history');
    // const li = document.createElement('div');
    // // li.textContent = `Service ${title}, number: ${number}`;
    // historyList.appendChild(div);

    document.getElementById('coins').innerText = coin;
    coin -= 20;



    const title = card.querySelector('.title').innerText;
    const number = card.querySelector('.number').innerText;

    alert(`Calling ${title} number ${number}...`);
    });
  }


    let copy = 1;
    const copyButtons = document.querySelectorAll('.card-btn');

    for(const button of copyButtons){
    button.addEventListener('click',function(){
    const card = this.closest('.card');
    if (!card) return;
    alert('Copy button clicking is counting',)
    let copies = document.getElementById("copy-here").innerText = copy++
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