

module.exports = {
    webpack: {
        module: {
            rules: [
                {
                    test: /\.wasm$/,
                    loader: ['wasm-loader']
                  },
            ]
        }
    }
}