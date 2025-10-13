import {test, expect} from '@playwright/test'
test ('assertion demo', async ({page})=>{
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()


})