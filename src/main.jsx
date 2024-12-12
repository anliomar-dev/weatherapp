import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from "./hooks/themeContext.jsx";
import {UnitProvider} from "./hooks/unitProvider.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
        <UnitProvider>
            <App />
        </UnitProvider>
    </ThemeProvider>
  </StrictMode>,
)
