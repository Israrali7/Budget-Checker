let budget = document.getElementById('budget')
let title = document.getElementById('title')
let cost = document.getElementById('cost')
let setBudget = document.getElementById('setBudget')
let checkAmount = document.getElementById('checkAmount')


setBudget.addEventListener('click',()=>{
    document.getElementById('totalBudget').innerText =`${budget.value}`
    // budget.value = '';
})

checkAmount.addEventListener('click',()=>{
    var diffrence = budget.value - cost.value
    if (diffrence > 0) {
        document.getElementById('listing').innerHTML += `<li><span class="forSpace" >${title.value}</span><span class="forSpace">${cost.value}</span></li>`
        document.getElementById('totalBudget').innerText =`${diffrence}`
        title.value = '';
        cost.value = '';
    }else{
        alert('Your Budget is less keep in your limits')
    }

})