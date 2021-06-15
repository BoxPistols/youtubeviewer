# Youtube viewer
*   use API on React
*   create Storybook

---

## Create Flow

### npm init

*   init
 `$ npm init`

*   create file

```
youtubeviewer
  └ src
    └ entries
      └ sample.jsx
```

*   src/entries/sample.jsx

```jsx
// move on Browser
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// move  React
import React from 'react'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')

ReactDOM.render(<h1>Hello react.</h1>, rootEl)
```

### install base packages

*   `$ npm i react@^16.12.0 react-dom@^16.12.0 core-js@^3.6.4 regenerator-runtime@^0.13.3 prop-types@^15.7.2`

### install babel packages

*   `$ npm i -D @babel/core@^7.8.3 @babel/register@^7.8.3 @babel/preset-env@^7.8.3 @babel/preset-react@^7.8.3 @babel/cli@^7.8.3`

### create babel.config.js

```js
// has presets & plugins use object
module.exports = (api) => {
    const isProduction = api.env('production')
    api.cache(true)
    const presets = [
        [
            // TranseCompile
            /*
                - Chrome: 79
                - IE: 11
                - FireFox: 72
                - Safari: 13
            **/
            '@babel/preset-env',
            {
                targets: {
                    chrome: '79',
                    ie: '11',
                    firefox: '72',
                    safari: '13',
                },
                // Cross Browser
                useBuiltIns: 'entry',
                corejs: 3,
            },
        ],
        [
            '@babel/preset-react',
            {
                development: !isProduction,
            },
        ],
    ]

    const plugins = []

    return {
        presets,
        plugins,
    }
}
```

*   test `npx babel src/entries/sample.jsx -o output.js`

### Set WebPack

*   `npm install webpack@4.42.0 webpack-cli@3.3.11 babel-loader@8.1.0`
*   use babel
*   create `webpack.config.babel.js`

```js
import webpack from 'webpack'
import path from 'path'

export default (env, args) => {
    const isProduction = args.mode === 'production'
    const devtool = !isProduction && 'inline-source-map'
    const rules = [{
        test: /\.jsx?$/,
        use: ['babel-loader'],
    }, ]

    return {
        entry: './src/entries/sample.jsx',
        output: {
            path: path.join(__dirname, './output/'),
            filename: 'sample.js',
        },
        module: {
            rules,
        },
    }
}
```

*   test `$ npx webpack --mode development`

### create html test

*   ./sample.html

```html
...
<div id="root"></div>
<script src="./output/sample.js"></script>
```

*   package.json

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production",
    "build:dev": "webpack --mode development",
    "watch": "npm run build:dev -- --watch"
 }
```

*   test
    -   \$ npm run build
    -   \$ npm run build:dev
    -   \$ npm run watch

## express set

*   `$ npm i express`

### create index.js

```javascript
const path = require('path')
const express = require('express')
const app = express()
const router = express.Router()

const server = app.listen(3000, function() {
    console.log(`Node.js is listening to PORT: ${server.address().port}`)
})

router.use(express.static('public'))

router.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.use('/', router)
```

```json
  └ public
    └ index.html
```

*   public/index.html

```html
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width,initial-scale=1" />

<head>
    <title>YouTubeViewer</title>
</head>

<body>
    <div id="root"></div>
    <script src="/js/app.js"></script>
</body>

</html>
```

### install router

*   `npm i react-router-dom@^5.1.2`

## Create TopPage

*   src/components/pages/TopPage/index.jsx

---

*   Create
    -   TopPage
    -   VideoPlayer
    -   404
*   Routing

 `Git 3408127`

---

# Storybook

https://storybook.js.org/tutorials/intro-to-storybook/react/ja/get-started/
