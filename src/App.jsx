
import{Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './User'

function App() {
  

  return (
    <>
      <div>
        <h1>welcome ti learning react router</h1>
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to ='/contact'>contact</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about/:name' element={<User />}></Route>
      </Routes>

    
      
    </>
  )
}

export default App
