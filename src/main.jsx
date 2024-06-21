import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from '@mui/material'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { theme } from './theme.jsx'

TimeAgo.addDefaultLocale(en)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
