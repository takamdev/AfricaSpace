let intputImg = document.getElementById('imgfile')
let inputImgPorfolio = document.getElementById('imgfil')
let imgArtiste2 = document.querySelector('.imgArtiste2 img')
let imgArtiste1 = document.querySelector('.imgArtiste1 img')

intputImg.addEventListener('input',()=>{
    imgArtiste1.setAttribute('src',URL.createObjectURL(intputImg.files[0]))
})
inputImgPorfolio.addEventListener('input',()=>{
    imgArtiste2.setAttribute('src',URL.createObjectURL(inputImgPorfolio.files[0]))
})
