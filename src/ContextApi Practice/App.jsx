import React from 'react'
import Header from './Header'
import Employees from './Employees'
import { UsercontextProvider } from './Context/Usercontext'

const App = () => {
    
  return (
    <UsercontextProvider>
        
          <div className="App">
            <Header />
            <Employees  />
    
          </div>

        

    </UsercontextProvider>
  )
}

export default App
