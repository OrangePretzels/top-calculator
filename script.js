let num = '';
let numTwo = '';
let firstOperand = '';
let sum = ''

const numberInput = document.querySelector('.numberInput')

const numbers = Array.from(document.querySelectorAll('.calculatorButtons'))

numbers.map( number => {
    number.addEventListener('click', (e) => {
        if (sum != ''){
            numberInput.innerText = ''
        }
        num += e.target.value
        num = parseInt(num)
        numberInput.innerText += e.target.value
    })
})


const operators = Array.from(document.querySelectorAll('.operators'))

operators.map( operator => {
    operator.addEventListener('click', (e) => {
        operator = e.target.value
        if(e.target.value === '='){
            // result(num, firstOperand, numTwo)
            result(num, numTwo)
        } else if(e.target.value === '+' || '-' || '*' ||'/'){
            numberInput.innerText = e.target.value
            numTwo = num
            num = ''
            // 
            firstOperand = e.target.value
            console.log(firstOperand)
        }

    })
})


function result (a, b){
    if(firstOperand == '+'){
        sum = a + b;
        console.log(sum);
        num = '';
        numTwo = '';
        firstOperand = '';
        numberInput.innerText = sum
    } else if (firstOperand == '-'){
        sum = b - a;
        console.log(sum);
        num = '';
        numTwo = '';
        firstOperand = '';
        numberInput.innerText = sum
    } else if (firstOperand == '*'){
        sum = a * b;
        console.log(sum);
        num = '';
        numTwo = '';
        firstOperand = '';
        numberInput.innerText = sum
    } else if (firstOperand == '/'){
        sum = b / a;
        console.log(sum);
        num = '';
        numTwo = '';
        firstOperand = '';
        numberInput.innerText = sum
    }
    // console.log( a, operand, b)
}



const clear = document.querySelector('#clear')

clear.addEventListener('click', function (){
            numberInput.innerText = ''
            num = ''
            numTwo = ''
            firstOperand = '';
            sum = ''

            console.log(num, numTwo, firstOperand, sum)
})