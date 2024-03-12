import "../styles/style.css";


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
      if(productId < 20){
       item = fetch(`../roses.json`)
      }
      else if(productId > 20 && productId < 40){
        item = fetch(`../cestas.json`)
        console.log('oiiiiii')
        limit = 20
      } else if(productId > 40){
        item = fetch(`../choco.json`)
        limit = 40
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
              <h4>${item.h1}</h4>
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
     

window.onload = () => {
  individualProduct();
};


export {individualProduct}



