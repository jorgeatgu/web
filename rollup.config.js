// ------ JavaScript
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

// ------ postCSS
import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import selector from 'postcss-custom-selectors';
import customProperties from 'postcss-custom-properties';
import sorting from 'postcss-sorting';
import nested from 'postcss-nested';
import stylelint from 'rollup-plugin-stylelint';

// ------ global
import resolve from '@rollup/plugin-node-resolve';
import browsersync from 'rollup-plugin-browsersync';

const paths = {
  js: 'src/js',
  css: 'src/css',
  images: 'src/img/*',
  distCss: 'css/',
  distJs: 'js/',
  distImages: 'img/'
};

const plugins = [
  eslint({
    exclude: [
      paths.css + '/**'
    ]
  }),
  babel({
    exclude: 'node_modules/**',
    include: paths.js + '/**',
    presets: ['@babel/preset-env']
  }),
  terser(),
  browsersync({
    host: 'localhost',
    port: 3000,
    server: {
      baseDir: ['./']
    },
    files: [
      'src/**',
      'js/**',
      './*.html'
    ],
    open: true
  }),
  resolve(),
  commonjs()
];

export default [{
    input: paths.css + '/styles.css',
    output: {
      file: paths.distCss + '/styles.css'
    },
    plugins: [
      stylelint(),
      postcss({
        extract: true,
        sourceMap: true,
        plugins: [
          atImport(),
          selector(),
          customProperties(),
          sorting(),
          nested()
        ],
        extensions: ['.css'],
        minimize: true
      })
    ]
  },
  {
    watch: {
      include: ['src/**', './*.html', 'js/**']
    }
  }
];
