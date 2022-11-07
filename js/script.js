/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
*/

const person1 = {
    'name': 'Wayne Barnett',
    'job': 'Founder & CEO',
    'img': 'wayne-barnett-founder-ceo.jpg'
};

const person2 = {
    'name': 'Angela Caroll',
    'job': 'Chief Editor',
    'img': 'angela-caroll-chief-editor.jpg'
};

const person3 = {
    'name': 'Walter Gordon',
    'job': 'Office Manager',
    'img': 'walter-gordon-office-manager.jpg',
};

const person4 = {
    'name': 'Angela Lopez',
    'job': 'Social Media Manager',
    'img': 'angela-lopez-social-media-manager.jpg'
};

const person5 = {
    'name': 'Scott Estrada',
    'job': 'Developer',
    'img': 'scott-estrada-developer.jpg',
};

const person6 = {
    'name': 'Barbara Ramos',
    'job': 'Graphic Designer',
    'img': 'barbara-ramos-graphic-designer.jpg'
};

const arrEmployes = [person1, person2, person3, person4, person5, person6];

// for (let key in person1) {
//     console.log(person1[key]);
// }

console.log(arrEmployes);