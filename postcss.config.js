/* eslint-disable import/no-extraneous-dependencies, global-require */
const plugins = [require('autoprefixer')];
const uncss = require('postcss-remove-unused-css');

plugins.push(
  uncss({
    path: './src',
    exts: '.liquid, .md. html',
  }),
);

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  );
}

module.exports = { plugins };
