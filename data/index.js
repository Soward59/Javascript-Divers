/*
const array =  [] // Tableau 
const string = 'je suis un string' // Texter
const number = 48 // Nombre
const boolean = true // Vrai ou Faux (Bool)
*/
/*

const array = ['Paris', 'Lyon', 'Montreal', 'Bordeaux'] // On créer un teableau abritant 4 données ( 4 villes )
console.log(array[2][4]); //On va rechercher la 3éme données et la 5 eme lettre de la données 3.

*/

const array = ['Paris', 'Lyon', 'Montreal', 'Bordeaux'] // On créer un teableau abritant 4 données ( 4 villes )

const array1 = ['Paris', 33, ['Montreal', 'Bordeaux'], true]

//Création d'une énumération du tableau grâce à une boucle for.
for ( i = 0; i < array.length; i++) {
    //console.log(array[i]); //affiche le tableau array
}

//Création d'une énumération du tableau grâce à une boucle for.
for ( i = 0; i < array1.length; i++) {
    //console.log(array1[i]); //affiche le tableau array1 qui lui aussi contient un array avec montreal et bordeaux
}

//Création d'une énumération du tableau grâce à une boucle for.
for ( i = 0; i < array1.length; i++) {
    console.log(typeof array1[i]); //on va recherche directement une type de données spécifique dans le tableau.
}

array.sort(); //Permet de ranger dans l'ordre le talbeau (array)
//console.log(array);

const numbers = [21, 45, 1, 22, 44] //On créer un tableau contenant des nombres.
console.log(numbers.sort()); //On va lui demander de logger 'numbers' en le mettant dans l'ordre croissant.

//*********************** 

const input = document.getElementById('input');
const video = document.getElementById('video');
let link = "";

input.addEventListener('input', (e) => 
{
    changeLink(e.target.value);

    if(link) //si il n'y a rien dans input ne pas afficher le code.
    {
        video.innerHTML = `<iframe width="600" height="400" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
});

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=', "embed/") //permet de changer le embed en watch?v=
    link = embed.split('&')[0]; //on va tronqué tout ce qui as après & (&t=500s) et on demande à garder que le tableau 0 qui correspond au lien de la vidéo initial0.
    console.log(link);
}

//https://www.youtube.com/embed/QB1DTl7HFnc
//https://www.youtube.com/watch?v=QB1DTl7HFnc