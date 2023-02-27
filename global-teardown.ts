
import { chromium, FullConfig } from '@playwright/test';

async function globalTeardown(config : FullConfig){
  const { baseURL, storageState} = config.projects[0].use; //baseURL is https://www.microsoft.com/en-in storage state is playwright/auth/user.json
  
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.microsoft.com/en-in'); 
  await page.getByRole('link', {name: 'Sign in to your account'}).click();

 // await page.getByRole('button', { name: 'Sign out of this account' }).click();

  console.log("\nglobal teardown complete");
}

export default globalTeardown;