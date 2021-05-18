module.exports = {
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                data: `@import "src/style/global.scss"; @import "src/style/variables.scss";`,
                additionalData: `@import "src/style/variables.scss";`
            }
        }
    }
};