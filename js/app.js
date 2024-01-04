function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4 ){
        return pin;

    }
    else{
        getPin();
    }
}
function generatePin (){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
  
        const displayPinField = document.getElementById('display-pin');
        displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){

    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typeNumberField.value;
    if(isNaN(number)){
        if (number === "C"){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join ('');
            typeNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typeNumberField.value = newTypedNumber;
    }
    
})
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField =document.getElementById('typed-number');
    const typedNumber = typeNumberField.value;

    const pinSuccessMassege = document.getElementById('pin-success');
    const pinFailureMassage = document.getElementById('pin-failure');
    if (typedNumber === currentPin ){
        
        pinSuccessMassege.style.display = 'block';
        pinFailureMassage.style.display = 'none';
    }
    else {
        
        pinFailureMassage.style.display = 'block';
        pinSuccessMassege.style.display = 'none';
    }

})