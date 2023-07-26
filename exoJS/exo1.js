//Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console. 

let monTableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]// création du tableau

for (let index = 0; index < monTableau.length; index++) {//parcour tous les élèments du tableau
    const element = monTableau[index];
    console.log(element)
    
}

const nombres = [1, 2, 3, 4]

nombres.forEach( (nombres) => console.log(nombres))