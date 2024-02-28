const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://todomvc.com/examples/javascript-es6/dist/'
      // implement node event listeners here
    },
  },
);
