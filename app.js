let playerArray=[];

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

document.getElementById('players').addEventListener('click', function(event){
    
    const playerName=  event.target.parentNode.children[1].innerText;
    

    if( playerArray.length<5){
        playerArray.push(playerName);

    }
   display(playerArray);
})

















// common function 
function getInputValueById (elemntId){
    const inputField= document.getElementById(elemntId);
    const inputFieldString= inputField.value;
    const inputNumber= parseInt(inputFieldString);
    return inputNumber;
}


// add addEventListener to calculate btn 
document.getElementById('caluclte-expence').addEventListener('click', function(){
  const costPerPlayer= getInputValueById('per-player-cost-input')
  const totalExpence= costPerPlayer *playerArray.length;
  const totalExpenceElement= document.getElementById('total-expence');
  totalExpenceElement.innerText= totalExpence;
  
//   add event listener to calculate totaal btn 
    document.getElementById('total-cal-btn').addEventListener('click', function(){
    const costForManager= getInputValueById('cost-for-manager-field')
    const costForCoach= getInputValueById('cost-for-coach-field');
    
    const costToatl = totalExpence + costForCoach + costForManager;
    const totalCostElement= document.getElementById('total-cost');
    totalCostElement.innerText= costToatl;
    })
  
  })

  