let calculationsCount = 0;

function changeNumber(number, amount){
    let input = document.getElementById(number);
    input.value = parseInt(input.value) + amount;
}

function calculate(){
    //Get elements
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    //Check which operator to use and do calculation
    switch(operator){
        case '+':
            result = number1 + number2;
        break;

        case '-':
            result = number1 - number2;
        break;

        case '*':
            result = number1 * number2;
        break;

        case '/':
            if(number1 !== 0 && number2 !== 0){
                result = number1 / number2;
            }

            else{
                result = "virhe";
            }
        break;
    }

    //Update result and calculations count
    document.getElementById("result").value = result;
    calculationsCount++;
    document.getElementById("counter").innerText = calculationsCount;
}