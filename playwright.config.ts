// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';
import { appSettings } from './app-settings';
import { defineConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 5 * 60 * 1000,
  globalSetup: require.resolve('./global-setup'),
  use: {
    // Tell all tests to load signed-in state from 'storageState.json'.
    storageState: `./local-storage/${appSettings.app_identifier}.json`,
  },
};
export default config;


