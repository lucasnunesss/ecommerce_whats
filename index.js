const carousel = document.querySelectorAll('.carrosel .product')
const leftBtn = document.querySelector('.left')
const rigthBtn = document.querySelector('.rigth')
let carousel2 = document.querySelector('.product')
let count = 0


const bc = [
  {
    img: './5.jpeg',
    h1: '1',
   
    preco: 27
  },
  {
    img: './5.jpeg',
    h1: '2',
    id: 2,
    preco: 29
  },
  {
    img: './5.jpeg',
    h1: '3',
    id: 3,
    preco: 27
  },
  {
    img: './5.jpeg',
    h1: '4',
    id: 3,
    preco: 27
  },
  {
    img: './5.jpeg',
    h1: '5',
    id: 3,
    preco: 27
  },
  {
    img: './5.jpeg',
    h1: '6',
    id: 3,
    preco: 27
  },
]
 
function left(){


    count++
  
  updateCarousel()
}

function renderProduct(product) {
  const productDiv = document.createElement('div');

  productDiv.innerHTML = `

    <div class="imagemProduct">
    
      <img src="${product.img}" alt="">
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

  count--;
  if (count < 0) {
    count = bc.length - 1;
  }
 updateCarousel()

}

function updateCarousel() {
  for (let i = 0; i < carousel.length; i++) {
    const newIndex = count + i;
    const product = bc[newIndex % bc.length]
    const item = carousel[i];
    item.innerHTML = '';
    if (product) {
      const productDiv = renderProduct(product);
      item.appendChild(productDiv);
    
  
    }
  }
}





leftBtn.addEventListener('click', left);
rigthBtn.addEventListener('click', rigth);

// Inicializa o carrossel
updateCarousel();




function mostrarNav(){
  const showNav = document.querySelector('#showSubProducts')
  const showDiv = document.querySelector('.hide')
  showNav.addEventListener('click', e => {
    showDiv.classList.toggle('hide')
    showDiv.classList.toggle('showNav')
  })
}
