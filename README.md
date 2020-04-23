# react-tut
This is a online folder to store my react learning materials. You can look at lesson from 1-3 in get-started. And I intend to seperate all the necessary lesson from 4 to the end.
# React Lesson 1 Webpack
Webpack is a static module bunlder for modern JavaScript application. It internally build a dependency graph which maps every module your project needs and generate on e or more bundles.
* Entry
* Ouput
* Loaders
* Plugins
* Mode
* Browser Compatibility

## Entry
An **Entry point** indicates which module webpack should use to begin building out its dependency graph. 

```
// Default value is ./src/index.js
module.exports ={
    entry: './path/to/my/entry/file.js' 
}
```

## Output
The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.
```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

## Loaders
Help translate other types of files like **TypeScript** to valid modules.
At a high level, loaders have two properties in your webpack configuration:
1. The test property identifies which file or files should be transformed.
2. The use property indicates which loader should be used to do the transforming.

```
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```
## Plugins
Loaders are used to transform some certain types of modules, plugins can be leveraged to perfrom a wider range of tasks.
```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```
HtmlWebpackPlugin generate an HTML file for your application by injecting automatically all your generated bundles.

## Mode
Can swith mode between `development` and `production`, each would enable [different sets](https://webpack.js.org/configuration/mode/) of configurations which are not shown in `webpack.config.js`.
Development mode will not generate compressed file in `dist` folder.
