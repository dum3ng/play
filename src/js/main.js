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

const frame = document.getElementById('result')


const makeSrc = (withjs) => {
  const [html, css, js] = [htmlEditor, cssEditor, jsEditor].map(editor => editor.getSession().getDocument().getValue())
  const jsV = withjs ? js : ''
  const src = `<body><style>${css}</style>${html} <script>${jsV}</script></body>`
  return src
}

const refreshResult = (withjs) => {
  //frame.srcdoc = makeSrc(withjs)
  // just replace the body with the content of html editor
  // and replace
}

const getEditorValue = (editor) => {
  return editor.getSession().getDocument().getValue()
}

const htmlChangeHandler = () => {
  // replace the body
  const body = frame.contentDocument.body
  body.innerHTML = getEditorValue(htmlEditor)

}

const cssChangeHandler = () => {
  // replace the style tag content
  let style = frame.contentDocument.querySelector('#style')
  if (!style) {
    const ele = document.createElement('style')
    ele.id = 'style'
    frame.contentDocument.head.append(ele)
    style = ele
  }
  style.innerText = getEditorValue(cssEditor)
}

const jsChangeHandler = () => {
  let script = frame.contentDocument.querySelector('#script')
  if (!script) {
    const ele = document.createElement('script')
    ele.id = 'script'
    frame.contentDocument.documentElement.append(ele)
    script = ele
  }
  script.innerText = getEditorValue(jsEditor)
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
  // [htmlEditor, cssEditor].forEach((editor) => {
  //   editor.on('change', delay(() => refreshResult(false), 1000))
  // })
  htmlEditor.on('change', delay(() => htmlChangeHandler(), 1000))
  cssEditor.on('change', delay(() => cssChangeHandler(), 1000))

}

// for toolbar
const registerJs = () => {
  const runJs = document.getElementById('run-js')
  runJs.addEventListener('click', (e) => {
    //   refreshResult(true)
    jsChangeHandler()
  })
}

const init = () => {
  registerEvents()
  registerJs()
}

init()
