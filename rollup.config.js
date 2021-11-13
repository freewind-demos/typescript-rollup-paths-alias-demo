import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/main.ts',
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    json()
  ],
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  }
}
