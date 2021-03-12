// Do not change any of the function names
//modelos 1.0 realizados en su momento
//modelos 1.1 actualizaciones con mejor manejo

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1 + n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //modelo 1.0
  //i = 0; sum = 0; do (sum += numeros[i], i++); while (i < numeros.length);cb(sum);
  //modelo 1.1
  cb(numeros.reduce(function (total, ele) {return total +=ele; }))
  }

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //modelo 1.0
  //for (i = 0; i< array.length; i++) {
  //  let element = array[i]
  //  cb(element)
  //}
  //modelo 1.1
  array.forEach ((array) => { cb(array);})
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //modelo 1.0
  //nuevo = [];
  //for (i=0; i <array.length; i++) {let elem = array[i];cb(elem);nuevo.push(cb(elem));}return nuevo;}
  //modelo 1.1
  var nuevo = array.map(function (el) {
    return cb(el);
  })
  return nuevo;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //modelo 1.0
  nue = []
  for (i=0; i < array.length; i++)
    if (array[i][0] === "a") {nue.push(array[i])}; return nue;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
