
// ont recupere tout le bouttons ajouter au panier
let ajoutPanier = document.querySelectorAll(".ajoutPanier");
// ont recuperer le chiffre du compte de contenue dans le panier
let nombrePieces = document.querySelector(".nombrePieces");
let compteur = 0;

// COMPTEUR DU NOMBRE D4ATICLE DANS LE PANIER

// parcours de tout les bouttons ajouter au panier
ajoutPanier.forEach((Element) => {
   //ajout d'un ecouteur sur chaque boutton
   Element.addEventListener("click", () => {
      compteur++;
      nombrePieces.textContent = compteur;
   });
});

// recuperer tout les p qui contiennent les etoilles
let PEtoiles = document.querySelectorAll(".validation p:nth-child(1)");
// ont parcour le p
PEtoiles.forEach((PEtoiles) => {
   // ont recupere les etoilles
   let etoilles = [...PEtoiles.querySelectorAll(".etoile")];
   etoilles.forEach((etoille) => {
      // ont ajoute la classe couleur2 sur chaque etoile pour qu'il ait ue couleur noir
      etoille.classList.add('couleur2')
      //ajout d'un ecouteur sur chaque etoille
      etoille.addEventListener("click", () => {
        
         if (etoilles.indexOf(etoille) === 0) {
            if (
               getStyle(etoilles[1]) === true &&
               getStyle(etoilles[2]) === true &&
               getStyle(etoilles[3]) === true &&
               getStyle(etoilles[4]) === true
            ) {
               if(etoille.classList.contains('couleur2')){
                  etoille.classList.remove('couleur2')
               }else{
                  etoille.classList.add('couleur2')
               }
               etoille.classList.toggle("couleur");
            }
         }


         if (etoilles.indexOf(etoille) === 1) {
            if (
               getStyle(etoilles[0]) === false &&
               getStyle(etoilles[2]) === true &&
               getStyle(etoilles[3]) === true &&
               getStyle(etoilles[4]) === true
            ) {
            if(etoille.classList.contains('couleur2')){
               etoille.classList.remove('couleur2')
            }else{
               etoille.classList.add('couleur2')
            }
            etoille.classList.toggle("couleur");
            }
         }
         
         if (etoilles.indexOf(etoille) === 2) {
            if (
               getStyle(etoilles[0]) === false &&
               getStyle(etoilles[1]) === false &&
               getStyle(etoilles[3]) === true &&
               getStyle(etoilles[4]) === true
            ) {
               if(etoille.classList.contains('couleur2')){
                  etoille.classList.remove('couleur2')
               }else{
                  etoille.classList.add('couleur2')
               }
               etoille.classList.toggle("couleur");
            }
         }

         if (etoilles.indexOf(etoille) === 3) {
            if (
               getStyle(etoilles[0]) === false &&
               getStyle(etoilles[1]) === false &&
               getStyle(etoilles[2]) === false &&
               getStyle(etoilles[4]) === true
            ) {
               if(etoille.classList.contains('couleur2')){
                  etoille.classList.remove('couleur2')
               }else{
                  etoille.classList.add('couleur2')
               }
               etoille.classList.toggle("couleur");
            }
         }


         if (etoilles.indexOf(etoille) === 4) {
            if (
               getStyle(etoilles[0]) === false &&
               getStyle(etoilles[1]) === false &&
               getStyle(etoilles[2]) === false &&
               getStyle(etoilles[3]) === false
            ) {
               if(etoille.classList.contains('couleur2')){
                  etoille.classList.remove('couleur2')
               }else{
                  etoille.classList.add('couleur2')
               }
               etoille.classList.toggle("couleur");
            }
         }
      });
   });
});
// fonction qui determine si l'etoille a la couleur noir ou jaune
function getStyle(element) {
   if (element.classList.contains('couleur2')) {
      return true;
   } else {
      return false;
   }
}
