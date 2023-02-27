import {test as Base} from "@playwright/test"
import msmenu from "./msmenu";

type Menu = {
    menu : msmenu
}

export const test = Base.extend<{}, {Menu_ : Menu}>({
    Menu_: [async ({browser}, use) => {
        const page = await browser.newPage(); 
        const Menu_ = new msmenu(page); 
        console.log("[Worker Config] --- creating menu object for worker scope")
        await use({menu: Menu_}); 
    }, {scope : "worker"} ]
})