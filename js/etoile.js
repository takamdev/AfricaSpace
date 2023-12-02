function etat1(){
                 
    let e1 = document.getElementById('etoile1') 
    let e2 = document.getElementById('etoile2') 
    let e3 = document.getElementById('etoile3') 
    let e4 = document.getElementById('etoile4') 
    let e5 = document.getElementById('etoile5') 

    if(e1.style.color!="yellow"&&e2.style.color!="yellow"&&e3.style.color!="yellow"&&e4.style.color!="yellow"&&e5.style.color!="yellow"){
      e1.style.color="yellow"
    } else if(e1.style.color=="yellow"&&e2.style.color=="black"&&e3.style.color=="black"&&e4.style.color=="black"&&e5.style.color=="black"){
      e1.style.color="black"
    }


  
  
   
   

   

    

   
   
  }
   function etat2(){
    let e1 = document.getElementById('etoile1') 
    let e2 = document.getElementById('etoile2') 
    let e3 = document.getElementById('etoile3') 
    let e4 = document.getElementById('etoile4') 
    let e5 = document.getElementById('etoile5') 

    if(e1.style.color=="yellow"&&e2.style.color!="yellow"&&e3.style.color!="yellow"&&e4.style.color!="yellow"&&e5.style.color!="yellow"){
      e2.style.color="yellow"
    }else if(e1.style.color=="yellow"&&e2.style.color=="yellow"&&e3.style.color=="black"&&e4.style.color=="black"&&e5.style.color=="black"){
      e2.style.color="black"
    }
   }
   function etat3(){
    let e1 = document.getElementById('etoile1') 
    let e2 = document.getElementById('etoile2') 
    let e3 = document.getElementById('etoile3') 
    let e4 = document.getElementById('etoile4') 
    let e5 = document.getElementById('etoile5') 

    if(e1.style.color=="yellow"&&e2.style.color=="yellow"&&e3.style.color!="yellow"&&e4.style.color!="yellow"&&e5.style.color!="yellow"){
      e3.style.color="yellow"
    }else if(e1.style.color=="yellow"&&e2.style.color=="yellow"&&e3.style.color=="yellow"&&e4.style.color=="black"&&e5.style.color=="black"){
      e3.style.color="black"
    }
   }
   function etat4(){
    let e1 = document.getElementById('etoile1') 
    let e2 = document.getElementById('etoile2') 
    let e3 = document.getElementById('etoile3') 
    let e4 = document.getElementById('etoile4') 
    let e5 = document.getElementById('etoile5') 

    if(e1.style.color=="yellow"&&e2.style.color=="yellow"&&e3.style.color=="yellow"&&e4.style.color!="yellow"&&e5.style.color!="yellow"){
      e4.style.color="yellow"
    }else if(e1.style.color=="yellow"&&e2.style.color=="yellow"&&e3.style.color=="yellow"&&e4.style.color=="yellow"&&e5.style.color=="black"){
      e4.style.color="black"
    }
   }
   function etat5(){
    let e1 = document.getElementById('etoile1') 
    let e2 = document.getElementById('etoile2') 
    let e3 = document.getElementById('etoile3') 
    let e4 = document.getElementById('etoile4') 
    let e5 = document.getElementById('etoile5') 

    if(e1.style.color=="yellow"&&e2.style.color=="yellow"&&e3.style.color=="yellow"&&e4.style.color=="yellow"&&e5.style.color!="yellow"){
      e5.style.color="yellow"
    }else if(e1.style.color=="yellow"&&e2.style.color=="yellow"&&e3.style.color=="yellow"&&e4.style.color=="yellow"&&e5.style.color=="yellow"){
      e5.style.color="black"
    }
   }
