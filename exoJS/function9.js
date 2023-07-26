// - 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules. 


function Maj(chaine) {
    const voyelle = ['a', 'e', 'i', 'o', 'u', 'y'];
    
    return chaine.replace(/[aeiouy]/gi, function(voyelle) {
      return voyelle()
      let compter = 0
      if (nombre) {
        voyelle.toUpperCase = true
        compter += 1    
      }
    });
  }

const chaineOriginale = 'Bonjour le monde';
const chaineModifiee = Maj(chaineOriginale);
console.log(chaineModifiee); // 'BOUnjOUr lE mOndE'