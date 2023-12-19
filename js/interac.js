document.querySelector('head').innerHTML+=`<link rel="stylesheet" href="../../css/lib/animate.min.css">`



function etat1() {
   let e1 = document.getElementById("etoile1");
   let e2 = document.getElementById("etoile2");
   let e3 = document.getElementById("etoile3");
   let e4 = document.getElementById("etoile4");
   let e5 = document.getElementById("etoile5");

   if (
      e1.style.color !== "yellow" &&
      e2.style.color !== "yellow" &&
      e3.style.color !== "yellow" &&
      e4.style.color !== "yellow" &&
      e5.style.color !== "yellow"
   ) {
      e1.style.color = "yellow";
   } else if (
      e1.style.color === "yellow" &&
      e2.style.color === "black" &&
      e3.style.color === "black" &&
      e4.style.color === "black" &&
      e5.style.color === "black"
   ) {
      e1.style.color = "black";
   }
}
function etat2() {
   let e1 = document.getElementById("etoile1");
   let e2 = document.getElementById("etoile2");
   let e3 = document.getElementById("etoile3");
   let e4 = document.getElementById("etoile4");
   let e5 = document.getElementById("etoile5");

   if (
      e1.style.color === "yellow" &&
      e2.style.color !== "yellow" &&
      e3.style.color !== "yellow" &&
      e4.style.color !== "yellow" &&
      e5.style.color !== "yellow"
   ) {
      e2.style.color = "yellow";
   } else if (
      e1.style.color === "yellow" &&
      e2.style.color === "yellow" &&
      e3.style.color === "black" &&
      e4.style.color === "black" &&
      e5.style.color === "black"
   ) {
      e2.style.color = "black";
   }
}
function etat3() {
   let e1 = document.getElementById("etoile1");
   let e2 = document.getElementById("etoile2");
   let e3 = document.getElementById("etoile3");
   let e4 = document.getElementById("etoile4");
   let e5 = document.getElementById("etoile5");

   if (
      e1.style.color === "yellow" &&
      e2.style.color === "yellow" &&
      e3.style.color !== "yellow" &&
      e4.style.color !== "yellow" &&
      e5.style.color !== "yellow"
   ) {
      e3.style.color = "yellow";
   } else if (
      e1.style.color === "yellow" &&
      e2.style.color === "yellow" &&
      e3.style.color === "yellow" &&
      e4.style.color === "black" &&
      e5.style.color === "black"
   ) {
      e3.style.color = "black";
   }
}
function etat4() {
   let e1 = document.getElementById("etoile1");
   let e2 = document.getElementById("etoile2");
   let e3 = document.getElementById("etoile3");
   let e4 = document.getElementById("etoile4");
   let e5 = document.getElementById("etoile5");

   if (
      e1.style.color === "yellow" &&
      e2.style.color === "yellow" &&
      e3.style.color === "yellow" &&
      e4.style.color !== "yellow" &&
      e5.style.color !== "yellow"
   ) {
      e4.style.color = "yellow";
   } else if (
      e1.style.color === "yellow" &&
      e2.style.color === "yellow" &&
      e3.style.color === "yellow" &&
      e4.style.color === "yellow" &&
      e5.style.color === "black"
   ) {
      e4.style.color = "black";
   }
}
function etat5() {
   let e1 = document.getElementById("etoile1");
   let e2 = document.getElementById("etoile2");
   let e3 = document.getElementById("etoile3");
   let e4 = document.getElementById("etoile4");
   let e5 = document.getElementById("etoile5");

   if (
      e1.style.color === "yellow" &&
      e2.style.color === "yellow" &&
      e3.style.color === "yellow" &&
      e4.style.color === "yellow" &&
      e5.style.color !== "yellow"
   ) {
      e5.style.color = "yellow";
   } else if (
      e1.style.color === "yellow" &&
      e2.style.color === "yellow" &&
      e3.style.color === "yellow" &&
      e4.style.color === "yellow" &&
      e5.style.color === "yellow"
   ) {
      e5.style.color = "black";
   }
}

let ajoutPanier = document.querySelector(".ajoutPanier");
let validation = document.querySelector(".validation");
let nombrePieces = document.querySelector(".nombrePieces");
let compteur = 0;

ajoutPanier.addEventListener("click", () => {
   compteur++;
   nombrePieces.textContent = compteur;
   if (compteur === 5) {
      validation.innerHTML += `<p class="animate__animated animate__flash  text-danger display-6 erreurNmbreArti">vous ne pouvez pas acheter plus de 5 oeuvres d'art</p>`;
      //
      setTimeout(() => {
         compteur = 0;
         nombrePieces.textContent = compteur;
         location.reload()
      }, 2000);
   }
   

  
});

