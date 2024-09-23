import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/Navbar/NavBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
  </StrictMode>,
)
