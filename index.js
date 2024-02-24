const carousel = document.querySelectorAll('.carrosel .product')
const section = document.querySelectorAll('section')
const carousel3 = document.querySelector('#carr')
let carousel2 = document.querySelector('.product')
let count = 0
let count2 = 0

const roses2 = document.querySelectorAll('.carrosel-a .product-a')


function left(){

 
  
  const roses = document.querySelectorAll('.carousel roses')

  count++
  updateCarousel(roses)
}

function renderProduct(product) {
  const productDiv = document.createElement('div');

  productDiv.innerHTML = `

    <div class="imagemProduct">
      <img src="${product.img}" alt="" class='edit'>
    </div>
    <div class="inf">
      <h3 class="title">${product.h1}</h3>
      <span class="price">R$${product.preco}</span>
      <button>+</button>
     
    </div>

  `;
  return productDiv;
}

function rigth(){
  const roses = document.querySelectorAll('.id')
  count--;
  if (count < 0) {
    count = carousel.length - 1;
  }
 updateCarousel(roses)

}


function left2(){

  const roses2 = document.querySelectorAll('.carousel-a .product-a')
  count2++
  updateCarousel(roses2)
}


function rigth2(){


}



async function updateCarousel(id = carousel, name) {
  let itens
  let itens2
  if (name === 'caneca'){
    itens = await fetch('./canecas.json')
    itens2 = await itens.json()
  }

  if(name === 'rosas'){
    itens = await fetch('./itens.json')
    itens2 = await itens.json()
  }
 

  for (let i = 0; i < id.length; i++) {
    const newIndex = count + i;
    const product = itens2[newIndex % itens2.length]
    const item = id[i];
    item.innerHTML = '';
    if (product) {
      const productDiv = renderProduct(product);
      item.appendChild(productDiv);  
    }
  }
}


const leftBtn = document.querySelector('.left-roses')
const rigthBtn = document.querySelector('.rigth-roses')
  
leftBtn.addEventListener('click', e => {
  const roses = document.querySelectorAll('.carrosel-roses .product-roses')
  updateCarousel(roses, 'rosas')
  count++

})
rigthBtn.addEventListener('click', e => {
  const roses = document.querySelectorAll('.carrosel-roses .product-roses')
  updateCarousel(roses, 'rosas')
  count--
  if (count < 0) {
    count = carousel.length - 1;
  }
})
  


const leftBtna = document.querySelector('.left-caneca')
const rigthBtna = document.querySelector('.rigth-caneca')
leftBtna.addEventListener('click', e => {
  const roses2 = document.querySelectorAll('.carrosel-caneca .product-caneca')
  updateCarousel(roses2, 'caneca')
  count++

})
rigthBtna.addEventListener('click', e => {
  const roses2 = document.querySelectorAll('.carrosel-caneca .product-caneca')
  updateCarousel(roses2, 'caneca')
  count--;
  if (count < 0) {
    count = carousel.length - 1;
  }

})


updateCarousel(carousel)



function mostrarNav(){
  const showNav = document.querySelector('#showSubProducts')
  const showDiv = document.querySelector('.hide')
  showNav.addEventListener('click', e => {
    showDiv.classList.toggle('hide')
    showDiv.classList.toggle('showNav')
  })
}
