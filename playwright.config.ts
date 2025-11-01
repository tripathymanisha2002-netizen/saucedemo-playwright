import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/spec',
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: 'https://www.saucedemo.com',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'storageState.json',
        baseURL: 'https://www.saucedemo.com',
        headless: true,
      },
    },
  ],
});
