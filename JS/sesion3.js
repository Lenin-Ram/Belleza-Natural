/*
  Reto 01: Escribir una función que calcule
  el factorial de un número:

  factorial(n) = 1 * 2 * 3 * 4 * ... * n;
*/
function factorial(n) {
    let resultado = 1;
  
    for (let i = 2; i <= n; i++) {
      resultado = resultado * i;
    }
  
    return resultado;
  }
  
  /*
    Reto 02: Escribir una función que dados
    dos números calcule el máximo común divisor.
  
    El máximo común divisor es el número más grande
    que divide a ambos sin dejar residuo.
  */
  function mcd(a, b) {
    let n1, n2;
  
    if (a >= b) {
      n1 = a;
      n2 = b;
    } else {
      n1 = b;
      n2 = a;
    }
  
    let residuo = n1 % n2;
  
    while (residuo !== 0) {
      n1 = n2;
      n2 = residuo;
  
      residuo = n1 % n2;
    }
  
    return n2;
  }
  
  /*
    Reto 03: Escribir una función que dado un número
    indique si el número es primo.
  
    Un primo es aquel que es divisible entre si mismo
    y la unidad (1).
  
    2, 3, 5, 7, 11, 13
  */
  function esPrimo(n) {
    if (n < 2) {
      return false;
    }
  
    for (let i = 3; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  