const styleguidePlugin = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    i18n: {
      ...nextConfig.i18n,
      locales: ['en', 'it-IT'],
    },
  });
};

module.exports = styleguidePlugin;
