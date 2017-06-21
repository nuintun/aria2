// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    // to edit target browsers: use "browserlist" field in package.json
    autoprefixer: {
      add: true,
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
    }
  }
};
