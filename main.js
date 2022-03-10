//The code bloc below is used to open the electron framework.
//Electron is used to create the GUI
const {app, BrowserWindow} = require('electron');
let win = null;
const createWindow = () => {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        resizable: true,
        webPreferences: {
            nodeIntegration: true
        },
    })


    win.loadFile("index.html");
};

app.whenReady().then(createWindow);

//Opens the puppeteer framework
const puppeteer = require('puppeteer');

// function to open web browser
async function givePage(){
    //headless does not show the action. When it is set to false the action is shown but it is slower
    const browser = await puppeteer.launch({headless: false});
    //makes the browser open a new page
    const page = await browser.newPage();
    return page;

}
// item url
const url ="https://www.target.com/p/tanjiro-kamdo-demon-slayer-model-kit/-/A-81669807";
//delay timer. This will be optional and from user input
const delayTime = 0;
//username
const userID = "ilovetargetonlineshopping@gmail.com"
//user password
const password = "#Osman12"
//function that interacts with buttons to add the item to cart
async function addToCart(page){

    await page.goto(url);
    await page.waitForSelector("button[class='BaseButton-sc-3v3oog-0 ButtonPrimary-sc-9wgfzx-0 styles__StyledPrimaryButton-sc-1f2lsll-0 eVHdWy JRFKP bebHXQ']");
    await page.click("button[class='BaseButton-sc-3v3oog-0 ButtonPrimary-sc-9wgfzx-0 styles__StyledPrimaryButton-sc-1f2lsll-0 eVHdWy JRFKP bebHXQ']", elem => elem.click());
    await page.waitForSelector("button[class='Button-sc-bwu3xu-0 gALAUt']");
    await page.click("button[class='Button-sc-bwu3xu-0 gALAUt']", elem => elem.click());
    await page.waitForSelector("button[class='BaseButton-sc-3v3oog-0 ButtonPrimary-sc-9wgfzx-0 gxYtIT hcoLgH h-padding-h-default sticky-checkout-button']");
    await page.click("button[class='BaseButton-sc-3v3oog-0 ButtonPrimary-sc-9wgfzx-0 gxYtIT hcoLgH h-padding-h-default sticky-checkout-button']", elem => elem.click());
    await page.waitFor(delayTime/3);
}


//function to log into account
async function accountLogin(page){
    /*Line below is separate from the user selected delay timer. Page will not allow
        instant user name and password submittal*/

    await page.waitFor(1500);
    await page.type("#username", userID);
    await page.type("#password", password);
    await page.waitFor(0);
    await page.waitForSelector("button[class='BaseButton-sc-3v3oog-0 ButtonPrimary-sc-9wgfzx-0 styles__SignInButton-sc-137ce2q-8 kmdQZX JRFKP eGNBea']");
    await page.click("button[class='BaseButton-sc-3v3oog-0 ButtonPrimary-sc-9wgfzx-0 styles__SignInButton-sc-137ce2q-8 kmdQZX JRFKP eGNBea']", elem => elem.click());
    await page.waitFor(1500);
    //await page.click("button[class='BaseButton-sc-3v3oog-0 ButtonSecondary-sc-18j0bd9-0 styles__NotNowButton-sc-1eidujf-13 kmdQZX bNKunA hiqZQf']", elem => elem.click());
    //await page.waitForSelector("button[class='BaseButton-sc-3v3oog-0 ButtonSecondary-sc-18j0bd9-0 styles__NotNowButton-sc-1eidujf-13 kmdQZX bNKunA hiqZQf']");
    //await page.waitFor(delayTime/3);
}
//submits the item
async function submit(page){
    await page.waitForSelector("button[class='BaseButton-sc-3v3oog-0 ButtonPrimary-sc-9wgfzx-0 cLBbtz JRFKP']");
    await page.waitFor(5000);
    await page.click("button[class='BaseButton-sc-3v3oog-0 ButtonPrimary-sc-9wgfzx-0 cLBbtz JRFKP']", elem => elem.click());
}

//the backend driver function
async function checkout(){
    const page = await givePage();
    await addToCart(page);
    await accountLogin(page);
    await submit();
}
//runs the program
checkout();
