// Tipos primitivos

// Boolean - Recebe valor verdadeiro ou falso
// console.log- imprime valor da variável
// Typeof - Imprime o tipo da variável
var vOuf = false;
console.log(typeof(vOuf))

// number - Recebe valor númerico
var numeroQualquer = 1;
console.log(typeof(numeroQualquer))

// string recebe texto
var nome = "diana"
console.log(typeof(nome))


// Variável Caixa que guarda valores

// Variável "var" - Escopo global e local
// - Pode ter seu valor alterado
// - Se não tiver valor inicial será tratada como null

var variavel;
console.log(variavel)

// Variável "let" - Escopo local de bloco
// - Pode ter seu valor alterado
// - Se não tiver um valor inicial será tratada como null
// - Permite alterar variavel após sua criação

let variavel2 = "Diana"
variavel2 = "Frank"
console.log(variavel2)

// Variável "const" - Escopo local de bloco
//  - Seu valor não pode ser alterado
// - O valor inicial é obrigatório 

const constante = "diana";
console.log(constante)

// Escopo - Define a limitação e visibilidade de um bloco de código

// Escopo global 
// - Variável declarada fora de qualquer bloco
// - Vísibilidade fica disponível em todo o código

// Escopo local
// - Variável declarada dentro de um bloco
// - Visibilidade pode ficar disponível ou não

var escopoGlobal = "global";
console.log(escopoGlobal)

function escopoLocal() {
  let escopoLocalInterno = "local";
  console.log(escopoLocalInterno)
}
escopoLocal()
// Tipos de atribuição

// Atribuição
var atribuicao = "David";

// Comparação
var comparacao = "0" == 0;
console.log(comparacao)

// Comparação idêntica
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica)

// Operadores aritiméticos 
//  +, -, *, /, % e **

// Adição
var adicao = 1 + 1 ;
console.log(adicao)

// Subtração

var subtracao = 2 - 1;
console.log(subtracao)

//  Multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao)

//  DivisãoReal
var divisaoReal = 6 / 2;
console.log(divisaoReal)

// DivisãoInteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira)

// Potenciação
var potenciacao = 2 ** 2;
console.log(potenciacao)

// Operadores relacionais 

var maiorQue = 5 > 2;
console.log(maiorQue)

var menorQue = 3 < 2;
console.log(menorQue)

var maiorOuIgual = 3 >= 2;
console.log(maiorOuIgual)

var menorOuIgual = 8 <= 10;
console.log(menorOuIgual)

// Operadores lógicos
// &&, // e !

// && - As duas condições precisam ser verdadeiras
var e = true && false;
console.log(e)

// || - Uma das condições precisa ser verdadeira
var ou = true || false
console.log (ou)

// ! - Inverte a condição de verdadeira para falsa
var nao = !true;
console.log (nao)