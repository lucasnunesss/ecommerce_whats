import { isArray } from "lodash";

const contagemItens = document.querySelector('.contagemItens');
const icons = document.querySelector('.icons');
let count = 0;


const teste = document.querySelector('.divCart');
const limpar = document.querySelector('.limpar');

let carts = [];
let listProducts = [];

function remover() {
  let btnCarrinho = document.querySelectorAll('.btnCarrinho');
  btnCarrinho.forEach((item) => {
    item.classList.remove('btnCarrinho');
  });
}

function apertarCar() {
  let btnCarrinho = document.querySelectorAll('.btnCarrinho');
  btnCarrinho.forEach((item) => {
    item.addEventListener('click', e => {
      count++;
      contagemItens.textContent = count;
      remover();
      carregarCount()
     

      let productId = item.parentElement.childNodes.item('title').id;

      if (productId === undefined) {
        addToCart(item.parentElement.childNodes[1].id);
      } else {
        addToCart(productId);
      }

      if (count > 30) {
        count = 0;
      }
    });
  });
}

const addToCart = (productId) => {
  let positionProductInCart = carts.findIndex((value) => value.productId === productId);
  if(carts.length <= 0){
    carts = [{
      productId: productId,
      quantidade: 1
    }]
  } else if (positionProductInCart < 0) {
    carts.push({
      productId: productId,
      quantidade: 1
    });
  } else {
    carts[positionProductInCart].quantidade++;
  }
  


  localStorage.setItem('cartItems', JSON.stringify(carts));
  addCardToHtml()
}

let item2;
  

function addCardToHtml() {
  const listProductHtml = document.querySelector('.listCart');
  listProductHtml.innerHTML = ''; // Limpar o conteúdo antes de renderizar os novos itens
  
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.forEach(cartItem => {
    const productId = cartItem.productId;
    const quantity = cartItem.quantidade;

    fetch(`../roses.json`)
      .then(response => response.json())
      .then(data => {
        const productData = data[parseInt(productId) - 1];
        const newCart = document.createElement('div');
        newCart.classList.add('itens');
        newCart.innerHTML = `
          <div class="image">
            <img src="${productData.img}" alt="">
          </div>
          <div class="name">${productData.h1}</div>
          <div class="totalPrice">${productData.preco}</div>
          <div class="quantidade">
            <span class="minus">-</span>
            <span>${quantity}</span>
            <span class="mais">+</span>
          </div>`;
        listProductHtml.appendChild(newCart);
      });
  });
}

function carregarCount() {
  localStorage.setItem('count', count);
  clean();
}

function loadCount() {
  clean();
  const loading = localStorage.getItem('count');
  if (loading !== null) {
    count = parseInt(loading);
    contagemItens.textContent = count;
  }

  // Carregar itens do carrinho do localStorage
  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    carts = JSON.parse(cartItems);
    addCardToHtml();

  }


}

function carregarItens() {
  icons.addEventListener('click', e => {
    teste.classList.toggle('dis');
    loadCount()
   
  });
}

function clean() {
  const listProductHtml = document.querySelector('.listCart');
  limpar.addEventListener('click', e => {
    count = 0;
    contagemItens.textContent = count;
    localStorage.setItem('count', count);

    carts = [];
    listProductHtml.innerHTML = ''
    localStorage.setItem('cartItems', JSON.stringify(carts = []));
   
  });
}

loadCount()

export {
  apertarCar,
  carregarItens
};
