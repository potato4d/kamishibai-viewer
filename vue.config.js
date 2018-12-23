const pkg = require('./package.json')
let baseUrl = '/'

if (process.env.BUILD_TYPE === 'lib') {
  baseUrl = `/kamishibai-viewer/dist/${pkg.version}/`
}

if (process.env.BUILD_TYPE === 'app') {
  baseUrl = `/kamishibai-viewer/`
}

if (process.env.VUE_TEST === '1') {
  baseUrl = baseUrl.replace('/kamishibai-viewer/', '/')
}

module.exports = {
  baseUrl
}
