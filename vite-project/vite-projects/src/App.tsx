import { Link,Routes, Route} from 'react-router'
import Home from './Home'
import About from './About'
import Login  from './Login'

function App() {
  

  return (
    <>
    <Link to="/"><p>Home</p></Link>
    <Link to="/about"><p>About</p></Link>
    <Link to="/Login"><p>Login</p></Link>
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path= "/about" element= {<About />} />
        <Route path= "/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
