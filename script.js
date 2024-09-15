let numbers = document.querySelectorAll("button.numbers");
let display = document.querySelector(".resultado");
let virgula = document.querySelector("#bVirg");

let aux;
let numberAtual = '0';
let numberAntigo = '0';
let result = 0;
let count = 0;
let operando = '';
let estado = '';

numbers.forEach(function(item) {
    item.addEventListener('click', () => {
        if(numberAtual.length >= 9){
            return
        }
        else if(numberAntigo != '0' && operando == '='){
            numberAntigo = '0'
            aux = item.textContent;
        }
        else if(numberAtual != '0'){
            aux = numberAtual + item.textContent;
        }
        else{
            aux = item.textContent;
        }
        estado = 'number';
        numberAtual = aux;
        display.textContent = numberAtual;
    });
});

virgula.addEventListener('click', function() {
    if(numberAtual.includes('.')){
        aux = numberAtual;
    }
    else{
        aux = numberAtual + '.';
    }
    numberAtual = aux;
    display.textContent = numberAtual;
})

// OPERAÇÕES
    // Zerar
let zerar = document.querySelector("#bC");
zerar.addEventListener("click", clear);
function clear(){
    display.textContent = '0';
    numberAtual = '0';
    numberAntigo = '0';
    operando = '';
    estado = '';
    result = 0;
    count = 0;
}

    // Porcentagem
let porcent = document.querySelector("#bPorc");
porcent.addEventListener("click", () => {
        if(estado == 'waiting'){
            result = parseFloat(numberAntigo) * parseFloat(numberAntigo)/100;
            numberAtual = result.toString();
        }
        else if(estado == 'done'){
            result = parseFloat(numberAntigo)/100;
            numberAntigo = result.toString();
        }
        else if(numberAntigo != '0' && (operando == '+' || operando == '-')){
            result = parseFloat(numberAntigo) * parseFloat(numberAtual)/100;
            numberAtual = result.toString();
        }
        else{
            result = parseFloat(numberAtual)/100;
            numberAtual = result.toString();
        }

        resultText = result.toString();
        if(resultText.length > 9){
            resultText = result.toPrecision(9)
        }
        if(resultText.slice(-1) == '.'){
            resultText = Math.round(result)
        }
        while(resultText.includes('.') && resultText.slice(-1) == '0'){
            resultText = resultText.replace(/(^0+(?=\d))|(,?0+$)/g, '');
        }
        display.textContent = resultText;  
    });

    // Positivo e Negativo
let posXneg = document.querySelector("#bPosNeg");
posXneg.addEventListener("click", () => {
        result = parseFloat(display.textContent)*(-1);
        display.textContent = result.toString();

        if(count == 0 || estado == 'wait'){
            numberAtual = result.toString();
        }
        else{
            numberAntigo = result.toString();
        }   
    });

    // Soma
let somador = document.querySelector("#bSoma");
somador.addEventListener('click', () => {
        if(operando == '='){
            operando = '+';
            estado = 'waiting';
        }
        else if(operando != '' && estado == 'waiting'){
            operando = '+';
        }
        else if(operando != ''){
            operacoes();
            operando = '+';
            estado = 'waiting';
        }
        else{
            numberAntigo = numberAtual;
            numberAtual = '0';
            operando = '+';
            estado = 'waiting';
        }
    });

    // Subtração
let subtrador = document.querySelector("#bSub");
subtrador.addEventListener('click', () => {
        if(operando == '='){
            operando = '-';
            estado = 'waiting';
        }
        else if(operando != '' && estado == 'waiting'){
            operando = '-';
        }
        else if(operando != ''){
            operacoes();
            operando = '-';
            estado = 'waiting';
        }
        else{
            numberAntigo = numberAtual;
            numberAtual = '0';
            operando = '-';
            estado = 'waiting';
        }
    });

    // Multiplicação
let multiplicador = document.querySelector("#bMult");
multiplicador.addEventListener('click', () => {
        if(operando == '='){
            operando = '*';
            estado = 'waiting';
        }
        else if(operando != '' && estado == 'waiting'){
            operando = '*';
        }
        else if(operando != ''){
            operacoes();
            operando = '*';
            estado = 'waiting';
        }
        else{
            numberAntigo = numberAtual;
            numberAtual = '0';
            operando = '*';
            estado = 'waiting';
        }
    });

    // Divisão
let divisor = document.querySelector("#bDiv");
divisor.addEventListener('click', () => {
        if(operando == '='){
            operando = '/';
            estado = 'waiting';
        }
        else if(operando != '' && estado == 'waiting'){
            operando = '/';
        }
        else if(operando != ''){
            operacoes();
            operando = '/';
            estado = 'waiting';
        }
        else{
            numberAntigo = numberAtual;
            numberAtual = '0';
            operando = '/';
            estado = 'waiting';
        }
    });

    // Resultado
let igual = document.querySelector("#bIgual");
igual.addEventListener('click', () => {
        operacoes();
        operando = '=';
    });

function operacoes(){
    if(operando == '+'){
        result = parseFloat(numberAntigo) + parseFloat(numberAtual); 
    }
    else if(operando == '-'){
        result = parseFloat(numberAntigo) - parseFloat(numberAtual);         
    }
    else if(operando == '*'){
        result = parseFloat(numberAntigo) * parseFloat(numberAtual);          
    }
    else if(operando == '/'){
        result = parseFloat(numberAntigo) / parseFloat(numberAtual);          
    }
    
    resultText = result.toString();
    if(resultText.length > 9){
        resultText = result.toPrecision(9)
    }
    if(resultText.slice(-1) == '.'){
        resultText = Math.round(result)
    }
    while(resultText.includes('.') && resultText.slice(-1) == '0'){
        resultText = resultText.replace(/(^0+(?=\d))|(,?0+$)/g, '');
    }

    numberAntigo = resultText;
    numberAtual = '0';
    display.textContent = resultText;
    count++;
    estado = 'done';
}





