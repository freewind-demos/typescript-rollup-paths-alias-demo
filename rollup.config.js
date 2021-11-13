import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
  input: './src/main.ts',
  plugins: [typescript(), json()],
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  }
}
