const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //Pour avoir une meilleur resolution de l'écran on confifure Viewport
  viewportHeight:1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: 'https://blog.neolynk.fr/',
    specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*']    // pour exclure les fichier inutile.
  }
})
