const { defineConfig } = require("cypress");
const cypressReplay = require("@replayio/cypress");

module.exports = defineConfig({
  projectId: "y3akbv",
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      cypressReplay.default(on, config);
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
