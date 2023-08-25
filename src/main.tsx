import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { ShowItems } from './todo/pages/ItemsPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ShowItems />
  // </React.StrictMode>,
)
