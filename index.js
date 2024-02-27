const carousel = document.querySelectorAll('.carrosel .product')
const section = document.querySelectorAll('section')
const carousel3 = document.querySelector('#carr')
let carousel2 = document.querySelector('.product')
let count 

(function (){
count = 0
} ())





function renderProduct(product) {
  const productDiv = document.createElement('div');

  productDiv.innerHTML = `

    <div class="imagemProduct">
      <img src="${product.img}" alt="" class='edit'>
    </div>
    <div class="inf">
      <h3 class="title">${product.h1}</h3>
      <span class="price">R$${product.preco.toFixed(2).replace('.', ',')}</span>
      <button>+</button>
     
    </div>

  `;
  return productDiv;
}

function rigth(){

  count--;
  if (count < 0) {
    count = carousel.length;
  }

}


function left(){
  count++
}






async function updateCarousel(id = carousel, name) {
  try{
    let itens
    let itensIndividual
    if (name === 'cesta'){
    itens = await fetch('./cestas.json')
    itensIndividual = await itens.json()
  }

    if(name === 'rosas'){
    itens = await fetch('./itens.json')
    itensIndividual = await itens.json()
  }

  for (let i = 0; i < id.length; i++) {
    const newIndex = count + i;
    const product = itensIndividual[newIndex % itensIndividual.length]
    const item = id[i];
    item.innerHTML = '';
    if (product) {
      const productDiv = renderProduct(product);
      item.appendChild(productDiv);  
    }
  }
  } catch(error){
    console.log(error)
  }

}

function clickLeftButton(){
  const leftBtn = document.querySelectorAll('.left-roses')
  

  const roses = document.querySelectorAll('.carrosel-roses .product-roses')
  const cesta = document.querySelectorAll('.carrosel-cesta .product-cesta')

  leftBtn.forEach((item) => {
    item.addEventListener('click', e => {
      console.log(item.parentElement.id)
     if(item.id === 'cestaLeft'){
      console.log('oi')
      updateCarousel(cesta, 'cesta')
      left()
     } 

     if(item.id === 'rosesLeft'){
      updateCarousel(roses, 'rosas')
      left()
     }
    })
  })
}

function clickRigthButton(){
  const leftBtn = document.querySelectorAll('.rigth-roses')
  

  const roses = document.querySelectorAll('.carrosel-roses .product-roses')
  const cesta = document.querySelectorAll('.carrosel-cesta .product-cesta')

  leftBtn.forEach((item) => {
    item.addEventListener('click', e => {
      console.log(item.parentElement.id)
     if(item.id === 'cestaRigth'){
      console.log('oi')
      updateCarousel(cesta, 'cesta')
      rigth()
     } 

     if(item.id === 'rigthRoses'){
      updateCarousel(roses, 'rosas')
      rigth()
     }
    })
  })
}




function mostrarNav(){
  const showNav = document.querySelector('#showSubProducts')
  const showDiv = document.querySelector('.hide')
  showNav.addEventListener('click', e => {
    showDiv.classList.toggle('hide')
    showDiv.classList.toggle('showNav')
  })
}

clickLeftButton()
clickRigthButton()
updateCarousel(carousel)