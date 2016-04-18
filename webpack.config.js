module.exports = {
	context: __dirname + '/src',
	entry: './main.js',

	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
			},
			// {
			// 	test: /\.css$/,
			// 	loaders: ['react-hot', 'postcss'],
			// },
		],
	},
	// postcss: files => [
	// 	require('postcss-cssnext'),
	// ],
	devServer: {
		hot: true,
		inline: true,
		//progress: true,
		//colors: true,
		//noInfo: true,
		//historyApiFallback: true,
	},
};