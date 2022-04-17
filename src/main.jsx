import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const theme = {
  colors: {
    primary: {
      orange: 'hsl(31, 77%, 52%)',
      darkCyan: 'hsl(184, 100%, 22%)',
      veryDarkCyan: 'hsl(179, 100%, 13%)'
    },
    neutral: {
      transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
      veryLightGray: 'hsl(0, 0%, 95%)'
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
