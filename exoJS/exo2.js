// Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console. 

let monTableau = ['Lundi', 'Mardi', 'Mecredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']// création du tableau

for (let index = 0; index < monTableau.length; index++) {// passe tout les jours de la semaine
    const element = monTableau[index];
    if (element) {//si on passe sur le premier élèment du tableau alors il l'affiche
        monTableau[0]
        console.log(element)
        return 0    
    }
}