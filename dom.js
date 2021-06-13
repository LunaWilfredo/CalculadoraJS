/* Capturando botones*/
const botonNumeros = document.getElementsByName('data-number');
const botonOper    = document.getElementsByName('data-opera');
const botonIgual   = document.getElementsByName('data-igual')[0];
const botonDelete  = document.getElementsByName('data-delete')[0];

var result=document.getElementById('result');
var opActual   = '';
var opAnterior = '';
var operacion  = undefined;

/*comprobando captura de elementos */
console.log(botonNumeros);
console.log(botonOper);
console.log(botonIgual);
console.log(botonDelete);
console.log(result);

/*Añadiendo Eventos */
botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
       agregarNumero(boton.innerText);
        //alert(boton.innerText);
    })
});

botonOper.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperacion(boton.innerText);
        //alert(boton.innerText);
    })
});

botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});

/*funciones */
function selectOperacion(op){
    if(opActual =='') return;
    if(opAnterior !=''){
        calcular();
    }
    operacion = op.toString();
    opAnterior = opActual;
    opActual='';
};

function calcular(){
    var calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);

    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opActual = calculo;
    operacion = undefined;
    opAnterior='';

};

function agregarNumero(num){
    opActual= opActual.toString() + num.toString();
    actualizarDisplay();
};
function clear(){
    opActual="";
    opAnterior='';
    operacion=undefined;
};

function actualizarDisplay(){
    result.value = opActual;
};

clear();