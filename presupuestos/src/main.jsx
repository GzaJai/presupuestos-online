import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './layout/Header.jsx'
import './index.css'
import Printable from './components/Printable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Printable>
      <Header/>
      <App />
    </Printable>
  </StrictMode>,
)
