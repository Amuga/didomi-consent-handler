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

  const handleSubmit = (e) => {
    // End result
    //TODO: Fake a POST
    const processes = selectedProcesses.join(', ')
    console.log(processes)
    consents.value = [...consents.value, {name, email, selectedProcesses: processes}]
    clearForm()
  };

  return (
    <Box component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        width: '100%'
      }}
    >
        <TextField label='Name' onChange={(e) => setName(e.target.value)} value={name} variant='outlined'/>
      <br />
        <TextField type="email" label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
        Data Processes:
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