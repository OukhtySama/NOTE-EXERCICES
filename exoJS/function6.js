function getPropertyValues(tableau, propriete) {
    return tableau.map(function(objet){
        return objet[propriete]
    })
}

const objArray = [
    {name: 'test', espece: 'singe', age: 3},
    {name: 'test', espece: 'elephant', age: 3},
    {name: 'test', espece: 'lion', age: 3},
    {name: 'test', espece: 'souris', age: 3},
    
]
const properyArray = getPropertyValues(objArray, 'espece')// trie le tableau en fonction ici des especes
console.log(properyArray)