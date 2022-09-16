/*Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica,
por exemplo: um programa de calculadora.*/


function simples(){ /*1º forma de declarar: função tipo simples;*/

    console.log("Está é uma função com sintaxe simples.")
    }
    simples()  /*A função deverá ser chamada para ser executada.*/

    
    
    /*2º forma de declarar: função tipo anônima
    a função é tratada como um dado, ou seja, é armazenada dentro de uma variável
     e seu nome é suprimido*/
    var soma = function (a,b) {
              return a+b;
    }
    console.log(soma(5,8))
    
    
    /*3º forma de declarar: função tipo arrow functions(ou função de seta)
    (o intuito desta função é simplificar a expressão eliminando o uso da palavra "function", 
    e da instrução "return" no método e até mesmo os parentêses dos argumentos.*/
    
    var soma = (a,b)=>a+b
    console.log(soma(5,8))

    
function calculator(valueA, valueB, operation) {
    if (operation === '+') {
        return +valueA + +valueB
    }
    else if (operation === '-') {
        return +valueA - +valueB
    }
    else if (operation === '*') {
        return +valueA * +valueB
    }
    else if (operation === '/') {
        return +valueA / +valueB 
    }
}
const resultado = calculator(5,2, '*')
console.log("A soma da operação calculadora é ", resultado)
