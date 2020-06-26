const { override, fixBabelImports } = require('customize-cra')
const path = require('path')

const overrideProcessEnv = (value) => (config) => {
  config.resolve.modules = [path.join(__dirname, 'src')].concat(
    config.resolve.modules
  )
  return config
}

module.exports = override(
  overrideProcessEnv({
    VERSION: JSON.stringify(require('./package.json').version)
  })
)
