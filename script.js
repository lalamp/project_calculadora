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

numbers.forEach(item => {
    item.addEventListener('click', event => {
        if(numberAtual.length > 10){
            alert('Você não pode inserir mais números');
        }
        else if(numberAtual != '0'){
            aux = numberAtual + item.textContent;
        }
        else{
            aux = item.textContent;
        }
        numberAtual = aux;
        display.textContent = numberAtual;
    });
});

virgula.addEventListener('click', event => {
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
porcent.addEventListener("click", event => {
        result = porcentagem(parseFloat(display.textContent));
        display.textContent = result.toString();    
        if(count == 0 || estado == 'wait'){
            numberAtual = result.toString();
        }
        else{
            numberAntigo = result.toString();
        }   
    });
function porcentagem(a){
    let number = a/100;
    return number;
}

    // Positivo e Negativo
let posXneg = document.querySelector("#bPosNeg");
posXneg.addEventListener("click", event => {
        result = positivoXnegativo(parseFloat(display.textContent));
        display.textContent = result.toString();
        if(count == 0 || estado == 'wait'){
            numberAtual = result.toString();
        }
        else{
            numberAntigo = result.toString();
        }   
    });
function positivoXnegativo(a){
    let number = a*(-1);
    return number;
}

    // Soma
let somador = document.querySelector("#bSoma");
somador.addEventListener('click', event => {
        if(operando == '='){
            operando = '+';
            estado = 'wait';
        }
        if(operando != ''){
            operacoes();
            operando = '+';
            estado = 'wait';
        }
        else{
            numberAntigo = numberAtual;
            numberAtual = '0';
            operando = '+';
            estado = 'wait';
        }
    });

    // Subtração
let subtrador = document.querySelector("#bSub");
subtrador.addEventListener('click', event => {
        if(operando == '='){
            operando = '-';
            estado = 'wait';
        }
        if(operando != ''){
            operacoes();
            operando = '-';
            estado = 'wait';
        }
        else{
            numberAntigo = numberAtual;
            numberAtual = '0';
            operando = '-';
            estado = 'wait';
        }
    });

    // Multiplicação
let multiplicador = document.querySelector("#bMult");
multiplicador.addEventListener('click', event => {
        if(operando == '='){
            operando = '*';
            estado = 'wait';
        }
        else if(operando != ''){
            operacoes();
            operando = '*';
            estado = 'wait';
        }
        else{
            numberAntigo = numberAtual;
            numberAtual = '0';
            operando = '*';
            estado = 'wait';
        }
    });

    // Divisão
let divisor = document.querySelector("#bDiv");
divisor.addEventListener('click', event => {
        if(operando == '='){
            operando = '/';
            estado = 'wait';
        }
        else if(operando != ''){
            operacoes();
            operando = '/';
            estado = 'wait';
        }
        else{
            numberAntigo = numberAtual;
            numberAtual = '0';
            operando = '/';
            estado = 'wait';
        }
    });

    // Resultado
let igual = document.querySelector("#bIgual");
igual.addEventListener('click', event => {
        operacoes();
        operando = '=';
        estado = '';
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
    display.textContent = result.toString(); 
    numberAntigo = result.toString();
    numberAtual = '0';
    count++;
}





