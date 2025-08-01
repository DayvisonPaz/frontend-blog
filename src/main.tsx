import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header></Header>
    <App />
  </React.StrictMode>,
)
