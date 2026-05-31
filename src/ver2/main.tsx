import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './App2'
import './ver2.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
