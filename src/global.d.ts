declare global {
  
}

interface Window {
  jsBridge: (bridgeName: string, data: any, callback: Function) => void;
  electron: electron;
}
interface electron {
  ipcRenderer: any;
}