const contagemItens = document.querySelector('.contagemItens')

let count = 0
function apertarCar(){
let btnCarrinho = document.querySelectorAll('.btnCarrinho')
btnCarrinho.forEach((item) => {
  item.addEventListener('click', e => {
    count++
    contagemItens.textContent = count
  })
})
}


export {apertarCar}