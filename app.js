let playerArray=[];

// function add player name to list 
function display(playerlist){
    const orderlist= document.getElementById('player-list')
    orderlist.innerHTML= ""; 
    for (let i=0 ; i<playerlist.length; i++){
        const playerName= playerlist[i];
        
        const li= document.createElement('li');
        li.innerText= playerName;

        orderlist.appendChild(li)
        
        
    }
}

// add onclick funtion to btn 
function addtoList(add){
    const playerName= add.parentNode.children[1].innerText;
    add.classList.add('disabled');
    if( playerArray.length<5){
        playerArray.push(playerName);

    }
    else{
        alert('You cannot add More than 5 players')
    }
    display(playerArray);
}


// common function 
function getInputValueById (elemntId){
    const inputField= document.getElementById(elemntId);
    const inputFieldString= inputField.value;
    const inputNumber= parseInt(inputFieldString);
    
    // check input validaiton 
    if (isNaN(inputNumber) || inputNumber<0){
        alert('Please Input a positive Number')
        return;
        
    }
    else{
        return inputNumber;
    }
    
}

let totalExpence= 0;
// add addEventListener to calculate btn 
document.getElementById('caluclte-expence').addEventListener('click', function(){
  const costPerPlayer= getInputValueById('per-player-cost-input')
  totalExpence= costPerPlayer *playerArray.length;
  const totalExpenceElement= document.getElementById('total-expence');
  totalExpenceElement.innerText= totalExpence;
  
})
  
//   add event listener to calculate totaal btn 
    document.getElementById('total-cal-btn').addEventListener('click', function(){
    const costForManager= getInputValueById('cost-for-manager-field')
    const costForCoach= getInputValueById('cost-for-coach-field');
    
    
    const costToatl = totalExpence + costForCoach + costForManager;
    const totalCostElement= document.getElementById('total-cost');
    totalCostElement.innerText= costToatl;
    })
  
  

  