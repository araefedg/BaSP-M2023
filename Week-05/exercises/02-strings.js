console.log('--EXERCISE 2: STRINGS');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
//mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:')

var string = 'I am learning Javascript';
var stringToUp = string.toUpperCase();
console.log(stringToUp);

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
//substring).

console.log('-Exercise 2.b:')

var string2 = 'Programming Javascript';
var subString2 = string2.substring(0, 5);
console.log(subString2);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
//substring).

console.log('-Exercise 2.c:');

var string3 = 'Learning about strings';
var subString3 = string3.substring(string3.length - 3);
console.log(subString3);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
//una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');

var string4 = 'thIs i A stRinG';
var substringUp = string4.substring(0, 1).toUpperCase();
var substringLow = string4.substring(1).toLowerCase();
var result4 = substringUp + substringLow;
console.log(result4);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
//indexOf).

console.log('-Exercise 2.e:');

var string5 = 'Become a software developer 2023';
var stringBlank = string5.indexOf(' ');
console.log(stringBlank);

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
//espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
//nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
//letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f:');

var string6 = 'SoFtWaRe dEvElOpEr';
var stringBlank6 = string6.indexOf(' '); 
var firstWord = string6.substring(0, stringBlank6).toLowerCase();
var secondWord = string6.substring(stringBlank6+1).toLowerCase();
firstWord = firstWord.substring(0, 1).toUpperCase() + firstWord.substring(1);
secondWord = secondWord.substring(0, 1).toUpperCase() + secondWord.substring(1);
var result6 = firstWord + ' ' + secondWord;
console.log(result6);



