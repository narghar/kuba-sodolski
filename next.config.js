const withPlugins = require('next-compose-plugins');
const url = require('url');
const { secretConfig, ...config } = require('config');

module.exports = withPlugins([], {
  webpack(config) {
    const newConfig = { ...config };
    newConfig.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return newConfig;
  },
  serverRuntimeConfig: { ...config, ...secretConfig },
  publicRuntimeConfig: config,
  images: {
    domains: getImagesDomains()
  },
  rewrites() {
    return [{
      source: '/sitemap.xml',
      destination: '/api/sitemap'
    }]
  }
});

function getImagesDomains() {
  const apiUrl = new url.URL(config.apiUrl);
  return [apiUrl.hostname];
}
