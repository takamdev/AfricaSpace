let search = document.querySelector("nav input");
let elements = document.querySelectorAll('main div ,main section ,main article,main h3')

console.log(elements);
let option = [...document.querySelectorAll("nav datalist option")];

let iconSearch = document.querySelector("nav .iconSeach");

iconSearch.addEventListener("click", () => {
  
   let currentSearch = search.value;
   if(currentSearch.toString().trim()!==''){
      if(!option.includes(currentSearch)){
         elements.forEach(r=>{
            r.remove()
           
         })
         document.querySelector('main').innerHTML+=` <p style ="margin-top:200px;" class="display-3 text-warning text-center">AUCUN ARTICLE TROUVER!!!</p>`
      setTimeout(()=>{
         window.location.reload()
      },2000)
      }
      if(window.location.pathname==="/pages/oeuvre.html"){
         search.style.border="2px solid black"
      switch (currentSearch) {
         case option[0].value:
            iconSearch.setAttribute("href", "pageIndividuelle/bouclier.html");
   
            break;
         case option[1].value:
            iconSearch.setAttribute("href", "pageIndividuelle/baouleLunaire.html");
   
            break;
   
         case option[2].value:
            iconSearch.setAttribute("href", "pageIndividuelle/socle.html");
   
            break;
   
         case option[3].value:
            iconSearch.setAttribute("href", "pageIndividuelle/chevalBronse.html");
   
            break;
   
         case option[4].value:
            iconSearch.setAttribute("href", "pageIndividuelle/sculChevalB.html");
   
            break;
   
         case option[5].value:
            iconSearch.setAttribute("href", "pageIndividuelle/elephB.html");
   
            break;
   
         case option[6].value:
            iconSearch.setAttribute("href", "pageIndividuelle/elephA.html");
   
            break;
   
         case option[7].value:
            iconSearch.setAttribute("href", "pageIndividuelle/autruche.html");
   
            break;
   
         case option[8].value:
            iconSearch.setAttribute("href", "pageIndividuelle/Tabouret-Baga.html");
   
            break;
   
         case option[9].value:
            iconSearch.setAttribute("href", "pageIndividuelle/tabouret1.html");
   
            break;
   
         case option[10].value:
            iconSearch.setAttribute("href", "pageIndividuelle/tabouret2.html");
   
            break;
   
         case option[11].value:
            iconSearch.setAttribute("href", "pageIndividuelle/tabouret3.html");
   
            break;
   
         case option[12].value:
            iconSearch.setAttribute("href", "pageIndividuelle/tabouret4.html");
   
            break;
         case option[13].value:
            iconSearch.setAttribute("href","pageIndividuelle/AmourDeLaLecture.html");
   
            break;
   
         case option[14].value:
            iconSearch.setAttribute("href","pageIndividuelle/AmourMereEnfant.html");
   
            break;
   
         case option[15].value:
            iconSearch.setAttribute("href","pageIndividuelle/HarmonieFamille.html");
   
            break;
   
         case option[16].value:
            iconSearch.setAttribute("href","pageIndividuelle/JoueurDeBalafon.html");
   
            break;
   
         case option[17].value:
            iconSearch.setAttribute("href", "pageIndividuelle/LaMenagere.html");
   
            break;
      }
   }else{
      search.style.border="2px solid black"
       switch (currentSearch) {
           case option[0].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/bouclier.html");
     
              break;
           case option[1].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/baouleLunaire.html");
     
              break;
     
           case option[2].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/socle.html");
     
              break;
     
           case option[3].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/chevalBronse.html");
     
              break;
     
           case option[4].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/sculChevalB.html");
     
              break;
     
           case option[5].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/elephB.html");
     
              break;
     
           case option[6].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/elephA.html");
     
              break;
     
           case option[7].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/autruche.html");
     
              break;
     
           case option[8].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/Tabouret-Baga.html");
     
              break;
     
           case option[9].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/tabouret1.html");
     
              break;
     
           case option[10].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/tabouret2.html");
     
              break;
     
           case option[11].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/tabouret3.html");
     
              break;
     
           case option[12].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/tabouret4.html");
     
              break;
           case option[13].value:
              iconSearch.setAttribute("href","pages/pageIndividuelle/AmourDeLaLecture.html");
     
              break;
     
           case option[14].value:
              iconSearch.setAttribute("href","pages/pageIndividuelle/AmourMereEnfant.html");
     
              break;
     
           case option[15].value:
              iconSearch.setAttribute("href","pages/pageIndividuelle/HarmonieFamille.html");
     
              break;
     
           case option[16].value:
              iconSearch.setAttribute("href","pages/pageIndividuelle/JoueurDeBalafon.html");
     
              break;
     
           case option[17].value:
              iconSearch.setAttribute("href", "pages/pageIndividuelle/LaMenagere.html");
     
              break;
        }
   }
   }else{
      let p = document.createElement('p')
      p.classList.add('fw-bolder','position-absolute','animate__animated','animate__shakeX','erreurSearch')
      p.style.left='50%'
      p.style.top='0'
      p.textContent='renseignez ce champ'
      search.before(p)
      search.style.border='2px solid red'
      setTimeout(()=>{
         search.style.border='1px solid black'
         search.previousElementSibling.remove()
      },2000)
   }
});
