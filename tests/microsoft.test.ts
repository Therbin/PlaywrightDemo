import {test} from './test-new'


test('shop-ms', async ( { page, MsDotcom}) => {
    await MsDotcom.navigatePane('Next');
    await MsDotcom.navigatePane('Prev');
})

test('shop-surface', async ({page, MsSurface}) => {
    await MsSurface.turnOffAnimation();
    await MsSurface.browseAllProducts(); 

    await MsSurface.clickPro9(); 
    await MsSurface.getFullSpecs(); 

    await MsSurface.getOverview(); 
    //await MsSurface.shopSurface(); 
})

test('test-menu', async ({page, Menu}) => {
    await Menu.navigate('Microsoft 365');
    await Menu.goHome(); 
    await Menu.navigate('Support');
    await Menu.querySupport('Outlook install'); 
})







