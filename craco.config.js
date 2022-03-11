module.exports = {
    webpack: {
        configure: {
            module: {
                rules: [
                    {
                        type: 'javascript/auto',
                        test: /\.mjs$/,
                        include: /node_modules/,
                    },
                ],
            },
        },
    },
}

var test = 0
if(test === 0 || test === 1){

}
