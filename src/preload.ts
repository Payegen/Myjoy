// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { bridgeName } from './type/common';
// import { ipcRenderer } from 'electron';
const { contextBridge, ipcRenderer,shell } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer,
  shell,
});
contextBridge.exposeInMainWorld('jsBridge', (bridgeName: string, data: any, callback: Function) => {
  jsBridge(bridgeName, data, callback)
});
let cid = 0;
const callbacks = new Map<string, Function>()

let jsBridge = (bridgeName:string, data:any, callback:Function) => {
  const id = cid++
  callbacks.set(id.toString(), callback)
  ipcRenderer.send('sendMessage', { bridgeName, data, id })
  
  let msg:bridgeName = {
    bridgeName,
    data
  }

  ipcRenderer.on('receiveMessage', (event, arg) => {
    console.log("receiveMessage:",arg);
    
  })
}

// window.jsBridge = jsBridge


