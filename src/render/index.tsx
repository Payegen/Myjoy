import React from 'react'
import {createRoot} from 'react-dom/client'
import '../index.css'
import App from './views/App'
// function App() {
//   function sendMsgTomainWindows(){
//     window.jsBridge('test',{'hello bridge':'ok'},(res:any)=>{console.log(res)})
//     console.log('go');
//   }
//   return (
//     <div className='w-full h-full bg-slate-600 text-4xl'>
      
//     </div>
//   )
// }

// 创建react根组件
const root = createRoot(document.getElementById('app')!)
root.render(<App />)