let containPanier = document.querySelector('.contenurdupanier')
// ont recupere tout le bouttons ajouter au panier
let ajoutPanier = document.querySelectorAll(".ajoutPanier");
// ont recuperer le chiffre du compte de contenue dans le panier
let nombrePieces = document.querySelector(".nombrePieces");
let commander = containPanier.parentNode.querySelector('&>button')
let containCommande = document.createElement('p')
containCommande.classList.add('text-warning','containCommande')
containCommande.style.width='200px'
commander.before(containCommande)

commander.addEventListener('click',()=>{
  if(containPanier.children.length===1){
   alert('le pannier est vide!!!')
  }else{
      let y= containPanier.querySelectorAll('p:not(:nth-child(1))')
      y.forEach(element=>{
         element.remove()
      })
      let totalprise = containPanier.querySelector('p:nth-child(1)').cloneNode(true).textContent
      console.log(totalprise);
   containCommande.innerHTML+=`<span>commande en cours ${totalprise} <i class="fa-regular fa-clock fa-spin" style="color: yellow;"></i></span> </br>`
   containPanier.querySelector('p:nth-child(1) span').textContent='0F'
   nombrePieces.textContent= compteur =0
}
})

//<i class="fa-regular fa-clock"></i>
let compteur = 0;

// COMPTEUR DU NOMBRE D4ATICLE DANS LE PANIER
// parcours de tout les bouttons ajouter au panier
ajoutPanier.forEach((Element) => {
   
   //ajout d'un ecouteur sur chaque boutton
   Element.addEventListener("click", () => {
      compteur++;
      nombrePieces.textContent = compteur;

      let nomOeuvres = Element.parentNode.parentNode.parentNode.children[1].textContent
     
      let  prixOeuvre =Element.parentNode.parentNode.parentNode.children[2].querySelector('span').textContent
      let prixOeuvrePretPourCalcul =Element.parentNode.parentNode.parentNode.children[2].querySelector('span').textContent.replaceAll(' ','').replace('F','')*1
      containPanier.innerHTML+= `<p class="commande text-center  text-white fw-bold" >${nomOeuvres}  &nbsp; prix:<span>${prixOeuvre}</span> &nbsp; <img class="imgRemovepanier" src="../img/imgRemovePanier/minimiser-le-signe.png" alt="image" width="33" ></p>`
     
      let total =  parseInt(containPanier.children[0].querySelector('span').textContent)+prixOeuvrePretPourCalcul
      containPanier.children[0].querySelector('span').textContent=`${total}F`

      let commandes = document.querySelectorAll('.contenurdupanier .commande')
      commandes.forEach(commande=>{
         commande.querySelector('img').addEventListener('click',()=>{
            compteur--;
            nombrePieces.textContent = compteur;
            let prixcal = commande.querySelector('span').textContent.replaceAll(' ','').replace('F','')*1
            let total =  parseInt(containPanier.children[0].querySelector('span').textContent)-prixcal
            containPanier.children[0].querySelector('span').textContent=`${total}F`
            commande.remove()
        })
      })
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
