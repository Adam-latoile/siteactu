function getData() {
  fetch('data.json')
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then((data) => {
          // Traitez les données comme vous le souhaitez
          console.log('Données récupérées du fichier JSON :', data);

          /// ON ECRIT LE CODE ICI !
          let gazette = data.gazette;
          console.log(gazette);

          //////// ICI c'est les infos principales du site
          let titreGazette = gazette.titreGazette;
          // console.log(titreGazette);
          let slogan = gazette.slogan;
          // console.log(slogan);
          let invitationAbonnement = gazette.invitationAbonnement;
          // console.log(invitationAbonnement);

          //// Article vedette
          let articleVedette = gazette.articleVedette;
          let conteneurArticleVedette = document.getElementById('articleVedette');

          afficherArticleVedette(articleVedette, conteneurArticleVedette);

          //// Articles secondaires
          let images = document.getElementById('image');
          let articlesSecondaires = gazette.articlesSecondaires;
          let conteneurArticlesSecondaires = document.getElementById('articleSecondaire');

          afficherArticleSecondaire(articlesSecondaires, conteneurArticlesSecondaires);

          //// Catégories
          let categories = gazette.categories;
          let categoriesConteneur = document.getElementById('categoriesConteneur');
          affichercategories(categories, categoriesConteneur);
          
          //// Auteurs
          let auteurs = gazette.auteurs;
          let auteursConteneur = document.getElementById('auteursConteneur');
          afficherAuteurs(auteurs, auteursConteneur);

          /// FIN DU CODE
      })
      .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

/// ON écrit les fonctions ici

function afficherArticleVedette(article, conteneur) {
  // console.log(articleVedette);
  let titre = article.enTete;
  console.log(titre);
  let resume = article.resume;
  console.log(resume);
  let date = article.datePublication;
  console.log(date);
  let categorie = article.categorie;
  console.log(categorie);
  let image = article.illustration;
  console.log(image);

  let element = `
      
      
      <img src="${image}" alt="">
      <div>
      <h2>${titre}</h2>
      <h3>${categorie} - ${date}</h3>
      <p>${resume}</p>
      <a class="button primary" href="https://nain-de-jardin-deco.com/"target="_blank">voir plus</a>
      </div>
  `;
  // console.log(element);

  conteneur.insertAdjacentHTML('beforeend', element);
}

function afficherArticleSecondaire(articlesSecondaires, conteneur) {
  console.log(articlesSecondaires);

  articlesSecondaires.forEach(article => {
      let titre = article.titreArticle;
      console.log(titre);
      let date = article.datePublication;
      console.log(date);
      let categorie = article.categorie;
      console.log(categorie);
      let image = article.illustration;
      console.log(image);

      let element = `
          <div>
              <img src="${image}" alt="">
              <h2>${titre}</h2>
              <h3>${categorie} - ${date}</h3>
              <p></p>
              <a class="button primary" href="#">Lire L'article</a>
          </div>
      `;
      conteneur.insertAdjacentHTML('beforeend', element);
  });
}

function affichercategories(categories, conteneur) {
  console.log(categories);

  categories.forEach(article => {
      let nom = article.nomCategorie;
      console.log(nom);
      let description = article.descriptionCategorie;
      console.log(description);

      let element = `
          <div>
              <h3>${nom}</h3>
              <p>${description}</p>
          </div>
      `;
      conteneur.insertAdjacentHTML('beforeend', element);
  });
}

function afficherAuteurs(auteurs, conteneur) {
  console.log(auteurs);

  auteurs.forEach(auteur => {
     
      let image = auteur.illustration;
      console.log(image);
      let prenom = auteur.prenomAuteur;
      console.log(prenom);
      let expertise = auteur.expertise;
      console.log(expertise);
      let bio = auteur.bio;
      console.log(bio);

      let element = `
          <div>
              <img src="${image}" alt="">
              <h3>${prenom}</h3>
              <h4>${expertise}</h4>
              <p>${bio}</p>
          </div>
      `;
      conteneur.insertAdjacentHTML('beforeend', element);
  });
}

// Appel de la fonction principale
getData();
