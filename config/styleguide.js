/* eslint-disable */
const { createConfig, addPlugins, babel, match, css, sass } = require('webpack-blocks')
const { ProvidePlugin } = require('webpack')
const path = require('path')
const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin')
const {
  generateCSSReferences,
  generateJSReferences
} = MiniHtmlWebpackPlugin

module.exports = {
  theme: {
    fontFamily: {
      base: '"Segoe UI"',
      monospace: '"Liberation Mono"'
    }
  },
  template: ({ css, js, title, publicPath }) =>
    `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <title>${title}</title>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
              ${generateCSSReferences(css, publicPath)}
            </head>
            <body>
               <div id="rsg-root"></div>
              ${generateJSReferences(js, publicPath)}
            </body>
          </html>`,
  sections: [{
    name: 'Base Component', components: '../app/components/base/**/index.js',
  }, {
    name: 'Utility Components', components: '../app/components/utils/**/index.js',
  }],
  context: {
    mock: path.join(__dirname, '../__mock__/mock.js')
  },
  styleguideDir: '../styleguide',
  ignore: ['**/components/utils/FormInputs/index.js'],
  require: [
    path.join(__dirname, './styleguide.css'),
    path.join(__dirname, '../app/styles/app.scss')
  ],
  webpackConfig: createConfig([
    addPlugins([
      new ProvidePlugin({
        React: 'react',
        PropTypes: 'prop-types'
      })
    ]),
    babel(),
    match('*.scss', { exclude: path.resolve(__dirname, '../app/styles') }, [
      sass(),
      css.modules()
    ]),
    match('*.scss', { include: path.resolve(__dirname, '../app/styles') }, [
      sass()
    ]),
    match('*.css', { include: path.resolve(__dirname, '.') }, [
      css()
    ])
  ])
}
