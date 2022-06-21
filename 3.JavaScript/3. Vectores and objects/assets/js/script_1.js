// Oque são vetores ou arrays

// Como declarar um array
// let array = [ 'string', 1, true];
// console.log(array);

// Array guarda vários tipos de dados
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3']];
// console.log(array);

//  forEach - recebe uma função como parâmetro e dentro da função recebe uma instrução
// Realiza uma repetição para cada item
// array.forEach(function(item, index){console.log(item, index)})

// Push - Adiciona um novo item no final do array
// array.push('Novo item')
// console.log(array)

// Pop - Remove um item no final da array
// array.pop(array)
// console.log(array)

//  shift - retira um item do início do array
// array.shift();
// console.log(array);

// unshift - adiciona um novo item no array
// array.unshift('Novo item no início');
// console.log(array);

// indexOf- retorna o índice dentro de uma array
// console.log(array.lastIndexOf(true))

// splice - Remove ou substitui um item pelo índice
// array.splice(0, 3);
// console.log(array);

// slice - Retorna uma parte de uma array existente
//  é um método
// let novoArray = array.slice(0, 3);
// console.log(novoArray)

// Dados que possuem propriedades e valores que definem suas características.
let object = { string: 'string', number: 1, boolean: true, array: ["array"],objectInterno:{objectInterno:'Objeto interno'}};

// Formas de desestruturar os dados de um object
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var array = object.array;
console.log(array);

//  Segunda forma de desestruturar 
var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);