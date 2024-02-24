const carousel = document.querySelectorAll('.carrosel .product')

let carousel2 = document.querySelector('.product')
let count = 0
let count2 = 0




function left(){


  count++
  updateCarousel()
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

  count--;
  if (count < 0) {
    count = carousel.length - 1;
  }
 updateCarousel()

}


function left2(){


  count2++
  updateCarousel()
}


function rigth2(){

  count2--;
  if (count2 < 0) {
    count2 = carousel.length - 1;
  }
 updateCarousel()

}

async function updateCarousel() {
  const section = document.querySelector('section')
  console.log(section.id.includes('roses'))
  const itens = await fetch('./itens.json')
  const itens2 = await itens.json()
  console.log(itens2[0])
  for (let i = 0; i < carousel.length; i++) {
    const newIndex = count + i;
    const product = itens2[newIndex % itens2.length]
    const item = carousel[i];
    item.innerHTML = '';
    if (product) {
      const productDiv = renderProduct(product);
      item.appendChild(productDiv);
    
    
    }
  }
}


 
    const leftBtn = document.querySelector('.leftroses')
    const rigthBtn = document.querySelector('.rigthroses')
  
    leftBtn.addEventListener('click', e => {
    
      left()
    })
    rigthBtn.addEventListener('click', rigth)
  

const l = document.querySelector('.btncaneca')

const j = document.querySelector('.btn2caneca')

l.addEventListener('click', left2)
j.addEventListener('click', rigth2)
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
