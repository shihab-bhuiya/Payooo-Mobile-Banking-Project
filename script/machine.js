
function getValueFromInput (id){
    const input = document.getElementsByClassName(id);
    const value = input.value;
    return value;

}

// Balance

function getBalance(){
    const balalceElement = document.getElementById("balance");
    const balalce = balalceElement.innerText;

    return Number(balalce);
}