import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ViewHomePage from './Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewHomePage />
  </StrictMode>,
)
