import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './layout/Header.jsx'
import './index.css'
import BugdetPrinter from './components/BugdetPrinter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BugdetPrinter>
      <Header/>
      <App />
    </BugdetPrinter>
  </StrictMode>,
)
