// je crée une variable "container" ou je récupere ma div avec la class ".container" !
let container = document.querySelector('.container')
// je crée une variable "colors" dans un tableau ou je stock mes couleurs !
let colors = ['red', 'blue', 'orange', 'green', 'purple']
// Je crée une boucle "for" qui crée mes 600 "div" ! 
for (let i = 0; i < 600; i++) { 
    let carre = document.createElement('div'); // je crée un element "div" !
    carre.classList.add('styleCarre'); // Je lui rajoute la class "styleCarre" !
     
    let randomIndex = Math.floor(Math.random() * colors.length); // Je crée une variable "RandomIndex" qui me renvoi un index aléatoir du tableau !
    let randomColor = colors[randomIndex]; // Je crée un variable "randomColor" quime renvoie une couleur du tableau

    carre.addEventListener('mouseover', () => {
        carre.style.backgroundColor = randomColor;
    })

    carre.addEventListener('mouseout', () => {
        carre.style.backgroundColor = "darkgray";
    });

    // Je place le carre dans mon "container"
    container.appendChild(carre);
}