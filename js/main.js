
let input = document.getElementById("screen");
let selectedAmal = "";
let numberOne = 0;
let selectedAmalOriginal = "";

function addNumber(number) {
    console.log(number);


    if (input.value.indexOf('.') !== -1 && number === '.'){

    }else {
        if (input.value === "0" && number != '.' || selectedAmal.length > 0){
            input.value = number;
            selectedAmal = "";

        }else {
            input.value += number
        }
    }
}



function action(amal) {
    selectedAmal = amal;
    selectedAmalOriginal = amal;
    numberOne = input.value;

}


function equal() {
    let numberTwo = input.value;

    let result;

    if (selectedAmalOriginal === 'add'){
        result = parseFloat(numberOne) + parseFloat(numberTwo);

    }else if (selectedAmalOriginal === 'subtract'){
        result = numberOne - numberTwo;

    }else if (selectedAmalOriginal === 'multiply'){
        result = numberOne * numberTwo;
    }else if (selectedAmalOriginal === 'divide'){
        result = numberOne / numberTwo;
    }
    else  if (selectedAmalOriginal === 'sqrt'){
        result=Math.sqrt(numberOne);
    }
    else if (selectedAmalOriginal === 'pow'){
        result=Math.pow(numberOne,numberTwo);
    }
    input.value = result;
}

function clearScreen() {
    input.value = 0;
    numberOne = 0;
    selectedAmalOriginal = "";
    selectedAmal = "";
}

document.addEventListener ("keydown", function (event) {
    if (event.keyCode === 48){
        addNumber(0);

    }else if (event.keyCode === 49){
        addNumber(1);


    }else if (event.keyCode === 50){
        addNumber(2);

    }else if (event.keyCode === 51){
        addNumber(3);


    }else if (event.keyCode === 52){
        addNumber(4);

    }else if (event.keyCode === 53){
        addNumber(5);

    }else if (event.keyCode === 54){
        addNumber(6);

    }else if (event.keyCode === 55){
        addNumber(7);

    }else if (event.keyCode === 56){
        addNumber(8);

    }else if (event.keyCode === 57){
        addNumber(9);


    }else if (event.keyCode === 187){
        action('add')

    }else if (event.keyCode === 189){
        action('divite')

    }else if (event.keyCode === 220){
        action('multiply')

    }else if (event.keyCode === 191){
        action('divide')

    }else if (event.keyCode === 18){
        equal();

    }else if (event.keyCode === 27){
        clearScreen();

    }else if (event.keyCode === 192){
        action("sqrt");
    }else if (event.keyCode === 39){
        action("pow");
    }


});


















































