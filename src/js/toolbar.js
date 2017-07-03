// const toolbar = document.getElementById('toolbar')
const elements = require('./elements')

const changeLayout = () => {

}


/* toggle visibility of editors. */

const ts = ['html', 'css', 'js']

ts.forEach((e) => {
  const klass = `.toggle-${e}`
  const ele = document.querySelector(klass)
  let target = document.getElementById(e)

  target = target.parentElement

  ele.addEventListener('click', () => {
    ele.classList.toggle('mdl-button--colored')
    target.classList.toggle('hidden')
  })
})

/* change layout */
// layout0,
// |html |css | js | result|
const es = elements
es.layout0.addEventListener('change', () => {
  const { htmlWrapper, cssWrapper, jsWrapper } = es;

  [htmlWrapper, cssWrapper, jsWrapper].forEach((e) => {
    es.sectionA.append(e)
  })
  es.sectionB.append(es.resultWrapper)

  es.sectionA.classList.add('row-flex')
  es.sectionA.classList.remove('col-flex')
})

// layout1
// |html |
// |css  | result |
// |js   |
es.layout1.addEventListener('change', () => {
  const { htmlWrapper, cssWrapper, jsWrapper } = es;

  [htmlWrapper, cssWrapper, jsWrapper].forEach((e) => {
    es.sectionA.append(e)
  })
  es.sectionB.append(es.resultWrapper)
  es.sectionA.classList.remove('row-flex')
  es.sectionA.classList.add('col-flex')
})

// layout2

//   |        |html |
//   | result |css  |
//   |        |js   |
es.layout2.addEventListener('change', () => {
  const { htmlWrapper, cssWrapper, jsWrapper } = es;
  [htmlWrapper, cssWrapper, jsWrapper].forEach((e) => {
    es.sectionB.append(e)
  })
  es.sectionA.append(es.resultWrapper)
  es.sectionB.classList.remove('row-flex')
  es.sectionB.classList.add('col-flex')
})

// layout3
// |html ||  css    |
// |js   ||  result |
es.layout3.addEventListener('change', () => {
  const { htmlWrapper, cssWrapper, jsWrapper } = es;
  [htmlWrapper, jsWrapper].forEach((e) => {
    es.sectionA.append(e)
  })
  es.sectionB.append(cssWrapper)
  es.sectionB.append(es.resultWrapper);

  [es.sectionA, es.sectionB].forEach((s) => {
    s.classList.remove('row-flex')
    s.classList.add('col-flex')
  })

})

module.exports = {}
