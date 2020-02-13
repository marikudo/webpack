const path = require("path")
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry : {
		main : "./assets/js/main.js"
	},
	mode : "production",
	output : {
		filename : "[name].bundle.js",
		path : path.resolve(__dirname,""),
	},
	plugins : [
		new webpack.ProvidePlugin({
		  $: 'jquery',
		  jQuery: 'jquery'
		}),

		new MiniCssExtractPlugin({
		 filename: 'style.css'
		})

	],
	module : {
		rules : [

			{
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['@babel/preset-env']
		        }
		      }
		    },

		    {
		        test: /\.s[ac]ss$/i,
		        use: [
		        	MiniCssExtractPlugin.loader,
		          // Translates CSS into CommonJS
		          'css-loader',
		          // Compiles Sass to CSS
		          'sass-loader',
		        ],
		      }

		]
	},

	optimization: {
	    splitChunks: {
	      chunks: 'all'
	    }
	  }

}