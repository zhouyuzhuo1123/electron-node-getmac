'use strict';
var electron = require('electron');
var {app} = electron;
var {BrowserWindow} = electron;
var mainWindow = null;
var {ipcMain} = require('electron')
require('getmac').getMac(function(err,macAddress){
    if (err)  throw err
    ipcMain.on('asynchronous-message', (event, arg) => {
      event.sender.send('asynchronous-reply', macAddress)//在main process里向web page发出message
    })
})

app.on('ready', function() {
    mainWindow  = new BrowserWindow({width: 500, height: 960})
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});




