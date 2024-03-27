import { isArray } from "lodash";
import { individualProduct } from "./individual";
const contagemItens = document.querySelector('.contagemItens');

let count = 0;
const quantidade = document.querySelector('.listCart');
const listProductHtml = document.querySelector('.listCart');
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
      console.log("id", productId)
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
  addCardToHtml();
}

let item2;


function addCardToHtml() {
  
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
          <div class="totalPrice">${productData.preco * quantity}</div>
          <div class="quantidade">
            <span id="${productData.id}" class="minus">-</span>
            <span >${quantity}</span>
            <span id="${productData.id}" class="mais">+</span>
      
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
  const icons = document.querySelector('.icons');
  icons.addEventListener('click', e => {
    teste.classList.toggle('dis');
    
    loadCount()
   
  });
}




function clean() {
  
  limpar.addEventListener('click', e => {
    count = 0;
    contagemItens.textContent = count;
    localStorage.setItem('count', count);
    
    carts = [];
    listProductHtml.innerHTML = ''
    
    localStorage.setItem('cartItems', JSON.stringify(carts = []));
    
  });
}

function aumentarDiminuir() {

  quantidade.addEventListener('click', e => {
    const positionClick = e.target;
    
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('mais')) {
      const productId = positionClick.id;
      const type = positionClick.classList.contains('mais') ? 'mais' : 'menos';
      
      mudarQuantidade(productId, type);
    }
  });
}

function mudarQuantidade(productId, type) {
  const positionItemInCart = carts.findIndex((value) => value.productId === productId);

  if (positionItemInCart >= 0) {
    switch (type) {
      case 'mais':
        aumentarQuantidade(positionItemInCart);
        break;
      case 'menos':
        diminuirQuantidade(positionItemInCart);
        break;
    }
  }
}

function aumentarQuantidade(positionItemInCart) {
  carts[positionItemInCart].quantidade++;
  atualizarCarrinho();
 

}

function diminuirQuantidade(positionItemInCart) {
  if (carts[positionItemInCart].quantidade > 1) {
    carts[positionItemInCart].quantidade--;
  } else {
    carts.splice(positionItemInCart, 1);
  }
  atualizarCarrinho();

}

function atualizarCarrinho() {
  localStorage.setItem('cartItems', JSON.stringify(carts));
  addCardToHtml();
}

loadCount()



export {
  apertarCar,
  carregarItens,
  aumentarDiminuir,
  loadCount
};
