//Po = a população incial de pessoas infectadas
//X = quantidade de pessoas para as quais um paciente infectado pode transmitir
//t = tempo percorrido

let Po = 1000;
let X = 4;
let t = 7;

let P = Po * X ** (t / 7);
console.log("P = " + P);