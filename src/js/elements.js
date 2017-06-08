const $ = id => document.getElementById(id)

const [html, css, js] = ['html', 'css', 'js']
      .map($)

const [layout0, layout1, layout2, layout3] = ['0', '1', '2', '3']
      .map(id => $(`layout${id}`))

const [htmlWrapper, cssWrapper, jsWrapper, resultWrapper] =
      ['html', 'css', 'js', 'result'].map(
        i => $(i).parentElement)

const [sectionA, sectionB] = ['section-a', 'section-b']
      .map($)

module.exports = {
  html,
  css,
  js,
  layout0,
  layout1,
  layout2,
  layout3,
  htmlWrapper,
  cssWrapper,
  jsWrapper,
  resultWrapper,
  sectionA,
  sectionB,
}
