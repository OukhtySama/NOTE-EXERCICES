// - 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules. 


function Maj(chaine) {
    const voyelle = ['a', 'e', 'i', 'o', 'u', 'y'];
    
    return chaine.replace(/[aeiouy]/gi, function(voyelle) {
      return voyelle.toUpperCase();
    });
  }

const chaineOriginale = 'Bonjour le monde';
const chaineModifiee = Maj(chaineOriginale);
console.log(chaineModifiee); // 'BOUnjOUr lE mOndE'