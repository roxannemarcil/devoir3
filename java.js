/**
 * Created by roxannemarcil on 15-03-09.
 */

//alert ("Bienvenue sur mon site !!");

//var ageUtilisateur = prompt("Quel âge as-tu?");

//if (ageUtilisateur > 0)
//{
//    console.log ("Vous avez"+" "+ ageUtilisateur +" " + "ans");
//}

//else {
//    console.log ("Tu n'as pas entré ton âge !!");
//}

// ÉTAPE 4 //

var chiffre = (prompt ("Entrer un chiffre entre 0 et 100"));

chiffre = parseInt(chiffre);

console.log (chiffre)

//if (isNaN(chiffre))
//{
//    alert ("Mauvaise entrée !!");
//}
//else {
//    alert ("Merci !!");
//}

// ÉTAPE 5 //

var bonneReponse = (11);
bonneReponse = parseInt(bonneReponse);

if (chiffre === bonneReponse) {
    alert ("Vous avez trouvez le nombre !! Bravo !");
}
else if (chiffre < bonneReponse) {
    alert ("Votre chiffre est trop petit !!");
    prompt("Réesayez !");
}
else if (chiffre > bonneReponse) {
    alert ("Votre chiffre est trop grand !!");
    prompt("Réesayez !");
}