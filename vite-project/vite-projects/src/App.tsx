import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import './App.css'


function App() {
  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: '4px',
          width: '100%',
          padding: '10px 20px',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'right',
          boxSizing: 'border-box',

        }}
      >
        <nav  style={{ display: 'flex',gap: '80px'}}>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">About</Link>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/login">Login</Link>
        </nav>
      </header>

      <main style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;