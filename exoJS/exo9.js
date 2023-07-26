// Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console. 
let min = arr => arr.reduce((x, y) => Math.min(x, y));
let max = arr => arr.reduce((x, y) => Math.max(x, y));
 
var arr = [ 6, 3, 5, 2, 9 ];
 
console.log("Min:", min(arr));
console.log("Max:", max(arr));

const nb= [56, 8, 865, 45]

const valeurMin = Math.min(...nb)
const valeurMax = Math.max(...nb)

console.log(valeurMin, valeurMax)

const anotherObject = { ...myObject, name: 'Alphonse'}