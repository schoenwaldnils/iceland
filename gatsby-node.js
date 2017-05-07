const webpackPostcssTools = require('webpack-postcss-tools');
const customProperties = require('postcss-custom-properties');
const map = webpackPostcssTools.makeVarMap('./css/theme.css');

exports.modifyWebpackConfig = function(config, env) {
  config.merge({
    postcss () {
      return [
        require('postcss-cssnext')({
          browsers: 'last 2 versions',
          features: {
            import: {
              path: './css/theme.css',
              plugins: [
                customProperties({preserve: true}),
              ]
            },
            customProperties: {
              variables: map.vars,
            },
            customMedia: {
              extensions: map.media,
            },
          },
        }),
      ]
    },
  })

  config.loader('react-svg', {
    test: /\.svg$/,
    use: 'babel!react-svg?' + JSON.stringify({
      svgo: {
        plugins: [{removeTitle: false}],
        floatPrecision: 2
      }
    }),
  });

  return config
};
