
const path = require('path');
const { appRoot, appBuild } = require('./paths');
const Webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const getClientEnvironment = require('./env');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(webpackConfig, {
	mode: 'development',
	entry: [
		'core-js',
		'regenerator-runtime/runtime',
		'react-hot-loader/patch',
		`webpack-dev-server/client?http://localhost:${process.env.APP_PORT}/`,
		'webpack/hot/only-dev-server',
		path.resolve(appRoot, "src/index.tsx"),
	],
	output: {
		path: appBuild,
		filename: "[name].[hash:8].js", // 导出的文件名
		publicPath: "/",
	},
	resolve: {
		alias: {
		  'react-dom': '@hot-loader/react-dom',
		},
	},
	devtool: "cheap-module-eval-source-map",
	optimization: {
		noEmitOnErrors: true,
		namedModules: true,
		namedChunks: true,
		splitChunks: false
	},
	devServer: {
		port: 8088,
		hot: true,
		contentBase: path.resolve(appRoot, "dist"),
		stats: "errors-only",
		historyApiFallback: true,
		disableHostCheck: true
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NamedModulesPlugin(),
		new Webpack.DefinePlugin(getClientEnvironment()),
		new HardSourceWebpackPlugin(),

		// new BundleAnalyzerPlugin({
		// 	analyzerPort: 8919 //打包构建后体积分析图展示的窗口
		// })
	],
});
