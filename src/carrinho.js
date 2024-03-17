const contagemItens = document.querySelector('.contagemItens')
const icons = document.querySelector('.icons')
let count = 0

function remover(){
  let btnCarrinho = document.querySelectorAll('.btnCarrinho')
btnCarrinho.forEach((item) => {
  item.classList.remove('btnCarrinho')
})
}


function apertarCar(){
let btnCarrinho = document.querySelectorAll('.btnCarrinho')
btnCarrinho.forEach((item) => {
  item.addEventListener('click', e => {
    count++
    contagemItens.textContent = count
    remover()
    carregarCount()
   
    if(count > 30){
      count = 0
    }
  })
})
}

function carregarCount(){
  localStorage.setItem('count', count)
}



function loadCount(){
  let loading = localStorage.getItem('count');
if (loading !== null) {
  count = parseInt(loading);
  contagemItens.textContent = count;
}
}
const teste = document.querySelector('.divCart')
teste.classList.add('dis')
function carregarItens(){

  icons.addEventListener('click', e => {
    //teste.classList.toggle('dis')
    //let newDiv = document.createElement('div')
    //newDiv.classList.add('itens')
  //teste.appendChild(newDiv)
  })
}


loadCount()
carregarItens()
export {apertarCar}