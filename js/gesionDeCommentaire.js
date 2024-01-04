let commentaire = document.querySelector('textarea')

let ok = document.querySelector('.ok')

ok.addEventListener('click',()=>{
    let div = document.createElement('div')
    div.classList.add('border','bg-body-secondary','p-2','mb-2')
    let p = document.createElement('p')
    let etoiles = document.querySelector('.validation p')
if(commentaire.value.toString().trim()!==""){
    let cloneP =etoiles.cloneNode(true)
    let etoileClone = cloneP.children
    for(let i =0; i<etoileClone.length; i++){
        etoileClone[i].classList.remove('etoile')
    }
    
    p.textContent=commentaire.value
    div.append(p,cloneP)
    ok.after(div)
   
   
}


})

