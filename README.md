# Webpack-Starter-Project

Template for using webpack with plugins

## Project structure

 ```
    .
    ├── dist                            # Bundle files
    ├── public                          # Public files
    |   └── html.index                  # HTML index
    ├── src                             # Project source
    |   └── sass                        # Sass css files
    |   └── stylus                      # Stylus css files
    |   └── axios.js                    # Axios config
    |   └── main.js                     # Entry
    ├── .babelrc                        # Babel config
    ├── .browserslistrc                 # BrowserList config
    ├── .editorconfig                   # Editorconfig
    ├── .eslintrc                       # ESlint config
    ├── README.md                       # this
    ├── package.json                    # General config of project
    ├── postcss.config.js               # PostCSS config
    ├── webpack.config.js               # Webpack settings
    ├── yarn.lock                       # Yarn
```

## Requirements

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com/lang/en/)

## Commands

`yarn start` Start a server by loading index.html

`yarn build` Create a bundle

`yarn dev` Start a server in development mode
