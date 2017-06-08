/* global ace */
const htmlEditor = ace.edit('html')
htmlEditor.setTheme('ace/theme/monokai')
htmlEditor.getSession().setMode('ace/mode/html')

const cssEditor = ace.edit('css')
cssEditor.setTheme('ace/theme/monokai')
cssEditor.getSession().setMode('ace/mode/css')

const jsEditor = ace.edit('js')
jsEditor.setTheme('ace/theme/monokai')
jsEditor.getSession().setMode('ace/mode/javascript')

// [htmlEditor,]

const result = document.getElementById('result')


const makeSrc = (withjs) => {
  const [html, css, js] = [htmlEditor, cssEditor, jsEditor].map(editor => editor.getSession().getDocument().getValue())
  const jsV = withjs ? js : ''
  const src = `<body><style>${css}</style>${html} <script>${jsV}</script></body>`
  return src
}

const refreshResult = (withjs) => {
  result.srcdoc = makeSrc(withjs)
}


const delay = (f, t) => {
  let timer
  function inner() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f()
      console.log(timer)
    }, t)
  }
  return inner
}

const registerEvents = () => {
  [htmlEditor, cssEditor].forEach((editor) => {
    editor.on('change', delay(() => refreshResult(false), 1000))
  })
}

// for toolbar
const registerJs = () => {
  const runJs = document.getElementById('run-js')
  runJs.addEventListener('click', (e) => {
    refreshResult(true)
  })
}

const init = () => {
  registerEvents()
  registerJs()
}

init()
