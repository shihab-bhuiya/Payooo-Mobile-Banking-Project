console.log("Connected");


document.getElementById("btn-login").addEventListener(
    'click',function(){
        //1. get input number
        const numberInput = document.getElementById("number-input");

        const numberValue = numberInput.value;
        console.log(numberValue);
        //2. get the pin input
        const pinInput = document.getElementById("pin-input");
        const pinValue = pinInput.value;
        console.log(pinValue);
        if(numberValue == '11111111111' && pinValue == '1111'){

            // 3- match pin and mobile number

            // alert("Login Succesfully");
            // 3.1- true:: alert > homepage

            window.location.assign("home.html");
        }
        else{
            // 3.1- false:: alert > return
            alert("Login failed");
            return;
        }
    }
)