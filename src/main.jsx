import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './ContextApi/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Context from './ContextApi/Context'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
   <Context>
   <App />
   </Context>
   
  

  </BrowserRouter>
   
    
    
  </React.StrictMode>,
)
