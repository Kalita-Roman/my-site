git add .
git commit -m "try"
SET NODE_ENV=production&&webpack --config webpack/webpack.config.js
git add .
git commit -m "try build"
git push origin master