/*
let defi = "Pratiquer les algorithmes en Javascript";

//Afficher "Pratiquer les algorithmes en Javascript" dans la console.
console.log(defi);

//Afficher "Pratiquer les algorithmes en Javascript" dans la console en Majuscule.
console.log(defi.toUpperCase());

//Afficher "Pratiquer les algorithmes en Javascript" dans la console en Minuscule.
console.log(defi.toLowerCase());

console.log(defi.substring(0, 9));
// expected output: "Pratiquer"



//functions
function MaFonction(){
    console.log('Ceci es ma fonction');
}

const MaFonctionDeux = () => {
    console.log('Ceci es ma fonction deux');
}

const MaFonctionTrois = (type) => {
    console.log('Ceci es ma ' + type);
}

MaFonction();
MaFonctionDeux();
MaFonctionTrois('fonction trois');
*/

//-----------------------------------------------------------//
//----------------- Tutoriels de JavaScript -----------------//
//-----------------------------------------------------------//

//Manipulation du DOM

//Quand BTN est appeller alors : #btn 
const btn = document.querySelector('#btn');

//Quand img es appeller alors : 'img'
const img = document.getElementById('img');

//Quand on 'click' sur BTN appel de l'évenement : 'show'v pour afficher l'image.
//img.classList.toggle (toggle) nous permet de remove l'image lors du deuxième click. (plus besoin de ADD / REMOVE).
btn.addEventListener('click', () => {
    img.classList.toggle('show')
})

// ********************************
//Déclaration pour les mouseEvent (Recherche d'un QuerySelection en fonction des classes que je veux appeller)
const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

//Quand la souris bouge dans le cadre, log de la position et affichage dans la console de (event(évenement basique de JS permettant un nombre inimaginable d'informations.))
mouseEvent.addEventListener("mousemove", (e) => {
    horizontal.innerHTML = e.x; //On va rechercher e.x et l'afficher directement dans la box.
    vertical.innerHTML = e.y; //On va rechercher e.y et l'afficher directement dans la box
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%"   //Permet de bouger la box dans l'espace vertical et concaténation avec le % pour pouvoir injecter la valeur dans le HTML en live.

    if (e.x > 500) { 
        document.body.style.filter = "blur(3px)"; //Quand X est supérieur à 500 px alors on applique un style de flou de 3px sur le body.
    } else {
        document.body.style.filter = "none"; // Sinon quand X n'est pas supérieur à 500px alors n'applique aucun style ce qui nous fait revenir a l'étât initial du body.
    }

})

// ********************************
/*
//On va rechercher l'ID 'input' et lancer directement l'évenement 'input' on lui ajout la fonction (e) et on console log le target value.
document.getElementById('input').addEventListener('input', (e) => {
    console.log(e.target.value);
})
*/

document.getElementById('input').addEventListener('input', (e) => {
    vertical.innerHTML = e.target.value;  // On va donner la valeur que l'ont injecte dans input à la class 'vertical'
})

// ********************************

const theme = document.querySelectorAll('.theme'); //on récupére toutes les class .theme

//On dit que pour chaque theme (foreach) on va lister l'evenement 'click' et qui va nous retourner l'id de la class.
theme.forEach((item) => { 
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "yellowTheme", "salmonTheme");
        switch (e.target.id) 
        {
            case "dark": // pour la case dark on va donc faire :
                document.body.classList.add("darkTheme");// on va ajouter la classList darkTheme qui ce trouve dans le Style.css
                break; 
            case "salmon"  :
                document.body.classList.add("salmonTheme");
                break;
            case "yellow"  :
                document.body.classList.add("yellowTheme");
                 break;
            default:
                null;
        }
    })
})
