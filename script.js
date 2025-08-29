    
    function getElement(id){
    const element = document.getElementById(id);
    return element;
    }

    // Heart Button Function Here 
    let totalHearts = 1;
    const cardButtons = document.getElementsByClassName("heart-btn")

    for(let cardButton of cardButtons){
    cardButton.addEventListener("click", function(){
        let heart =document.getElementById("hearts").innerText = totalHearts++
    })
    }

    // Call Button Function Here 
    let coin = 60;
    const callButtons = document.querySelectorAll('.call-button');

    for(const button of callButtons){
    button.addEventListener('click',function() {
    const card = this.closest('.card');
    if (!card) return;

    
    if (coin <= 0) {
      alert('You have no enough coins, you need minimum 20 coins for call');
      return;
    }

    coin -= 20;
    document.getElementById('coins').innerText = coin;
    
    const title = card.querySelector('.title').innerText;
    const number = card.querySelector('.number').innerText;

    alert(`Calling ${title} number ${number}...`);


    const now = new Date(); // current date and time
    const timestamp = now.toLocaleString(); // user-friendly, locale-specific string


     const li = document.createElement('li');
        li.textContent = `${title} ${number}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${timestamp}`;
     const historyList = document.getElementById('call-history-list');
           historyList.appendChild(li);

    });
    }

    // Clear Button Function 

        const historyList = document.getElementById('call-history-list');

        const clearBtn = document.getElementById('clear-history');

         clearBtn.addEventListener('click', function() {
        historyList.innerText = '';
        });



                           // Copy Button Function Here 
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


    const numberElements = document.querySelectorAll('.card .number');

    numberElements.forEach(numberElement => {
     numberElement.addEventListener('click', function() {
    const number = this.innerText;

    navigator.clipboard.writeText(number)
      .then(() => {
        alert(`Hotline Number Copied ${number}`);
      })
      });
      });
