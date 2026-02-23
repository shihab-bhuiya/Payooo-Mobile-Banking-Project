
console.log("cashout connected");

document.getElementById("cashout-btn").addEventListener('click',
    function(){
        // 1. Get the agent Number and Validation
        const agentNumberInput = document.getElementById("agent-number");
        const agentNumber = agentNumberInput.value;
        console.log(agentNumber)
        if(agentNumber.length < 11){
            alert("Invalid Agent Number");
            return;
        }

        // 2. Get amount , validation and convert number

        const cashoutAmountInput = document.getElementById("cashout-amount");
        const cashoutAmount = cashoutAmountInput.value;
        console.log(cashoutAmount);
        if(cashoutAmount < 0){
            return alert("Invalid Amount")
        }

        // 3. Get current balance , validation and convert number

        const balanceElement = document.getElementById("balance");
        const balalce = balanceElement.innerText;
        //console.log(balalce);

        // 4. calculate the balalce

        const newBalance = Number(balalce) - Number(cashoutAmount);
        if(newBalance < 0){
            alert("Invalid Amount");
            return;
        }

        // 5. get the pin and verify

        const pinInput = document.getElementById('cashout-pin');
        const pin = pinInput.value;

        if(pin === '1111'){
            //5.1 true :: show alert > set new balance
            alert("Cashout Successful");
            console.log(newBalance);
            balanceElement.innerText = newBalance;
        }
        else{
            alert("Invalid Pin")
            return;

            // 5.2 false :: show aler > return 
        }

    }
)