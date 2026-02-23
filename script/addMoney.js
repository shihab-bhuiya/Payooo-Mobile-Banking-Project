

document.getElementById("add-money-btn").addEventListener('click',
    function(){
        const bankAccount = getValueFromInput("add-money-bank");
           
        if(bankAccount == ""){
            alert("Please Select Bank");
            return;
        }

        // 2. get bank account number

        const accountNO = getValueFromInput("bank-account-number");
        if(accountNO.length != 11){
            alert("Invalid Account Number");
            return;
        }

        // 3. get amount

        const amount = getValueFromInput("add-money-amount");

        const newBalance = Number(amount) + getBalance();

        const pin = getValueFromInput("add-money-pin");
        if(pin == '1111'){
        setBalance(newBalance);
        alert(`Add Money Successfull from ${bankAccount} ${new Date()}`);
    }
    else{
        alert("Invalid Pin");
    }



}
)