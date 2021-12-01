const   { app, BrowserWindow, Menu, dialog, ipcMain, Notification, remote, shell } = require('electron'),
        { autoUpdater } = require("electron-updater"),
        { localStorage } = require('electron-browser-storage'),
        path = require('path'),
        fs = require('fs'),
        os = require('os'),
        gotTheLock = app.requestSingleInstanceLock()

let winrn = [], updateinfo = "", mainWindow, mainWindowa, devmode = process.argv[2]

app.setAppUserModelId('SolarDB Manager')

if (!gotTheLock) { app.quit() } 
else {

    app.on('second-instance', (event, commandLine, workingDirectory) => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })

    app.whenReady().then(() => {

        let mainMenu = Menu.buildFromTemplate([

            {
                label: 'Archivo',
                submenu: [
                    { type: 'separator' },
                    { 
                        label: 'Salir',
                        role: 'quit'
                    }
                ]
            },
            {
                label: 'Editar',
                submenu: [
                
                    { 
                        label: 'Copiar',
                        role: 'copy' 
                    },
                    { 
                        label: 'Pegar',
                        role: 'paste'
                    }
                ]
            },
            {
                label: 'Vista',
                submenu: [
                    { 
                        label: 'Acercar',
                        role: 'zoomIn' 
                    },
                    { 
                        label: 'Alejar',
                        role: 'zoomOut' 
                    },
                    { 
                        label: 'Pantalla Completa',
                        role: 'togglefullscreen' }
                ]
            },
            {
            label: 'Ayuda',
            submenu: [
                
                {
                label: 'Sitio Web',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://github.com/gusgeek/SolarDB-Manager')
                }
                },
                {
                    label: 'Ver Wiki',
                    click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://github.com/gusgeek/SolarDB-Manager/wiki')
                    }
                },
                { type: 'separator' },
                { 
                    label: 'Acerca de',
                    click: async () => {
    
                        mainWindowa = new BrowserWindow({
                            center: true,
                            width: 380,
                            height: 350,
                            minWidth: 380,
                            minHeight: 350,
                            autoHideMenuBar: true,
                            icon: __dirname + '/resources/iconos/support.png',

                            webPreferences: {
                                nodeIntegration: true, // is default value after Electron v5
                                contextIsolation: false, // protect against prototype pollution
                                enableRemoteModule: true // turn off remote
                                }
                        })
    
                        mainWindowa.loadFile("./components/about.html")
                        mainWindowa.setResizable(false);
                        // mainWindowa.webContents.openDevTools();

    
                    }
                }
            ]
            }

        ])

        Menu.setApplicationMenu(mainMenu)

        mainWindow = new BrowserWindow({
            center: true,
            width: 1024,
            height: 500,
            minWidth: 1024,
            minHeight: 500,
            // frame: false,
            // titleBarStyle: 'hidden',
            icon: __dirname + '/resources/iconos/support.png',
            webPreferences: {
                nodeIntegration: true, // is default value after Electron v5
                contextIsolation: false, // protect against prototype pollution
                enableRemoteModule: true // turn off remote
            }
        })
        
        mainWindow.loadFile("./components/Index.html")

        if(devmode == "true") mainWindow.webContents.openDevTools()

    })

}
