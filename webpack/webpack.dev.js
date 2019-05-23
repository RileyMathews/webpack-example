const merge = require("webpack-merge");

const commonConfig = require('./webpack.common')
const parts = require('./webpack.parts')

const developmentConfig = merge([
    parts.devServer({
      // Customize host/port here if needed
      host: "0.0.0.0",
      port: process.env.PORT
    }),
  ]);

module.exports = mode =>{
    return merge(commonConfig, developmentConfig, { mode })
}
