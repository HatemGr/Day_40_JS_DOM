// Modification n°1

function changeTitles() {
  elt1 = document.querySelector('main h1')
  elt1.innerHTML = "Ce que j'ai appris à THP"
  elt2 = document.querySelector('main p')
  elt2.innerHTML ="THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n\'auront plus de secret pour vous !"

};

changeTitles();

// Modification n°2

function changeCallToActions() {
  elt = document.querySelector('main div a')
  elt.innerHTML = "OK je veux tester !"
  elt.setAttribute('href',"http://www.thehackingproject.org")
  elt_second = elt.nextElementSibling
  elt_second.innerHTML = "Non Merci"
  elt_second.setAttribute('href',"https://www.pole-emploi.fr/accueil/")
}

changeCallToActions();

// Modification n°3

function changeLogoName() {
  elt = document.querySelector('header strong')
  elt.innerHTML = "The THP Experience"
  elt.style.fontSize = "2em"
}

changeLogoName();

// Modification n°4

function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://pbs.twimg.com/media/CZGHPChUAAA3jqE?format=png&name=medium", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  image = document.querySelectorAll('div.album div.card img')
  image.forEach((element,index) => element.setAttribute('src',imagesArray[index]))
}

populateImages();

// Modification n°5

function deleteLastCards(nbr_card_to_remove) {
  for(let i = 1; i <= nbr_card_to_remove; i ++) {
    elt = document.querySelectorAll('div.album div.row')[0].getElementsByClassName('col-md-4')
    elt[elt.length-1].remove();
  }
}

deleteLastCards(3);

// Modification n°6

function changeCardsText() {
  texts_array = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
  "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
  "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
  elt = document.querySelectorAll('div.album div.row .col-md-4')
  for(let i = 0; i <= 2; i ++) {
    elt[i].querySelector('div.card-body p').textContent = texts_array[i]
  }
}

changeCardsText();

// Modification n°7

function changeViewButtons() {
  let elt = document.querySelectorAll('div.album div.row .col-md-4 div.btn-group')
  elt.forEach(buttons => buttons.firstElementChild.classList.remove("btn-outline-secondary"))
  elt.forEach(buttons => buttons.firstElementChild.classList.add("btn-success"))

}

changeViewButtons();

// Modification n°8

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function addMyRowDiv() {
  let myDiv = document.createElement('div')
  myDiv.classList.add('row');
  insertAfter(myDiv,document.querySelector('div.album div.row'))
  thirdCard = document.querySelectorAll('div.album div.row .col-md-4')[2]
  thirdCard.remove()
  myDiv.appendChild(thirdCard)
}

addMyRowDiv();


