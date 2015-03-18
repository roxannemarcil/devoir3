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

//var chiffre = (prompt ("Entrer un chiffre entre 0 et 100"));

//chiffre = parseInt(chiffre);

//console.log (chiffre)

//if (isNaN(chiffre))
//{
//    alert ("Mauvaise entrée !!");
//}
//else {
//    alert ("Merci !!");
//}

// ÉTAPE 5 //

//var bonneReponse = (11);
//bonneReponse = parseInt(bonneReponse);

//if (chiffre === bonneReponse) {
//    alert ("Vous avez trouvez le nombre !! Bravo !");
//}
//else if (chiffre < bonneReponse) {
//    alert ("Votre chiffre est trop petit !!");
//    prompt("Réesayez !");
//}
//else if (chiffre > bonneReponse) {
//    alert ("Votre chiffre est trop grand !!");
//    prompt("Réesayez !");
//}

// ÉTAPE 6 //

//var chiffre = (prompt ("Entrer un chiffre entre 0 et 100"));

//chiffre = parseInt(chiffre);

//var bonneReponse = (11);
//bonneReponse = parseInt(bonneReponse);

//for (tentative=1; tentative < 5; tentative++ ) {
// if (chiffre === bonneReponse) {
//     alert("Vous avez trouvez le nombre !! Bravo !");
//    }
//   else if (chiffre < bonneReponse) {
//       alert("Votre chiffre est trop petit !!");
//       prompt("Entrer un chiffre entre 0 et 100");
//   }
//        else if (chiffre > bonneReponse) {
//        alert("Votre chiffre est trop grand !!");
//        prompt("Entrer un chiffre entre 0 et 100");
//    }
//};

// DEVOIR LISTE D'ÉPICERIE //
//var listeEpicerie = [];

//while (true) {
//    var item = (prompt("Écrivez votre item d'épicerie lorsque vous avez terminé inscrivez 'FINI'"));

//    if (item.length == 0) {
//        alert("Vous n'avez rien entré !");
//    }

//    else if (item == "FINI") {
//       alert ("Voici votre liste d'épicerie");
//        for (var itemEpicerie=0 ; itemEpicerie < listeEpicerie.length ; itemEpicerie ++) {
//            alert ( "Item #" + (itemEpicerie+1) + listeEpicerie[itemEpicerie]);
//        }
//        break;
//    }
//    else {
//        listeEpicerie.push (item);
//        alert ("La liste contient" + listeEpicerie.length + "items" );
//    }
//}

// Devoir JS Loterie 6/49 //

function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//1. Demandez à l'utilisateur d'entrer 6 nombres différents entre 1 et 49 inclusivement. Indice: vous devrez mettre ces nombres dans une liste, puis utiliser la fonction indexOf (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf) pour trouver si l'utlisateur a déjà entré le même nombre.

//2. Une fois que l'utlisateur a entré 6 nombres différents, utilisez la fonction nombreAleatoire pour générer 6 nombres aléatoires différents entre 1 et 49. Indice: vous devez aussi utiliser indexOf et une boucle (ici je pense que while est plus approprié).

//3. Faites un alert avec les nombres gagnants. Pour afficher tous les nombres du array dans un même alert, vous aurez besoin de la fonction join (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join)

//4. Si l'utlisateur a 6 nombres gagnants, faites un alert avec JACKPOT!!
//5. Si l'utlisateur a entre 3 et 5 nombres gagnants, affichez-lui qu'il gagne un prix.
//6. Si l'utilisateur a 1 ou 2 nombres gagnants, affichez-lui qu'il gagne PRESQUE un prix
//7. Si l'utilisateur n'a aucun nombre gagnant, affichez-lui qu'il est très malchanceux.


