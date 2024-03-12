import _ from 'lodash';
import "../styles/style.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { individualProduct } from './individual.js';
import { apertarCar } from './carrinho.js';
const carousel = document.querySelectorAll('.carrosel .product')
const section = document.querySelectorAll('section')
const carousel3 = document.querySelector('#carr')
const carousel2 = document.querySelector('.carrosel')

let count 




(function (){
count = 0
} ())


function loadTitle(){
  const title = document.querySelectorAll('.title')
title.forEach(title => {
  title.addEventListener('click', (e) => {
    const productIdURL = title.id;
    individualProduct();
    window.location.href = `individual.html?id=${productIdURL}`;
  });
});
}





function renderProduct(product) {
  const productDiv = document.createElement('div');
  console.log(product.id)
 
  productDiv.innerHTML = `

    <div class="imagemProduct">
      <img src="${product.img}" alt="" class='edit'>
    </div>
    <div class="inf"">
      <h3 class="title" id="${product.id}">${product.h1}</h3>
      <span class="price">R$${product.preco.toFixed(2).replace('.', ',')}</span>
      <button class="btnCarrinho">+</button>
    </div>
  `;

  return productDiv;
}

function rigth(){
  count--;
  if (count < 0) {
    count = 18;
  }
 
}


function left(){
  count++
  if (count > 18){
    count = 0
  }

}






async function updateCarousel(id = carousel, name) {
 
  try{
    let itens
    let itensIndividual
    if (name === 'cesta'){
    itens = await fetch('../cestas.json')
    itensIndividual = await itens.json()
    
  }

    if(name === 'rosas'){
    itens = await fetch('../roses.json')
    itensIndividual = await itens.json() 
    
  }

    if(name === 'choco'){
      itens = await fetch('../choco.json')
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
  apertarCar()
  loadTitle()
}


function clickLeftButton(){
  const leftBtn = document.querySelectorAll('.left-roses')


  const roses = document.querySelectorAll('.carrosel-roses .product-roses')
  const cesta = document.querySelectorAll('.carrosel-cesta .product-cesta')
  const choco = document.querySelectorAll('.carrosel-choco .product-choco')

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

     if(item.id === 'chocoLeft'){
      updateCarousel(choco, 'choco')
      left()
     }
    })
  })
}

function clickRigthButton(){
  const rightBtn = document.querySelectorAll('.rigth-roses')
  
 
  const roses = document.querySelectorAll('.carrosel-roses .product-roses')
  const cesta = document.querySelectorAll('.carrosel-cesta .product-cesta')
  const choco = document.querySelectorAll('.carrosel-choco .product-choco')

  rightBtn.forEach((item) => {
    item.addEventListener('click', e => {
      console.log(item.parentElement.id)
     if(item.id === 'cestaRigth'){
      updateCarousel(cesta, 'cesta')
      rigth()
   
     } 

     if(item.id === 'rigthRoses'){
      updateCarousel(roses, 'rosas')
      rigth()
    
     }

     if(item.id === 'chocoRigth'){
      updateCarousel(choco, 'choco')
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

clickRigthButton()
clickLeftButton()
updateCarousel(carousel)
loadTitle()




