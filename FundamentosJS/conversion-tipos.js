//Explícita(Type Casting)

const string = '42';
//Pasando a entero 
const integer = parseInt(string)
console.log(integer);
console.log(typeof integer)//el typeof no permite identificar el tipo de dato 

//Pasando a número flotante

const StringDecimal = '34.45';
const float = parseFloat(StringDecimal)
console.log(float)
console.log(typeof float)
//Binario 
const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//implícita(Type Casting)

const sum = '5' + 3;
console.log(sum)

const sumWithBoolean = '3' + true; 
console.log(sumWithBoolean)
