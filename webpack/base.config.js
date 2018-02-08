module.exports = {
    externals: ["jquery"],
    entry: "./src/ts/WindowController.ts",
    output: {
      libraryTarget: "var",
      library: "MasterWindows"
    },
    module: {
      loaders: [
        { test: /\.ts$/, loader: "ts-loader" }
      ]
    }
  }