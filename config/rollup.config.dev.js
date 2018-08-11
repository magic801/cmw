import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
	entry: 'src/main.js',

	output: {
		file: 'dist/index.js',
		format: 'umd',
		name: 'CMW',
		sourcemap: true
	},

	plugins: [
		resolve(),
		babel({
			exclude: '**/node_modules/**'
		})
	]
}