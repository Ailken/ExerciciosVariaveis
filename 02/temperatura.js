const F = 73;

//°F = °C × 1, 8 + 32
//°C = (°F − 32) ÷ 1, 8

let C = (F-32) / 1.8;
console.log(C.toFixed(0));