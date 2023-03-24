import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/App.scss'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'home') {
    return <Home changePage={() => setPage('about')} />
  }

  return <About changePage={() => setPage('home')}/>;
}

export default App
