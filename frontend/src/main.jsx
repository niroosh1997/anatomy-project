import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* HashRouter, not BrowserRouter: GitHub Pages has no server-side rewrite,
        so a real path like /anatomy/Femur would 404 on refresh. */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
