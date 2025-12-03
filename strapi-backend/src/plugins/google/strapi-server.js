'use strict';

module.exports = {
  register({ strapi }) {
    // Register Google services
    strapi.plugin('google').services.google = require('./services/google')({ strapi });
  },

  bootstrap({ strapi }) {
    // Bootstrap logic if needed
  },
};

