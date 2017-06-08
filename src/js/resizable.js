/* make one element be resizable */
const es = require('./elements')

const makeResizable = (ele, parent) => {

}


const changeWidth = (target, delta) => {
  let w = window.getComputedStyle(target).width
  w = parseInt(w, 10)
  target.style.minWidth = `${w+delta}px`
  target.style.maxWidth = `${w+delta}px`
}

const handler = document.querySelector('.handler')
let x, y
const f =  (e) => {
    const d = e.clientX - x
    changeWidth(es.htmlWrapper, d)
    x = e.clientX

}
handler.addEventListener('mousedown', (e) => {
  x = e.clientX

  document.body.addEventListener('mousemove', f)

})

handler.addEventListener('mouseup', (e) => {
  document.body.removeEventListener('mousemove', f)
})

module.exports = {
  makeResizable,
}
