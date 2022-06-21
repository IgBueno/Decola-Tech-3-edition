// var jogador1 = 0;
// var jogador2 = 0
// var placar;

//  Condicional
// If ternário
// jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'): console.log('Jogadores inválidos');

// Usando if
  // if (jogador1 > 0 && jogador2 == 0) {
  //   console.log( 'Jogador 1 marcou ponto!');
  //   placar = jogador1 > jogador2;

// Usando else if
  // } else if(jogador2 > 0 && jogador1 == 0){
  //   console.log('Jogador 2 marcou ponto')
  //   placar = jogador2 > jogador1

// Usando else (senão)
  // } else {
  //   console.log('Ninguém marcou ponto')
  // }

// Switch/case funciona como estrutura condiconal
//  - Utilizar o break para que a condição não fique em loop infinito
//  - Default - funciona como valor padrão ,caso os 2 casos não sejam atendidos.
// switch (placar) {
//   case placar = jogador1 > jogador2:
//     console.log('Jogador 1 ganhou');
//     break;
//   case placar = jogador2 > jogador1:
//     console.log('jogador 2 ganhou');
//     break;
//     default:
//     console.log('Ninguém ganhou');
// }

// For - Repetição de instrução até que condição seja falta
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3:'valor3',}

// for (let indice = 0; indice < array.length; indice++) {
//   console.log(indice);
// }

// For/in - Repetição apartir de uma propriedade
// for (let i in array){
//   console.log(i)

// }
//  com object
// for (i in object) {
//   console.log(i)
// }

//  For/of - Repetição apartir de um valor
// for ( i of array){
//   console.log(i)
// }

// //  Com object
// for (i of object.propriedade1){
//   console.log(i);
// }


// While - executa uma condição em quanto determinada condição for verdadeira
// A verificação é feita antes da execução se não vira um loop infinito

var a = 0;

while (a < 10) {
  a++;
  console.log(a);
}
// Do/while - Executa uma instrução até que determinada condição seja falsa
//  A verificação é feita depois da execução
do {
  a++
  console.log(a);
} while(a < 10);