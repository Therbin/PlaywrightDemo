import {test} from './test-worker'

test('menu-navigator', async ({page, Menu_}) => {
    await Menu_.menu.setPage(page); 
    await Menu_.menu.goHome();
    await Menu_.menu.navigate('Xbox');
    await Menu_.menu.goHome(); 
})