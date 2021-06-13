# Youtube viewer
* use API on React
* create Storybook

---

## Create Flow

### npm init

* init
 `$ npm init`

* create file

```
youtubeviewer
  └ src
    └ entries
      └ sample.jsx
```

* src/entries/sample.jsx

```jsx
// move on Browser
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// move  React
import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <h1>Hello react.</h1>,
  rootEl,
);
```

###  install base packages

* `$ npm i react@^16.12.0 react-dom@^16.12.0 core-js@^3.6.4 regenerator-runtime@^0.13.3 prop-types@^15.7.2
`

###  install babel packages

* `$ npm i -D @babel/core@^7.8.3 @babel/register@^7.8.3 @babel/preset-env@^7.8.3 @babel/preset-react@^7.8.3 @babel/cli@^7.8.3
`

###  create babel.config.js

```js
// has presets & plugins use object
module.exports = (api) => {
    const isProduction = api.env('production');
    api.cache(true);
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
    ];

    const plugins = [];

    return {
        presets,
        plugins,
    };
};
```

- test `npx babel src/entries/sample.jsx -o output.js`
