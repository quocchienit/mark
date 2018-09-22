module.exports = {
	entry:'./app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js',
	},
	module :{
		rules:[
			{
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015']
				},
				test: /\.jsx?$/,
				exclude : /node_modules/
			},
			{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },

      { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }

		],
		
	}
};
	