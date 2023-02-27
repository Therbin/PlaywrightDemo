

import {test, expect, Page} from '@playwright/test';

export default class msmenu{
    page : Page
    tabNames : string[]
    currentPage : string
    constructor(page : Page){
        this.page = page; 
        this.tabNames = ['Microsoft 365','Teams','Windows','Surface','Xbox', 'Support']
        this.currentPage = this.tabNames[0]; 
    }

    async goHome(){
        await this.page.goto('https://www.microsoft.com/en-in');
    }

    async navigate(tab : string){
        if(this.tabNames.includes(tab)){
            this.currentPage = tab;
            console.log('Menu navigating to: ', this.currentPage); 
            await this.page.getByRole('link', {name : tab, exact: true}).click();
        }else{
            console.log('error: user tried to navigate to tab that does not exist');
        }
    }

    getCurrentTab() : string{
        return this.currentPage; 
    }

    async querySupport(q : string) {
        if(this.currentPage = 'Support'){
            await this.page.getByPlaceholder('How can we help you?').fill(q);
            await this.page.getByTitle('Search', { exact: true }).click();
        }
    }

    async setPage(p : Page){
        this.page = p; 
    }

}

/* 
  await page.getByRole('link', { name: 'Microsoft 365', exact: true }).click();
  await page.getByRole('link', { name: 'Teams', exact: true }).click();
  await page.getByRole('link', { name: 'Windows', exact: true }).click();
  await page.getByRole('link', { name: 'Surface', exact: true }).click();
  await page.getByRole('link', { name: 'Xbox', exact: true }).click();
  await page.getByRole('link', { name: 'Support', exact: true }).click();
*/