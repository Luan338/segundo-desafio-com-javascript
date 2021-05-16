console.log(`DESAFIO DE LÓGICA 02`);

let idadePessoa = 10;
const souHumano = true;

let mesAniversario = "março";


if (idadePessoa >= 18 && souHumano){
    console.log("Você já responde por seus atos!");
}else{
    console.log("Apenas acompanhado com o responsável!");
}

if (mesAniversario == "janeiro" || mesAniversario == "dezembro"){
    console.log("Você é capricórniano")
}else{
    console.log("Você não tem o melhor signo :)")
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "Ruan"

if(nome.charAt(0) == "R"){
    console.log(`Seu nome começa com ${nome.charAt(0)} `)
}else{
    console.log(`Seu nome não começa com R`);
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let sobreNome = "Eric"

if(sobreNome.length >= 6 || sobreNome.charAt(0) == "E"){
    if(sobreNome.length >=6)
    console.log(`Tem mais de ${sobreNome.length}`);
    if(sobreNome.charAt(0) == "E")
    console.log(`Começa com a letra ${sobreNome.charAt(0)}`)
}else{
    console.log("Nenhuma das opções")
}

//xD