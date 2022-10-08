// abaixo são os tipos de vara´veis
let nome = "Farley" // este é uma variável NOME com valor FARLEY
let idade = 27 
let estado = "Ceará"
let local = "Pereiro"
let rua = "Av: José Milton de Morais"
let numerocasa = 91

console.log(nome)
console.log(idade)
console.log(estado)
console.log(local)
console.log(rua)
console.log(numerocasa)

// abaixo são os tipos de cados

let Nome = "Farley" // STRING
let Idade = 27 // NUMBER
let logado = true // BOOLEAN
let lista = ["ovo", "leite", "pão"] // ARRAY
let nomeCompleto = { nome:"Maria", idade:68 } // OBJECT


// o comando abaixo exibe os dados no CONSOLE 
console.log(typeof nomeCompleto)

// este é como faz um comentário DE UMA LINHA

/* 
este é um
comentário de 
várias linhas
*/

console.log(typeof logado)

// resolvendo o exercicio do vídeo #8
 
// exercício 1
let nomeCarro = "Ferrari F12"
// exercício 2
let valor = "R$ 19,99"
// exercício 3 
let cidade = "São Paulo"

console.log(nomeCarro)
console.log(valor)
console.log(cidade)

// TIPOS DE VARÁVEIS 

var name = "José";
console.log(name)

// OPERAÇÕES EM VARIÁVEIS COM NÚMEROS (MATEMÁTICAS)

let x = 4;

x = x + 8;
console.log(x)

let y = 4;

y = y - 8;
console.log(y)

let z = 6;

z = z * 8;
console.log(z)

let c = 4;

c = c / 2;
console.log(c)


let n1 = 50;
let n2 = 60;
let soma = n1 + n2;
console.log(soma)

// OPERAÇÕES EM VARIÁVEIS STRINGS

let teste = "nome";
let numb = 8;
let result = teste + numb ; // concatenar e não somar, no caso de uso de string
console.log(result)

let nme = "Jair";
let lestname = "Bolsonaro";
let presid = nme + ' ' + lestname;
console.log(presid);

// STRING E TAMPLATE STRING 

let txt = "Farley";
let txt2 = "Lima";
let nomecompleto = txt + ' ' + txt2;

console.log("nome: "+nomecompleto)

// TAMPLETE STRING 

let txt3 = "Farley";
let txt4 = "Lima";
let juncao = `Francico ${txt3} ${txt4} da silva`;

let idad = 27
let idadString = `${idad} anos`

console.log("nome: "+juncao);

console.log("idade: "+idadString)

// CONDICIONAL IF (SE) ELSE ()

let id = 16;

if (id == 18) {
  console.log("Você tem 18 anos")
} if (id > 17) {
  console.log("Você é MAIOR de idade")
} else {
  console.log("você é MENOR de idade")
}

// MULT - CONDICIONAIS && 

let idd = 45

if (idd >= 18 && idd <= 60 ) {
  console.log("Você é um adulto")
}

// CONDICIONAL DUPLA (IF ELSE)

let idda = 75

if (idda < 18) {
  console.log("Você é uma criança.")
} else if (idda >= 18 && idda <60) {
  console.log("Você é um adulto.")
} else if (idda >= 60) {
  console.log("Você é um idoso.")
}

// EXERCICÍCIO #2 VÍDEO #18 
// atividade 1
let d = 10;
let f = 5;

console.log(d != f)

// atividade 2
let w = "10";
let t = 10;

console.log(w === t);

// atividade 3
let o = 10;
let p = 5;

console.log(p < o);

// atividade 4
let preco = 40.3

if (preco === 45) {
  console.log("Preço do KG carne")
} else if (preco <= 45) {
  console.log("Preço da carne está BARATO")
} else if (preco > 45) {
  console.log("O preço da carne está cara!")
}

// CONDICIONAL TERNÁRIO 

let age = 70;

let isAdult = ((age >= 18 && age < 60) ? 'Yes' : 'No');

console.log(isAdult);


// SWITCH 

let profession = "Bombeiro" 

console.log("Profissão "+ profession)

switch (profession) {
  case 'Fiscal':
    console.log('Sua camisa será VERDE')
    break;
  case 'Bombeiro':
    console.log('Sua camisa será VERMELHA')
    break;
  case 'Policial':
    console.log('Sua camisa será AZUL')
    break;
  default:
    console.log('Não tem camisa para esta profissão')
    break;
}
