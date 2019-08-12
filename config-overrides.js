const { override, addLessLoader, fixBabelImports } = require('customize-cra')
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css'
	}),
	addLessLoader({
		strictMath: true,
		noIeCompat: true,
		localIdentName: '[local]--[hash:base64:5]' // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
	})
)
