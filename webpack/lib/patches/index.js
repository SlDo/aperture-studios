const { existsSync, realpathSync } = require('fs')
const { resolve } = require('path')

const fileExtensions = ['js', 'ts']

const getModule = (resolveFn, filePath) => {
  const extension = fileExtensions.find(ext => existsSync(resolveFn(`${filePath}.${ext}`))) || 'js'

  return resolveFn(`${filePath}.${extension}`)
}

const appDir = realpathSync(process.cwd())

const getPath = (resolvePath) => {
  return resolve(appDir, resolvePath)
}

module.exports = {
  patches: {
    appEntryPoint: getModule(getPath, './src/index'),
    appBuild: getPath('public'),
    appHtml: getPath('./src/index.html'),
  },
  extensions: fileExtensions,
  getPath
}
