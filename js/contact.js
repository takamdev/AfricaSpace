let inputs = document.querySelectorAll(".container input , .container textarea");
let form = document.querySelector(".container");
let btsubmit = document.querySelector('.container button')


btsubmit.addEventListener('click',()=>{
     let i0 =inputs[0].value.replaceAll(" ","")
     let i1 =inputs[1].value.replaceAll(" ","")
     let i2 =inputs[2].value.replaceAll(" ","")
     let i3 =inputs[3].value.replaceAll(" ","")
   
     if(!(i0===""&&i1===""&&i2===""&&i3==="")){
      
          if(!inputs[1].value.includes('@')){
            inputs[1].style.marginTop="-15px"
            let p = document.createElement('p')
            p.classList.add('fw-bolder','animate__animated','animate__flash' ,'text-warning')
            p.textContent='il manque "@"'
            p.style.marginBottom='0'
            p.style.marginTop='-20px'
            inputs[1].before(p.cloneNode(true))
            inputs[1].style.border='2px solid red'

            setTimeout(()=>{
                inputs[1].previousElementSibling.remove()
                inputs[1].style.border='1px solid black'
                inputs[1].style.marginTop="0"
            },2000)
          }else{
            btsubmit.setAttribute('type','submit')
          }

        
       }

        
       inputs.forEach(element => {
       

        let p = document.createElement('p')
        p.classList.add('fw-bolder','animate__animated','animate__shakeX' ,'text-warning')
        p.textContent='renseignez ce champ'
        p.style.marginBottom='0'
        p.style.marginTop='-25px'
        if(element.value.replaceAll(' ','')===""){
            element.style.marginTop="-15px"


            element.before(p.cloneNode(true))
            element.style.border='2px solid red'

            setTimeout(()=>{
                element.previousElementSibling.remove()
                element.style.border='1px solid black'
                element.style.marginTop="0"
            },2000)
        }
       
       
    });

})


