const carousel = document.querySelector('.carousel')

let descer = false

const start = () => {
  descer = true
}

const mover = (e) => {
  if(!descer) return
  carousel.scrollLeft = e.pageX

}

carousel.addEventListener('mousedown', start)
carousel.addEventListener('mousemove', mover)

const bc = [
  {
    img: './flor2.jpeg',
    h1: 'Rosa',
   
    preco: 27
  },
  {
    img: './5.jpeg',
    h1: 'sei la',
    id: 2,
    preco: 29
  },
  {
    img: './flor2.jpeg',
    h1: 'Rosa',
    id: 3,
    preco: 27
  },
]
 

function mostrarNav(){
  const showNav = document.querySelector('#showSubProducts')
  const showDiv = document.querySelector('.hide')
  showNav.addEventListener('click', e => {
    showDiv.classList.toggle('hide')
    showDiv.classList.toggle('showNav')
  })
}
