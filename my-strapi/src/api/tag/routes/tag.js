"use strict";

/**
 * tag router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter('api::tag.tag');

module.exports = createCoreRouter("api::tag.tag", {
  prefix: "", // if prefeix = test ---> /test/tags
  only: ["find", "findeOne"],
  except: ["create"],
  config: {
    find: {
      auth: true, // true is default value
      policies: [],
      middlewares: [],
    },
    create: {},
    delete: {},
    update: {},
  },
});
