// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';
import {secret}  from './tests/donotopen/secret1'; 

async function globalSetup(config: FullConfig) : Promise<void> {
  //get baseurl for project, and storage state parameter. 
  const { baseURL, storageState} = config.projects[0].use; //baseURL is https://www.microsoft.com/en-in storage state is playwright/auth/user.json
  
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log("[Global Config] --- base URL: ", baseURL!);
  console.log("[Global Config] --- storage state: ", storageState)

  //! is a not-null assertion operator. 
  await page.goto(baseURL!);

  await page.getByRole('link', {name: 'Sign in to your account'}).click();
  await page.getByPlaceholder('Email, Phone, or Skype').fill('margolestheodore@outlook.com'); 
  await page.getByRole('button', {name: 'Next'}).click();
  await page.getByPlaceholder('Password').fill(secret);  
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', {name: 'Yes'}).click(); 

  //await page.context().storageState({ path: storageState as string});
  await page.context().storageState({ path: storageState as string});

  //close the browser used to sign in
  await browser.close(); 
  console.log("global setup complete");
}

export default globalSetup;