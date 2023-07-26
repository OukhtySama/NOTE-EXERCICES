// Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console. 

let notes = [8, 5, 6, 8, 9]
moy = 0
total = 0

for (let index = 0; index < notes.length; index++) {
    total += notes[index]
    moy = total /notes.length
    
}
console.log(moy)