import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BrowserRouter from 'react-router-dom/BrowserRouter';
import App from './App.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)