//0. Analyser la demande, et penser au résultat final
// À quoi ça va ressembler à la fin ?

//1. Afficher dans la console la BDD (Base De Donnée)
// Ça sert à vérifier qu'elle fonctionne et aussi de voir la structure des éléments
// Je regarde les clés des objets du tableau afin de savoir comment ils sont construits


//2. On se concentre sur le premier élément de mon tableau BDD -> array[0] 
// On console log cet élément et on crée des variables pour chacune de ses clés
// On fait attention à bien choisir/sélectionner un objet et non le tableau 

//Pour stocker les clés d'un objet dans des variables let name = array[0].name 
// Pour être sûr du résultat des variables, on peut aussi les console loger

//3. On passe à l'HTML, l'objectif est de construire la structure des éléments qu'on cherche à afficher
// Si on n'a pas les informations pour remplir notre structure, on peut récupérer celles du console log des variables précédentes. On fait des copier coller de ces données dans le HTML
// Si on a déjà du CSS, c'est le moment d'ajouter les classes et les id

// On n'a pas besoin de faire toutes les structures, on le fait 1 fois bien et proprement !

//4. On copie notre structure HTML et on vient la coller et la stocker dans une variable
// let element = `<div> ... </div>`;  On utilise les ``afin de pouvoir mélanger les strings et les variables (${variable})

// On fait une interpolation , et on vient ajouter nos variables précédentes dans element 
// let element = `<div>${name}</div>`;

//5. On vient séléctionner un conteneur dans l'HTML (grâce à son ID, ou sa classe)
// let conteneur = document.getElementByID('id');
// On va injecter notre element dans le conteneur HTML
// conteneur.insertAdjacentHTML('position', element);

//6. On vient créer une fonction qui reprend tout ce que l'on a fait auparavant
// function nomDeLaFonction(param1, param2 ...){
   // Ici on recopie les variables précédentes, et on modifie si besoin les variables pour que ça fonctionne avec nos paramètres
//}

//7. Maintenant on va utiliser une boucle forEach pour venir appliquer cette fonction à tous les objets de ma BDD

//array.forEach(element => {
   //nomDeLaFonction(element, conteneur);
//});


//8. On enlève dans l'HTML la structure qui nous a servie à créer notre variable element.
// On lance le code et normalement c'est GOOD !