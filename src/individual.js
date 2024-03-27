import "../styles/style.css";
import { aumentarDiminuir, carregarItens, loadCount} from "./carrinho";


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id') ;
const imagem = document.createElement('img');
const singleProduct = document.querySelector('.singleProductDetails')

console.log(productId)
function individualProduct() {
 
  if (productId) {
    try { 
      let item
      let limit = 0
      const listProductHtml = document.querySelector('.listCart');  
   
      if(productId < 20){
       item = fetch(`../roses.json`)
        configQuantidade()
      }
      else if(productId > 20 && productId < 40){
        item = fetch(`../cestas.json`)
        console.log('oiiiiii')
        limit = 20
      } else if(productId > 40 && productId < 60){
        item = fetch(`../choco.json`)
        limit = 40
      } else if(productId > 60 ){
        item = fetch(`../pelucia.json`)
        limit = 60
      }
      if(item){
        item
        .then(response => response.json())
        .then(data => {
            const item = data[productId - limit - 1];
            if (item) {
              imagem.src = item.img;
              const section = document.querySelector('.singleProductImage');
              section.appendChild(imagem);
              console.log(imagem);
             
              singleProduct.innerHTML = `  <h6></h6>
              <h4 id=${item.id}>${item.h1}</h4>
              <h2>R$${item.preco.toFixed(2).replace('.', ',')}</h2>
              
              <input type="number" value="1">
              <button class="whats">Chamar no whatsapp</button>`
            } else {
              console.error(`Produto com ID ${productId} não encontrado.`);
            }
          })
          .catch(error => {
            console.error('Erro ao buscar dados:', error);
          });
      }
      } catch (error) {
        console.log(error);
      }
    }
  
}

function configQuantidade(){
 
    aumentarDiminuir();
    loadCount()
}



window.onload = () => {
  individualProduct();
  carregarItens()
  
};

export {individualProduct}



