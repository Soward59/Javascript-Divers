const quote = document.getElementById('quote');

/*

fetch('https://api.quotable.io/random') //On va chercher des données sur le lien de L'API du quote.
    .then((res) => res.json()) //Traite la réponse pour l'envoie de ceci ci en .json
    .then((data) => console.log(data)) //Log de la data
 /*  .then(data => {
        console.log(`${data.content} -${data.author}`)
    })
*/


const getQuote = () => {
    fetch('https://api.quotable.io/random') //On va chercher des données sur le lien de L'API du quote.
        .then((res) => res.json()) //Traite la réponse pour l'envoie de ceci ci en .json
        .then((data) => {
            // console.log(`${data.content} -${data.author}`); //On va chercher et afficher le contenue de la citation et rajoute -"nom de l'auteur"
            quote.innerHTML = data.content
    });

    fetch('https://picsum.photos/1600/1000') //On va chercher une photo aléatoire fournis par Picsum.
        .then((res) => {
            document.getElementById('pic').innerHTML = `<img src=${res.url} />` 
        })
};  

quote.addEventListener('click', () => getQuote());
getQuote();