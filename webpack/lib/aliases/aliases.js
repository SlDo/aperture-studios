const { getPath } = require('../patches/index');

const aliases = {
  '@lib': getPath('src/lib'),
  '@components': getPath('src/components'),
  '@assets': getPath('src/assets'),
}

module.exports = aliases
