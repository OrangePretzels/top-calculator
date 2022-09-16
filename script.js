let num = '';
let numTwo = '';
let firstOperand = '';
let sum = '';

const numberInput = document.querySelector('.numberInput')

const numbers = Array.from(document.querySelectorAll('.calculatorButtons'))

numbers.map( number => {
    number.addEventListener('click', (e) => {

        if(sum != 0){
            numberInput.innerText = ''
            sum = ''
        }

        num += e.target.value
        num = parseInt(num)
        numberInput.innerText += e.target.value

    })
})

const operators = Array.from(document.querySelectorAll('.operators'))

operators.map( operator => {

    operator.addEventListener('click', (e) => {


        if(e.target.value === '='){

            result(num, numTwo)

        } else if(e.target.value === '+' || '-' || '*' ||'/'){

            if(num != '' && numTwo != ''){

                    if(firstOperand === '+'){
                        num = num + numTwo
                        numTwo = '';
                        numberInput.innerText = num
                        console.log(num)
                    }else if(firstOperand === '-'){
                        num = numTwo - num
                        numTwo = '';
                        numberInput.innerText = num
                        console.log(num)
                    }else if(firstOperand === '*'){
                        num = num * numTwo
                        numTwo = '';
                        numberInput.innerText = num
                        console.log(num)
                    }else if(firstOperand === '/'){
                        num = numTwo / num
                        numTwo = '';
                        numberInput.innerText = num
                        console.log(num)
                    }
                }


            numberInput.innerText = e.target.value

            numTwo = num
            num = ''

        }

        firstOperand = e.target.value

    })

})

function result (a, b){
    if(firstOperand === '+'){
        sum = b + a;
        console.log(sum);
        num = '';
        numTwo = '';
        firstOperand = '';
        numberInput.innerText = sum
    } else if (firstOperand === '-'){
        sum = b - a;
        console.log(sum);
        num = '';
        numTwo = '';
        firstOperand = '';
        numberInput.innerText = sum
    } else if (firstOperand === '*'){
        sum = b * a;
        console.log(sum);
        num = '';
        numTwo = '';
        firstOperand = '';
        numberInput.innerText = sum
    } else if (firstOperand === '/'){
        sum = b / a;
        console.log(sum);
        num = '';
        numTwo = '';
        firstOperand = '';
        numberInput.innerText = sum
    }
}


const clear = document.querySelector('#clear')

const removeEverything = function (){
    numberInput.innerText = ''
    num = ''
    numTwo = ''
    firstOperand = '';
    sum = ''
    console.log("CLEARED")
}

clear.addEventListener('click', removeEverything)