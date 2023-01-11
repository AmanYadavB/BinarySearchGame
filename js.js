let container = document.getElementById('container')
let initial = document.getElementById('initial')


cardDeatils = ``
let show = []
let numbers = []
let attempts = 0
let an_mul = Math.round((Math.random()*10)%3)
console.log(an_mul)
let tofind = Math.round(Math.random()*(10**an_mul))
let mul = Math.round((Math.random()*10)%4)
numbers[0] = Math.round(Math.random()*(10**mul))
for (let i=0;i<1000;i++)
{
    show[i] = false
    mul = Math.round((Math.random()*10)%4)
    numbers[i+1] = Math.round(Math.random()*(10**mul) + numbers[i])
}

initial.innerHTML = `<div class="card bg-info text-white my-sticky">
<div class="card-body">
    <span class="text-center"><h2>Please Find : ${numbers[tofind]}</h2></span>
    <span class="text-center"><h3>Attempts Remaining : 11</h3></span>
</div>
</div>`

for (let i=0;i<100;i++)
{
    cardColDeatail = ``
    for (let j=1;j<=10;j++)
    {
        if (i*10+j == 1000)
        {
            cardColDeatail += `<div class="card col" style="width: 9rem;">
                            <div class="card-body">
                                <span class="text-center"><h4>${i*10+j}</h4></span>
                                <span class="show-hide"><button href="#" class="btn btn-primary">Show</button></span>
                            </div>
                        </div>`
        }
        else
        {
            cardColDeatail += `<div class="card col" style="width: 9rem;">
                            <div class="card-body">
                                <span class="text-center"><h2>${i*10+j}</h2></span>
                                <span class="show-hide"><button href="#" class="btn btn-primary">Show</button></span>
                            </div>
                        </div>`
        }
        
    }
    cardDeatils += `<div class="row">
                    ${cardColDeatail}
                        </div>`
}
function onLoad(){
       

    let buttons = document.getElementsByClassName('btn')
    let randoms = document.getElementsByClassName('card')
    let showhides = document.getElementsByClassName('show-hide')
    for (let i=0; i< 1000; i++){
        buttons[i].addEventListener('click', () => {
                    attempts += 1
                    initial.innerHTML = `<div class="card bg-info text-white">
                                        <div class="card-body">
                                            <span class="text-center"><h2>Please Find :${numbers[tofind]}</h2></span>
                                            <span class="text-center"><h3>Attempts Remaining :${11-attempts}</h3></span>
                                        </div>
                                        </div>`
                    if (attempts > 10) {
                        initial.innerHTML = ``
                        container.innerHTML = `<div class="card text-danger bg-danger-subtle">
                        <div class="card-body">
                            <span class="text-center"><h1>You Lost</h1></span>
                        </div>
                    </div>`
                    }
                    else if (numbers[i]>99999)
                        {randoms[i+1].innerHTML = `
                        <div class="card-body text-center bg-warning rounded mt-2 mb-2">
                            <span class="text-center"><h6 class="mt-4">${numbers[i]}</h6></span>
                        </div>`}
                    else if (numbers[i]>9999)
                    {randoms[i+1].innerHTML = `
                    <div class="card-body text-center bg-warning rounded mt-2 mb-2">
                        <span class="text-center"><h5 class="mt-4">${numbers[i]}</h5></span>
                    </div>`}
                    else
                    {randoms[i+1].innerHTML = `
                        <div class="card-body text-center bg-warning rounded mt-2 mb-2">
                            <span class="text-center"><h4 class="mt-4">${numbers[i]}</h4></span>
                        </div>`}
                    //showhides[i].innerHTML = ``
                    if (numbers[i]==numbers[tofind]){
                        initial.innerHTML = ``
                        container.innerHTML = `<div class="card text-success bg-success-subtle">
                        <div class="card-body">
                            <span class="text-center"><h1>You Won in ${attempts} attempts</h1></span>
                        </div>
                    </div>`
                    }
        })
    }
}



document.addEventListener('DOMContentLoaded', function() 
    {
        onLoad()
    })


container.innerHTML = cardDeatils
