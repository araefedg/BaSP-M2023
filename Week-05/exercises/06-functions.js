console.log('--EXERCISE 6: FUNCTIONS');

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
//la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
//la consola del navegador.

console.log('-Exercise 6.a:');

function suma(num1, num2) {
    return  num1 + num2;
}

var resultado = suma(5, 10);
console.log(resultado);


//b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de
//los parámetros no es un número; de no ser un número, mostrar un alert aclarando que
//uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');

function suma(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert('There is an error in one of the parameters');
        return NaN;
    } else {
        return num1 + num2;
    }    
}

var resultado = suma("2", 10);
console.log(resultado);


//c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva
//verdadero si es un número entero.

console.log('-Exercise 6.c:');
   
function validateInteger(num) {
    return num % 1 == 0;
}
console.log(validateInteger(5.4));    


//d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función
//del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales
//mostrar un alert con el error y retornar el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');

function sumaEnteros(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert('There is an error in one of the parameters');
        return NaN;
    } else if (!validateInteger(num1) || !validateInteger(num2)) {
        alert('Both parameters must be integers');
        num1 = Math.round(num1);
        num2 = Math.round(num2);
    }
        return num1 + num2;
    
}
console.log(sumaEnteros("h", 3.2));


//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una
//nueva función probando que todo siga funcionando igual que en el apartado anterior.

console.log('-Exercise 6.e:');

function valEnteros(num) {
  if (typeof num == "number" && validateInteger(num)) {
    return num;
  } else if (typeof num == "number") {
    alert('There is an error in one of the parameters');
    return Math.round(num);
  } else {
    alert("uno de los parámetros tiene error");
    return NaN;
  }
}

function llamarValEnteros(num1, num2) {
  var val1 = valEnteros(num1);
  var val2 = valEnteros(num2);
  if (typeof val1 !== "number" || typeof val2 !== "number") {
    return NaN;
  }
  return val1 + val2;
}

console.log(llamarValEnteros(4.6, 5));