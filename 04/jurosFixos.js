//M = montante
//C = Capital
//I = taxa fixa de juros
//t = periodo de tempo

//M=C(1+i)t

let capital = 1000;
let tempo = 5;
const taxaFixa = 0.125;

let montante = capital * (1+taxaFixa)**5;

console.log(montante.toFixed(0));