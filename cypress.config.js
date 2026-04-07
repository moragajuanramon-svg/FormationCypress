import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {

    setupNodeEvents(on, config) {

    },

    env: {

      snapshotOnly: false

    }

  },

})