import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material';

import { signal } from "@preact/signals-react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FetchAppData } from './app-state'
import ConsentForm from './components/ConsentForm'
import ConsentList from './components/ConsentList'
import './App.css'

export const consents = signal([])

FetchAppData().then(
  result => {
    consents.value = result
  })

const App = () => {
  
  return (
      <Router>
        <div style={{display: 'flex'}}>
          <nav style={{position: 'absolute'}}>
            <List>
              <ListItem>
                <Link to="/give-consent">
                  <ListItemText primary='Give Consent' />
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/collected-consents">
                  <ListItemText primary='Collected Consents' />
                </Link>
              </ListItem>
            </List>
          </nav>
          <Routes>
            <Route path="/collected-consents" element={<ConsentList />} />
            <Route path="/give-consent" element={<ConsentForm />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
