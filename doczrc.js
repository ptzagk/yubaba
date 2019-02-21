const pkg = require('./packages/yubaba/package.json');

module.exports = {
  title: `yubaba ${pkg.description}`,
  typescript: true,
  dest: '/docs',
};
