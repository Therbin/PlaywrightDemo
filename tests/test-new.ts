import {test as Base} from '@playwright/test';
import msdotcom from './msdotcom';
import mssurface from './mssurface';
import msmenu from './msmenu'

type FixtureSet = {
    MsDotcom : msdotcom,
    MsSurface : mssurface,
    Menu : msmenu
}


export const test = Base.extend<FixtureSet>({
    MsDotcom : async ({page}, use) =>{
        const MsDotcom = new msdotcom(page); 
        console.log("[Local test config] --- creating fixture: MSDOTCOM")
        await MsDotcom.goBaseUrl(); 
        await use(MsDotcom); 
    },

    MsSurface : async ({page}, use) =>{
        const MsSurface = new mssurface(page); 
        console.log("[Local test config] --- creating fixture: MSSURFACE")
        await MsSurface.goSurfaceUrl(); 
        await use(MsSurface);
    },

    Menu : async ({page}, use) => {
        const Menu = new msmenu(page);
        await Menu.goHome();
        await use(Menu);
    }
})