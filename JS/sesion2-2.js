/*
  switch (valor / variable) {

    case valor1:
      bloque de codigo
      break;

    case valor2:
      bloque de codigo
      break;

    ...

    case valorN:
      bloque de codigo
      break;

    default:
      bloque de código
  }

  NOTA: El switch termina de ejecutarse
  hasta encontrar la instrucción "break"
  o bien ejecutar la última línea (antes de })
*/

/*var raza = "salchicha";
var color = "negro";

switch (raza) {
  case "dalmata":
    console.log("Es un perro que ayuda a los demás, blanco con manchas");
    break;

  case "salchicha":
    console.log("Es un perro chiquito, cazador por naturaleza");

    if (color === "negro") {
      console.log("Es un perro negro ja");
    }
    break;

  case "pastor aleman":
    console.log("Es un perro protector y amigo de los niños");
    break;

  case "shiba inu":
    console.log("Es un perro japonés, muy lindo");
    break;

  default:
    console.log("No tengo datos sobre esa raza");
}*/

/*
  Ejercicio: Indicar el día de la semana
*/

var dia = 1;

// Solución:
switch (dia) {
  case 1:
    console.log("Lunes");
    break;

  case 2:
    console.log("Martes");
    break;

  case 3:
    console.log("Miercoles");
    break;

  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;

  case 6:
    console.log("Sabado");
    break;

  case 7:
    console.log("Domingo");
    break;

  default:
    console.log("Ingresa un día valido");
}

// Es equivalente a:
if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miercoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log("Viernes");
} else if (dia === 6) {
  console.log("Sabado");
} else if (dia === 7) {
  console.log("Domingo");
} else {
  console.log("No exíste");
}
