module.exports = {
  // The rest of the Cypress config options go here...
  projectId: 'himvmq',

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(_on, _config) {
      // ...
    },
    baseUrl: 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
};
