// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function isFibonacci(num) {
    let a = 0;
    let b = 1;
   
    if (num === a || num === b) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }
    
    let next = a + b;
    while (next <= num) {
        if (next === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = next;
        next = a + b;
    }
    
    return `O número ${num} não pertence à sequência de Fibonacci.`;
}
// Teste com alguns exemplos
console.log(isFibonacci(8));   // O número 8 pertence à sequência de Fibonacci.
console.log(isFibonacci(10));  // O número 10 não pertence à sequência de Fibonacci.
console.log(isFibonacci(21));  // O número 21 pertence à sequência de Fibonacci.

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

function verificaLetraA(str) {
    const lowerStr = str.toLowerCase();

    let contador = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === 'a') {
            contador++;
        }
    }

    if (contador > 0) {
        return `A letra 'a' aparece ${contador} vezes na string.`;
    } else {
        return `A letra 'a' não está presente na string.`;
    }
}

// Teste com alguns exemplos
console.log(verificaLetraA("Aprender JavaScript é interessante!")); // A letra 'a' aparece 3 vezes na string.
console.log(verificaLetraA("Hello World!")); // A letra 'a' não está presente na string.
console.log(verificaLetraA("A A a a A")); // A letra 'a' aparece 5 vezes na string.


// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

var INDICE = 12, SOMA = 0, K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA);
