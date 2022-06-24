//The code bloc below is used to open the electron framework.
//Electron is used to create the GUI


const {app, BrowserWindow} = require('electron');
let win = null;
const createWindow = () => {
    win = new BrowserWindow({
        width: 700,
        height: 475,
        resizable: true,
        webPreferences: {
            nodeIntegration: true
        },
    })
    win.loadFile("index.html");
};


app.whenReady().then(createWindow);
