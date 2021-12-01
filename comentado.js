const updateChecker = () => {

    autoUpdater.checkForUpdates()
    autoUpdater.autoDownload = false
    autoUpdater.fullChangelog - true

    autoUpdater.on('update-available', (info) => {
        
        updateinfo = info

        let mainWindowu = new BrowserWindow({
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

        mainWindowu.loadFile("./components/updates.html")
        mainWindowu.setResizable(false);
        // mainWindowa.webContents.openDevTools(false);

    })

}

ipcMain.on('getUpdateInfo', function(event, arg) {
    event.returnValue = updateinfo;
})

ipcMain.on('getUpdatePackage', function(event, arg)  {

    event.returnValue = "ok";

    switch (process.platform) {

        case "darwin":
            shell.openExternal('https://github.com/gusgeek/HealtyCenter/releases/latest')
            break;

        case "linux":
            shell.openExternal('https://github.com/gusgeek/HealtyCenter/releases/latest')
            break;

        default:
            autoUpdater.downloadUpdate()
            break;

    }

})

ipcMain.on('reloadNeq', function(event, arg) {
    new Notification({ title: 'Equipos', body: 'Nuevo Equipo Agregado' }).show()
    event.returnValue = 'pong';
    mainWindow.reload()
});

ipcMain.on('getVer', function(event, arg) {
    event.returnValue = app.getVersion();
});

ipcMain.on('openwindow', function(event, arg) {
    event.returnValue = 'ponga';
    winrn[arg] = new BrowserWindow({
        center: true,
        width: 1024,
        height: 860,
        minWidth: 1024,
        minHeight: 860,
        autoHideMenuBar: true,
        icon: __dirname + '/resources/iconos/support.png',
        webPreferences: {
            nodeIntegration: true, // is default value after Electron v5
            contextIsolation: false, // protect against prototype pollution
            enableRemoteModule: true // turn off remote
        }
    })
    // winrn[arg].webContents.openDevTools(true);

    winrn[arg].loadFile('./components/equipo.html', {query: {"id": arg}})

});

autoUpdater.on('update-downloaded', () => {

    dialog.showMessageBox({

        type: "info",
        title: "Actualizacion Descargada",
        message: "La actualizacion esta descargada, Desea instalarla ahora?",
        buttons: ['Actualizar Ahora', 'No']
        
    }).then(result => {

        if(result.response === 0) {

            autoUpdater.quitAndInstall(false, true)

        }

    })
})