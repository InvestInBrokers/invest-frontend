module.exports = {
	presets: [
			//eslint-disable-next-line import/no-extraneous-dependencies, global-require
			[require('babel-preset-es2015').buildPreset, {
					modules: process.env.RUN_MODE === 'es' ? false : 'commonjs',
			}],
	],
};
