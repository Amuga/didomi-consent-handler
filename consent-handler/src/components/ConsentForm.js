import React, { useState } from 'react'
import { consents } from '../App'
import { Button, FormGroup, FormControlLabel, Checkbox, Box, TextField } from '@mui/material';

const ConsentForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedProcesses, setSelectedProcesses] = useState([])
  const options = [ { value: 'Newsletter', label: 'Receive newsletter' },
    { value: 'Ad Targetting', label: 'Be shown targetd ads' },
    { value: 'Anonymous Stats', label: 'Contribute to anonymous visit statistics' }, 
  ];

  const handleCheckboxChange = (event) => {
    const { value } = event.target

    setSelectedProcesses((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value)
      } else {
        return [...prevSelected, value]
      } })
  };

  const clearForm = () => {
    setName('')
    setEmail('')
    setSelectedProcesses([])
  }

  const handleSubmit = () => {
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    
    if (trimmedName && trimmedEmail && selectedProcesses.length) {
      const processes = selectedProcesses.join(', ')
      fetch('/consents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          selectedProcesses: processes
        })
      })
        .then(response => response.json())
        .then(() => {
          //Post successful, updating data with the "payload".
          consents.value = [...consents.value, { name: trimmedName, email: trimmedEmail, selectedProcesses: processes }, ]
          clearForm()
        })
        .catch(error => {
          console.error('Error:', error)
        })
      clearForm()
    } else {
      // TODO/nice to have: Implement proper validation.
      alert('You must input a name, email and select at least one process')
    }
  };

  return (
    <Box component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        paddingTop: '20px',
        width: '100%'
      }}
    >
        <TextField label='Name'
        error={!name}
        helperText={!name && 'Name is required'}
        required
        placeholder='John'
        onChange={(e) => setName(e.target.value)}
        value={name}
        variant='outlined'/>
      <br />
        <TextField label='Email'
          type="email"
          error={!email}
          helperText={!email && 'Email is required'}
          placeholder='John'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      <br />
        Data Processes *
        <FormGroup> {options.map((option) => ( 
          <FormControlLabel key={option.value} control={
            <Checkbox checked={selectedProcesses.includes(option.value)} onChange={handleCheckboxChange} value={option.value} />
          } label={option.label} /> ))}
        </FormGroup>
      <br />
      <Button variant="contained" onClick={handleSubmit}>Give consent</Button>
    </Box>
  );
};

export default ConsentForm