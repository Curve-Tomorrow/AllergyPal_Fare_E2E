const webpackPreprocessor = require('@cypress/webpack-preprocessor');

/**
 * Used to setup TypeScript support in cypress
 */
const options = {
  webpackOptions: {
    mode: 'development',
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    node: {fs: 'empty', child_process: 'empty', readline: 'empty'},
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {transpileOnly: true},
        },
        {
          test: /\.feature$/,
          use: [
            {
              loader: 'cypress-cucumber-preprocessor/loader',
            },
          ],
        },
        {
          test: /\.features$/,
          use: [
            {
              loader: 'cypress-cucumber-preprocessor/lib/featuresLoader',
            },
          ],
        },
      ],
    },
  },
};

module.exports = webpackPreprocessor(options);
