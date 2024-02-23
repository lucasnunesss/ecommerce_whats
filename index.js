const carousel = document.querySelectorAll('.carrosel .product')
const leftBtn = document.querySelector('.left')
const rigthBtn = document.querySelector('.rigth')
let carousel2 = document.querySelector('.carrosel')
let count = 0


const bc = [
  {
    img: './flor2.jpeg',
    h1: 'Rosa',
   
    preco: 27
  },
  {
    img: './5.jpeg',
    h1: 'sei la',
    id: 2,
    preco: 29
  },
  {
    img: './flor2.jpeg',
    h1: 'Rosa',
    id: 3,
    preco: 27
  },
]
 
function left(){

  if (count === 0){
    count = carousel.length / 3 - 1
  } else {
    count--
  }
  mover()
}

function renderProduct(product) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  productDiv.innerHTML = `
    <div class="imagemProduct">
      <img src="${product.img}" alt="">
    </div>
    <div class="inf">
      <h3 class="title">${product.h1}</h3>
      <span class="price">${product.preco}</span>
      <button>Adicionar</button>
    </div>
  `;
  return productDiv;
}

function rigth(){

  count--;
  if (count < 0) {
    count = bc.length - 1;
  }
  mover()

  const productDiv = renderProduct(bc[0]);
  carousel2.appendChild(productDiv);
}

function mover(){
 
  carousel.forEach((item) => {
    item.style.transform = `translateX(${count * 103}px)`
  })
}

leftBtn.addEventListener('click', left)
rigthBtn.addEventListener('click', rigth)


 

function mostrarNav(){
  const showNav = document.querySelector('#showSubProducts')
  const showDiv = document.querySelector('.hide')
  showNav.addEventListener('click', e => {
    showDiv.classList.toggle('hide')
    showDiv.classList.toggle('showNav')
  })
}
