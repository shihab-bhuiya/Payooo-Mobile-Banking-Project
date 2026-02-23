
// function getValueFromInput (id){
//     const input = document.getElementById("id");
//     const value = input.value;
//     // console.log(value)
//     return value;

// }
function getValueFromInput(id){
    const input = document.getElementById(id);
    return input.value;
}

// Balance

function getBalance(){
    const balalceElement = document.getElementById("balance");
    const balalce = balalceElement.innerText;

    return Number(balalce);
}

// set balance

function setBalance(value){
    const balalceElement = document.getElementById("balance");
    balalceElement.innerText = value;
}