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
  })
})
}


export {apertarCar, remover}