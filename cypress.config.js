const { defineConfig } = require("cypress");

const {
    saveGetResponseToExcel, 
    postResponseToExcel,
    putResponseToExcel,
    deleteResponseToExcel
} = require('./cypress/utils/excelUtils');

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank/',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
       on('task', {
          saveGetResponseToExcel,
          postResponseToExcel,
          putResponseToExcel,
          deleteResponseToExcel      
              });

            return config;
    },
  },
});
