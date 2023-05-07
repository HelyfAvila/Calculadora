let numero1 = '';
let numero2 = '';
let operador = '';
let resultado = '';
let expressao = '';

function adicionarNumero(numero){
    if(!operador){//Essa variável armazena os operadores aritméticos(+ , - , * ou /) que o usuário utilizou para realizar a operação, se o mesmo não for definido ou for igual a `null`, o número adicionado deve ser parte do primeiro operando (ou seja, número1)
        numero1 += numero;
        expressao += numero;
        document.getElementById('resultado').value = expressao;

    }else{
        numero2 += numero;
        expressao += numero;
        document.getElementById('resultado').value = expressao;
    }
}
function adicionarDecimal(){
    if(!operador && !numero1.includes('.')){//!numero1.includes('.') é uma expressão em JavaScript que verifica se a string armazenada na variável numero1 NÃO contém o caractere '.' (ponto).
        numero1 += '.';
        expressao += '.';
        document.getElementById('resultado').value = expressao;

    }else if(operador && !numero2.includes('.')){
        numero2 += '.';
        expressao += '.';
        document.getElementById('resultado').value = expressao;
    }
}
function adicionarOperador(novoOperador){
    if(operador && numero2){
        calcular();
        operador = novoOperador;
        expressao += `${operador}`;
        document.getElementById('resultado').value = expressao;

    }else if(numero1){
        operador = novoOperador;
        expressao += `${operador}`;
        document.getElementById('resultado').value = expressao;
    }
}
function calcular(){
    if(numero1 && numero2 && operador){
        let expressao = `${numero1} ${operador} ${numero2}`;
        switch(operador){
            case '+':
                resultado = parseFloat(numero1) + parseFloat(numero2);
                break;
            case '-':
                resultado = parseFloat(numero1) - parseFloat(numero2);
                break;
            case '*':
                resultado = parseFloat(numero1) * parseFloat(numero2);
                break;
            case '/':
                resultado = parseFloat(numero1) / parseFloat(numero2);
                break;
        }
        document.getElementById('resultado').value = `${resultado}`;
        numero1 = resultado.toString();
        numero2 = '';
        operador = '';
    }
}
function limpar() {
    numero1 = '';
    numero2 = '';
    operador = '';
    resultado = '';
    expressao = '';
    document.getElementById('resultado').value = '';
}


 