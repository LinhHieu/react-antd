const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#2ECF94',
            '@link-color': '#2ECF94',
            '@font-family':  'Poppins, sans-serif'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};