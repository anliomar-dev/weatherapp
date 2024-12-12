import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from "./hooks/themeContext.jsx";
import {UnitProvider} from "./hooks/unitProvider.jsx"
import {LocationProvider} from "./hooks/locationProvider.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
        <UnitProvider>
            <LocationProvider>
                <App />
            </LocationProvider>
        </UnitProvider>
    </ThemeProvider>
  </StrictMode>,
)
