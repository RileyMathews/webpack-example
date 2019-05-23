const merge = require("webpack-merge");

const commonConfig = require('./webpack.common')

const productionConfig = merge([])

module.exports = merge(commonConfig, productionConfig)
