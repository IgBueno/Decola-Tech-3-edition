function verificador(){
  const operacao = Number(prompt('Escolha a função:\n 1- Compara valores iguais \n 2- soma valores \n 3 - Compara se é maior ou que 10 \n 4 - Compara se é maior ou menor que 20 \n 5 - Verifica tudo'));
  if(!operacao || operacao >= 6){
    alert('Função inválida');
    verificador()
  }else {
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;
    let somando;
    let comparando10;
    let comparando20;
    if(!n1 || !n2){
      alert('Valores inválidos')
      verificador()
    }else{
      function saoIguais (){
        resultado = n1 === n2 ?`São iguais`: `Não são iguais`
        alert(`${n1} e ${n2} ${resultado}`)
        novaOperacao();
        }
        function somaValores(){
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
        }
        function compara10(){
        resultado = n1 + n2 > 10 ? 'Maior que 10': 'Menor que 10';
        alert(`${n1} + ${n2} é ${resultado}`)
        novaOperacao();
        }
        function compara20(){
        resultado = n1 + n2 < 20 ? 'Menor que 20': 'Maior que 20';
        alert(`${n1} + ${n2} é ${resultado}`)
        novaOperacao();
        }
        function verificaTudo(){
        somando = n1 + n2 
        resultado = n1 === n2 ? `São iguais` : `Não são iguais`
        comparando10 = n1 + n2 > 10 ? 'Maior que 10': 'Menor que 10'; 2
        comparando20 = n1 + n2 < 20 ? 'Menor que 20': 'Maior que 20'
        alert(`Os número ${n1} e ${n2} ${resultado}. Sua soma é ${somando} que é ${comparando10} e ${comparando20}`)
        novaOperacao();
        }
        function novaOperacao(){
        let opcao = prompt('Deseja executar outra função? \n 1 - Sim \n 2 - Não');
    
        if (opcao == 1){
          verificador();
        }else if (opcao == 2){
          alert('Fim!')
        }else{
          alert('Digite uma opção válida')
          novaOperacao();
        }
      }
    }
  }


switch(operacao){
  case 1:
    saoIguais();
    break;
  case 2:
    somaValores();
    break;
  case 3:
    compara10();
    break;
  case 4:
    compara20();
    break;
  case 5:
  verificaTudo();
    break;
  }
}

verificador()