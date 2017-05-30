# Features:
- ES6 module bundling and minification
- ESLint
- Custom modernizr build
- SCSS compilation and minification
- Autoprefixer
- SVG symbol sprite generation
- Livereload

# Setup
`npm install`

# Run
`npm start`

# One time commands

## Add Sassyplate
`npm run sassyplate`  
Make sure to uncomment `// import '../styles/style.scss';` in `app.js`

## Library
`npm run library`
Generates KSS Node Library into `/dist/styleguide`.  You can run an HTTP server out of `/dist` to view the library.

## Generate SVG sprite
`npm run svg`  
This command builds normal and minified svg sprites

## Generate custom modernizr
`npm run modernizr`

## Run livereload server
If it's not already running start it with `npm run livereload`

All you need is install a Chrome extension https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
