// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const path = require('path')
const os = require('os')

require('./src/js/main')
require('./src/js/toolbar')
require('./src/js/resizable')

console.log(os.arch())
