let budget = document.getElementById('budget')
let totalBudget = document.getElementById('totalBudget')
let totalBalance = document.getElementById('totalBalance')
let totalexpenses = document.getElementById('totalexpenses')
let title = document.getElementById('title')
let cost = document.getElementById('cost')
let setBudget = document.getElementById('setBudget')
let checkAmount = document.getElementById('checkAmount')



setBudget.addEventListener('click',()=>{
    totalBudget.innerText =`${budget.value}`
    totalBalance.innerText =`${budget.value}`
    budget.value = '';
})

checkAmount.addEventListener('click',()=>{
    var diffrence = totalBalance.innerText - cost.value;
    console.log(diffrence);
    
    if (diffrence >= 0) {
        document.getElementById('listing').innerHTML += `<li><span class="forSpace" >${title.value}</span><span class="forSpace">${cost.value}</span></li>`
        // document.getElementById('totalBudget').innerText =`${diffrence}`
        document.getElementById('totalBalance').innerText =`${diffrence}`
   
        var converted = parseInt(cost.value); 
        console.log(converted);
        
        // Ensure totalexpenses is treated as a number
        totalexpenses.innerText = parseInt(totalexpenses.innerText) + converted;
        console.log(totalexpenses.innerText);
        
        // Clear input fields
        title.value = '';
        cost.value = '';     
    } 
    else{
        alert('Your Budget is less keep in your limits')
    }

})