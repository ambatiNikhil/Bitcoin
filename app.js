let burgerEle = document.querySelector("#burger")
let popMenuEle = document.querySelector(".popMenu")
let navSvgEle = document.querySelector("#navSvg")
let popSvgEle = document.querySelector("#popSvg")
let popupForm = document.getElementById('popupForm');

burgerEle.addEventListener("click" , () => {
    popMenuEle.style.display = popMenuEle.style.display === 'none' ? 'block' : 'none';
})

navSvgEle.addEventListener("click" , () => {
    popMenuEle.style.display = popMenuEle.style.display === 'none' ? 'block' : 'none';
})

document.addEventListener('DOMContentLoaded', function () {
    const openFormButton = document.getElementById('openFormButton');
    const popupForm = document.getElementById('popupForm');

    // Event listener for button click
    openFormButton.addEventListener('click', function () {
        // Show the popup form
        popupForm.style.display = 'block';
    });

    // Close the popup form when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';
        }
    });
});

popSvgEle.addEventListener("click" , () => { 
    popupForm.style.display = 'none';

})

let bitCoinBtn = document.querySelector("#bitCoin")
let ethereumEle = document.querySelector("#ethereum")
let xrpEle = document.querySelector("#xrp")
let bCost = document.querySelector("#bitCoinCost")
let eCost = document.querySelector("#ethereumCost")
let xCost = document.querySelector("#xmrCost")
let coinBox = document.querySelector("#coinBox")
let totalBtn = document.querySelector("#total")
let totalCost = document.querySelector("#totalCost")

let gst = 15
let coinsArray = []



bitCoinBtn.addEventListener("click",() =>{
    console.log(bitCoinBtn.textContent) 
    let coin1 = document.createElement("div")
    coin1.classList.add("coinBox")

    let coinOneInput = document.createElement("input")
    coinOneInput.classList.add("inputStyle")
    coinOneInput.value = bitCoinBtn.textContent
    coin1.appendChild(coinOneInput)

    let coinOneCost = document.createElement("input")
    coinOneCost.classList.add("inputStyle")
    coinOneCost.value = bCost.textContent
    coin1.appendChild(coinOneCost)



    
    coinsArray.push(bCost.textContent)

    coinBox.appendChild(coin1)



})

ethereumEle.addEventListener("click" , () => {
    console.log(ethereumEle.text)

    let coin2 = document.createElement("div")
    coin2.classList.add("coinBox")

    let coinTwoInput = document.createElement("input")
    coinTwoInput.classList.add("inputStyle")
    coinTwoInput.value = ethereumEle.textContent
    coin2.appendChild(coinTwoInput)

    let coinTwoCost = document.createElement("input")
    coinTwoCost.classList.add("inputStyle")
    coinTwoCost.value = eCost.textContent
    coin2.appendChild(coinTwoCost)

    
    coinsArray.push(eCost.textContent)
    console.log(coinsArray)

    coinBox.appendChild(coin2)
    
})

xrpEle.addEventListener("click",() => {
    console.log(xrpEle.text)

    let coin3 = document.createElement("div")
    coin3.classList.add("coinBox")

    let coinThreeInput = document.createElement("input")
    coinThreeInput.classList.add("inputStyle")
    coinThreeInput.value = xrpEle.textContent
    coin3.appendChild(coinThreeInput)

    let coinThreeCost = document.createElement("input")
    coinThreeCost.classList.add("inputStyle")
    coinThreeCost.value = xCost.textContent
    coin3.appendChild(coinThreeCost)

    

    
    coinsArray.push(xCost.textContent)
    coinBox.appendChild(coin3)
    console.log(coinsArray)
})


// let totalBtn = document.createElement("button")
// totalBtn.classList.add("btn btn-danger")
// totalBtn.innerHTML = "Total"
// coinBox.appendChild(totalBtn)

totalBtn.addEventListener("click" , () => {
    let totalSum = coinsArray.reduce((accumulator, currentValue) => accumulator +  parseInt(currentValue), 0);

    totalCost.value = totalSum + totalSum * 0.15
})