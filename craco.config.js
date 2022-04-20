const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#2ECF94',
            '@link-color': '#2ECF94' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};