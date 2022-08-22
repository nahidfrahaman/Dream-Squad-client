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
  const totalExpence= costPerPlayer *5;
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

  