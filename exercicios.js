// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(num3, num4) {
  // implemente sua lógica aqui
   const altura = prompt("Digite a altura")
   const largura = prompt("Digite a largura")
   resulty = altura * largura
   console.log (resulty)
}


// EXERCÍCIO 02
function imprimeIdade(anoAtual1, anoNascimento1) {
  // implemente sua lógica aqui
  const anoAtual = prompt("Em que ano estamos?")
  const anoNascimento = prompt("Em que ano você nasceu?")
  result = anoAtual - anoNascimento
  console.log(result)
 }

// EXERCÍCIO 03 
function calculaIMC(x, y) {
  // implemente sua lógica aqui
  const peso = x
  const altura = y
  IMC = peso / (altura * altura)
  return IMC
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario()   {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}     

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(x, y, z) {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual a sua cor favorita?")
  const cor2 = prompt("Outra")
  const cor3 = prompt("Outra")
  const respostaCor = [cor1, cor2, cor3]  
  console.log(respostaCor)
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
   return string.toUpperCase();
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo1 = 550
  valorIngresso1 = 50
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho1 = string1.length
const tamanho2 = string2.length
const verificarTamanho = tamanho1 === tamanho2
return verificarTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array1 = array[0]
  return array1
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array2 = array[array.length-1]
  return array2
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]
  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const resultado = string1.toUpperCase() === string2.toUpperCase()
  return resultado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Em que ano estamos?")
  const anoNascimento = prompt("Em que ano você nasceu?")
  const anoIdentidade = prompt("Em que ano sua identidade foi emitida?")

  const idade = anoAtual - anoNascimento
  const vencimentoIdentidade = anoAtual - anoIdentidade
  const pessoaMenos20 = idade <= 20 && vencimentoIdentidade >= 5
  const pessoaEntre20e50 = idade > 20 && idade <= 50 && vencimentoIdentidade >= 10
  const pessoaAcima50 = idade > 50 && vencimentoIdentidade >= 15
  
  const checagem = pessoaMenos20 || pessoaEntre20e50 || pessoaAcima50

  return console.log(checagem)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
   const multiplo400 = ano % 400 === 0
   const multiplo100 = ano % 100 === 0
   const multiplo4 = ano % 4 === 0 || multiplo400 && (!multiplo100 || multiplo400)
   
   return (multiplo400 || multiplo4) && (!multiplo100 || multiplo4) && (!multiplo100 || multiplo400)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maisDe18 = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui o ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  const constMaisDe18 = maisDe18.includes("sim")
  const constEnsinoMedio = ensinoMedio.includes("sim")
  const constDisponibilidade = disponibilidade.includes("sim")
  const resultado = constMaisDe18 && constEnsinoMedio && constDisponibilidade === true 
  return console.log(resultado)
}