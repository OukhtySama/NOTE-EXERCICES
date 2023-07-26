// - 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau. 

let arr = [8, 4, 5, 6, 7, 8]

function sumTab(arr) {
    for (let index = 0; index < arr.length; index++) {
        let max = arr => arr.reduce((x, y) => Math.max(x, y))
        console.log("Max:", max(arr));
        return 0
    }

}
sumTab(arr)