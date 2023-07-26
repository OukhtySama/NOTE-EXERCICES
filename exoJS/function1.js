//  1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme. 

let tableau = [8, 4, 5, 6, 7, 8]
total = 0

function sumTab(tableau) {
    for (let index = 0; index < tableau.length; index++) {
        total += tableau[index]
        
    }
    console.log(total)
}
sumTab(tableau)

function largesteNumber(numbers){
    let max = numbers[0]
    for (let index = 0; index < array.length; index++) {
        if (numbers[index] > max) {
            max = number[index]
        }
    }
    return max;
}