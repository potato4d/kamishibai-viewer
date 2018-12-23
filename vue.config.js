const pkg = require('./package.json')
let baseUrl = '/'

if (process.env.BUILD_TYPE === 'lib') {
  baseUrl = `/kamishibai-viewer/dist/${pkg.version}/`
}

if (process.env.BUILD_TYPE === 'app') {
  baseUrl = `/kamishibai-viewer/`
}

module.exports = {
  baseUrl
}
