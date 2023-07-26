// 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

const removeVoyels = (str) => {
    return str.replace(/[aeiouy]/gi,'')
}

console.log(removeVoyels('bonjour animal'))