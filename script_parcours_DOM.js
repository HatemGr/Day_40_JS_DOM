console.log('Question 1 : Combien y a-t-il d\'éléments <p> présents dans la page HTML ? ');
nbr_p = document.getElementsByTagName('p');
console.log(nbr_p.length);

console.log('Question 2 : Quel est le contenu texte de l\'élément portant l\'id coucou ?');
content_id_coucou = document.getElementById('coucou');
console.log(content_id_coucou.innerHTML);

console.log('Question 3 : Quelle est l\'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?' );
third_a = document.getElementsByTagName('a')[2];
console.log(third_a.getAttribute('href'));

console.log('Question 4 : Combien d\'éléments portent la classe compte-moi ?' );
nbr_compte_moi = document.getElementsByClassName('compte-moi');
console.log(nbr_compte_moi.length)

console.log('Question 5 : Combien d\'éléments portent la classe compte-moi ?' );
nbr_compte_moi_li = document.querySelectorAll('li.compte-moi');
console.log(nbr_compte_moi_li.length);

console.log('Question 6 : Combien d\'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? ' );
nbr_compte_moi_ol_li = document.querySelectorAll('ol li.compte-moi');
console.log(nbr_compte_moi_ol_li.length);

console.log('Question 7 : L\'element caché est dans la div/seconde ul est :' );
elt_cache = document.querySelectorAll('div ul')[1].getElementsByTagName('li')[0].innerHTML
console.log(elt_cache)