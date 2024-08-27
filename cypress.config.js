const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
module.exports = defineConfig({
  e2e: {
    // Define una función asíncrona que se ejecuta cuando Cypress configura los eventos de nodo.
    // `on` es un objeto que permite registrar eventos, y `config` es el objeto de configuración de Cypress.
    
    async setupNodeEvents(on, config) {
    
      // Este bundler procesará los archivos de prueba antes de que Cypress los ejecute.
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)], // Agrega el plugin de Cucumber a `esbuild`.
      });
    
    // Esto indica a Cypress que use este `bundler` para procesar archivos como los `.feature`.
      on('file:preprocessor', bundler);
    
    // Agrega el plugin de Cucumber a Cypress.
    // Esto permite que Cypress entienda y ejecute los archivos `.feature`.
      await addCucumberPreprocessorPlugin(on, config);
    
    // Esto permite que las configuraciones personalizadas sean aplicadas en Cypress.
      return config;
    },
    // Cypress buscará cualquier archivo `.feature` dentro del directorio `cypress/e2e/` y sus subdirectorios.
    //specPattern: '**/*.feature',
    specPattern: 'cypress/Integration/**/*.feature',
    baseUrl: 'https://biodog.es',
    //supportFile: 'cypress/support/index.js' 
  },
});