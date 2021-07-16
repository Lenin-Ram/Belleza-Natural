/*
  Sintaxis:

  for (expresion inicial; condicion; expresion final) {
    bloque de codigo
  }
*/

/*for (var i = 1; i <= 5; i++) {
  console.log(i);
}

console.log(i);*/

/*for (var i = 0; i <= 100; i = i + 10) {
  console.log(i);
}*/

/*
  Ejercicio: Encontrar la suma de los 
  primeros N números (utilizando for)
*/

var primeros = 10;

var suma = 0;

for (var i = 1; i <= primeros; i++) {
  suma = suma + i;
}

console.log(suma);

/*
  while (condicion) {
    bloque de codigo
  }
*/

suma = 0;
var j = 1;

while (j <= primeros) {
  suma = suma + j;
  j++;
}

/*
  Ejercicio: Arbol de asteriscos

  var nivel = 3

     *
    ***
   *****

   nivel = 5

       *
      ***
     *****
    *******
   *********
*/

var nivel = 10;

for (var i = 1; i <= nivel; i++) {
  var num_astericos = 2 * i - 1;

  var linea = "";

  for (var j = 1; j <= num_astericos; j++) {
    linea = linea + "*";
  }

  console.log(linea);
}
