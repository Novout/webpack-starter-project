module.exports = ({ file, options, env }) => ({
  parser: file.extname === ".sss" ? "sugarss" : false, // Handles `.css` && '.sss' files dynamically
  plugins: {
    "autoprefixer": {},
    "postcss-import": {},
    "postcss-preset-env": {},
    "cssnano":  env === "production" ? {} : false
  }
})