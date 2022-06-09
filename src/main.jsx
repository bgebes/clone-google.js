import React from 'react'
import ReactDOM from 'react-dom/client'
import Helmet from 'react-helmet'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <title>Google</title>
    </Helmet>
    <App />
  </React.StrictMode>
)
