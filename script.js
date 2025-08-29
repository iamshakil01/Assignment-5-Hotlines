    
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


    let coin = 20;
    const callButtons = document.querySelectorAll('.call-button');

    for(const button of callButtons){
    button.addEventListener('click',function() {
    const card = this.closest('.card');
    if (!card) return;

    
    if (coin < 0) {
      alert('You have no enough coins, you need minimum 20 coins for call');
      return;
    }


    document.getElementById('coins').innerText = coin;
    coin -= 20;

    const title = card.querySelector('.title').innerText;
    const number = card.querySelector('.number').innerText;

    alert(`Calling ${title} number ${number}...`);


     const li = document.createElement('li');
    li.textContent = `${title} ${number}`;
    const historyList = document.getElementById('call-history-list');
    historyList.appendChild(li);

    });
    }

    // Clear Button Function 

    const callHistory = document.getElementById("clear-history").addEventListener("click", function(){
        
    })




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