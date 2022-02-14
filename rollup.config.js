import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/lib/components/index.ts',
    output: [
      {
        file: './components/index.js',
        format: 'esm',
      },
      {
        file: './components/index.cjs.js',
        format: 'cjs',
      },
    ],
    plugins: [
      commonjs(),
      url(),
      nodeResolve(),
      babel({
        exclude: 'node_modules/**',
      }),
      typescript(),
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: './src/lib/components/index.ts',
    output: [{ file: 'components/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  {
    input: 'src/lib/functions/index.ts',
    output: [
      {
        file: './functions/index.js',
        format: 'esm',
      },
      {
        file: './functions/index.cjs.js',
        format: 'cjs',
      },
    ],
    plugins: [
      commonjs(),
      url(),
      nodeResolve(),
      babel({
        exclude: 'node_modules/**',
      }),
      typescript({}),
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: './src/lib/functions/index.ts',
    output: [{ file: 'functions/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];