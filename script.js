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
        
        let titreGazette = gazette.titreGazette;
        console.log(titreGazette);
        let slogan = gazette.slogan;
        console.log(slogan);
        let invitationAbonnement = gazette.invitationAbonnement;
        console.log(invitationAbonnement);
        let illustration = gazette.illustration;
        console.log(illustration);

        let articlesSecondaires = gazette.articlesSecondaires
        
        articlesSecondaires.forEach(articlesSecondaire => {
          let element = `<section id="competences">
         <div class="competence">
             <img src="" alt="">
             <h3>WEB GARDEN</h3>
             <h1>The Best News for the Gnome in You!" 🌱✨</h1>
             <h3>THEME1</h3> 
             <p>HTML/CSS : Maîtrise des langages de base pour structurer et styliser des pages web, avec un bon niveau de responsive design pour s'adapter aux différents écrans.</p><img src="" alt="">
         </div>
         <div class="competence">
             <img src="" alt="">
             <h3>THEME2</h3>
             <p>HTML/CSS : Maîtrise des langages de base pour structurer et styliser des pages web, avec un bon niveau de responsive design pour s'adapter aux différents écrans.</p><img src="" alt="">
         </div>
         <div class="competence">
            <img src="" alt="">
            <h3>THEME3</h3>
            <p>HTML/CSS : Maîtrise des langages de base pour structurer et styliser des pages web, avec un bon niveau de responsive design pour s'adapter aux différents écrans.</p><img src="" alt="">
        </div> 

        <div class="competence">
         <img src="" alt="">
         <h3>THEME4</h3>
         <p>HTML/CSS : Maîtrise des langages de base pour structurer et styliser des pages web, avec un bon niveau de responsive design pour s'adapter aux différents écrans.</p><img src="" alt="">
     </div>
      </section>
      `;
      let message = salut;
      document.querySelectorAll(".thème").innerHTML = message;
      
        });
        
        
        
        

          // let titreGazette = articlesSecondaires.titreGazette
          // let slogan=articlesSecondaires.slogan
          // let 
          // let datePublication= articlesSecondaires.datePublication
          // let 
          // let titreArticle = articlesSecondaires.titreArticle
          // let categorie = articlesSecondaires.categorie
          // let illustration = articlesSecondaires.illustration
          // let recetteCard = `
          
          // <div class="recette-card">
          
          // <h2>${titreArticle}</h2>
          // <img src="${illustration}" alt="${titreArticle}">
          // <p>${}</p>
          // <ul id="ingredients">
          //     ${ingredientsList}
          // </ul>
          // <ol id="instructions">
          //     ${instructionsList}
          // </ol>
          // <p>${difficulte}</p>
          // </div>`;
      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici
function affichergazette(gazette) {
  articles.forEach(gazette => {
    let datePublication = gazettee.datePublication;
    console.log(datePublication);
  });
  
}