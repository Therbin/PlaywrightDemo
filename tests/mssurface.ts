import {test, expect, Page} from '@playwright/test';


class mssurface{
    page : Page
    constructor(page : Page){
        this.page = page; 
    }

    async goSurfaceUrl(){
        await this.page.goto('https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface'); 
    }

    async turnOffAnimation(){
        await this.page.locator("id=toggle-button").click(); 
    }

    async browseAllProducts(){
        await this.page.getByText('Explore all products').click();
    }

    async clickPro9(){
        await this.page.getByRole('link', {name: /.*Pro.*9.*/}).first().click();
    }

    async getFullSpecs(){
        await this.page.locator("a[name='techspecs']").click();
    }

    async getOverview(){
        await this.page.getByRole('tab', { name: 'Overview' }).click();
    }

    async shopSurface(){
        await this.page.locator('#wdgweb-RegionPivot-1duoyoh').getByRole('link', { name: 'Shop now for Surface Pro 9' }).click();

    }

    async clickLocator(loc : string){
        try{
            await this.page.locator(loc).click(); 
        }catch{
            console.log("invalid locator or resolved to more than 1 element"); 
        }
    }
}

export default mssurface; 