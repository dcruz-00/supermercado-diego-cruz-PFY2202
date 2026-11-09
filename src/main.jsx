import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import InventarioProvider from './context/InventarioProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* basename: las rutas de React Router viven bajo el mismo prefijo que define `base` en vite.config.js */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <InventarioProvider>
        <App />
      </InventarioProvider>
    </BrowserRouter>
  </StrictMode>,
)