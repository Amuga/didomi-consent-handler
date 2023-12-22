import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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


function App() {
  
  return (
      <Router>
          <nav>
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
      </Router>
  )
}

export default App
