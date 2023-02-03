import React from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/react-query">React Query</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default App
