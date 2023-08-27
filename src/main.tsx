import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { ShowItems } from './todo/pages/ItemsPage'
import { Navbar } from './ui'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <ShowItems />
  </React.StrictMode>,
)
