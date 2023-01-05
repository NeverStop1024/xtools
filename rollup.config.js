import resolve from "rollup-plugin-node-resolve";
import ts from "rollup-plugin-typescript2"
import { terser } from "rollup-plugin-terser"
export default {
  input:'src/index.ts',
  output:{
    file: "./dist/index.js",
    format: 'umd',
    name:'XTools'
  },
  plugins:[
    resolve(),
    ts(),
    // terser(),
  ]
}
