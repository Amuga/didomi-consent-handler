import React, { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FetchAppData } from './app-state'
import ConsentForm from './components/ConsentForm'
import ConsentList from './components/ConsentList'
import './App.css'

export const ConsentContext = createContext()

function App() {
  
  return (
    <ConsentContext.Provider value={FetchAppData()}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/consents">Consents</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/consents" element={<ConsentList />} />
            <Route path="/" element={<ConsentForm />} />
          </Routes>
        </div>
      </Router>
    </ConsentContext.Provider>
  )
}

export default App
