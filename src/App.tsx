import { useState } from 'react'
import './assets/App.scss'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'home') {
    return <Home changePage={() => setPage('about')} />
  }

  return <About changePage={() => setPage('home')}/>;
}

export default App
