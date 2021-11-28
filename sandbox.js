

//The darkmode checkbox

let darkmodeSwitcher = document.getElementById('darkmode');

//The platform cards 

let allCards = document.querySelectorAll('.platform-card ');

// The overview cards

let allOverview = document.querySelectorAll('.light-cards');


// Darkmode bar

let switchBar = document.querySelector('.switch');
let switchToggle = document.querySelector('.toggleSwitch');


darkmodeSwitcher.addEventListener('click', switchMode);


function switchMode() {

    if(darkmodeSwitcher.checked) {
        document.body.classList.add('darkmode');

        for(let card of allCards) {
            card.style.backgroundColor = 'hsl(228, 28%, 20%)';
        }

        for(let card of allOverview) {
            card.style.backgroundColor = 'hsl(228, 28%, 20%)';
        }

        switchBar.style.backgroundColor = 'hsl(163, 72%, 41%)'
        switchToggle.style.backgroundColor = 'hsl(230, 17%, 14%)'
     
    } else {
        document.body.classList.remove('darkmode');
       
        for(let card of allCards) {
            card.style.backgroundColor = 'hsl(227, 47%, 96%)';
        }

        for(let card of allOverview) {
            card.style.backgroundColor = 'hsl(227, 47%, 96%)';
        }

        switchBar.style.backgroundColor = 'hsl(230, 22%, 74%)';
        switchToggle.style.backgroundColor = 'hsl(0, 0%, 100%)';
    }
}

 
