import {test, expect, Page} from '@playwright/test';


class msdotcom{
    page : Page
    constructor(page : Page){
        this.page = page; 
    }

    async goBaseUrl(){
        await this.page.goto('https://microsoft.com/en-in'); //base page
        await this.page.getByRole('link', {name: 'Sign in to your account'}).click();
    }

    async navigatePane(direction : string){
        await this.page.getByRole('button', {name: direction}).nth(0).click();
    }

}

export default msdotcom; 