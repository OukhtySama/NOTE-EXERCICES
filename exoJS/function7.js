const myNums = [4, 12]

const triDesc = (myTab) => {
    return myTab.sort((a, b) => b - a)//permet de trier le tableau en fonction du résultat de a et b
}
const sortedArray =  triDesc(myNums)

console.log(sortedArray)

