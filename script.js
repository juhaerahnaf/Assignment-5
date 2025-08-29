// heart function start
const navHeart = document.getElementById('nav-heart');
const cardHearts = document.getElementsByClassName('card-heart');
for(let card of cardHearts){
    card.addEventListener("click", function(){
        let new_heartValue = parseInt(navHeart.innerText);
        navHeart.innerText = new_heartValue + 1;
    })
}
// heart function end

// copy function start
const navCopy = document.getElementById('nav-copy');
const cardCopy = document.getElementsByClassName('copy-card')
for(let copy of cardCopy){
    copy.addEventListener('click',function(){
        let new_CopyValue = parseInt(navCopy.innerText);
        navCopy.innerText = new_CopyValue + 1;
    })
}
// copy function end
function callButton(){
    const container = document.getElementById('coin-container');    
        const variable = parseInt(container.innerHTML);
        if(variable > 0){
            const containerValue = variable - 20;
            container.innerHTML =`${containerValue}`;
        }
        else{
            alert('not enough coin');
        }
}

