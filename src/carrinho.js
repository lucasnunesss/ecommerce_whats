const contagemItens = document.querySelector('.contagemItens')

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

loadCount()

export {apertarCar}