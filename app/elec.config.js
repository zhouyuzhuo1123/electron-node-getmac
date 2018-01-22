const { remote,ipcRenderer } = require('electron');
const updater = remote.require('electron-simple-updater');


updater.on('update-available', onUpdateAvailable);

//g some code
updater.on('update-downloading', onUpdateDownloading);

//g some code
updater.on('update-downloaded', onUpdateDownloaded);

//g some code
updater.on('error', function(err){
    
});

function onUpdateAvailable(meta) {
    alert('有新版本')
    updater.downloadUpdate();
}

// fgsfsdfsdfsdfsdf
function onUpdateDownloading(metas) {

}

function onUpdateDownloaded() {
    if(confirm('下载完成请更新')){
        updater.quitAndInstall();
    }

}
updater.checkForUpdates();

setTimeout(function(){
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
    	alert(arg)
        localStorage.mac = arg
    })
    ipcRenderer.send('asynchronous-message', 'ping')
},1200)
