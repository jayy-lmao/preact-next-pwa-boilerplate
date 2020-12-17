const withPreact = require('next-plugin-preact')
const withPWA = require('next-pwa')

module.exports = withPWA(withPreact({
  pwa: {
    dest: 'public'
  }
}))
