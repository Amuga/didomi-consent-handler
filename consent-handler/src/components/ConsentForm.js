import React, { useState, useContext } from 'react'
import { ConsentContext } from '../App'

const ConsentForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedProcesses, setSelectedProcesses] = useState([])
  const { consents } = useContext(ConsentContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    consents.value = [...consents.value, {name, email, selectedProcesses}]
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Data Processes:
        <select multiple value={selectedProcesses} onChange={(e) => setSelectedProcesses(Array.from(e.target.selectedOptions, (option) => option.value))}>
          <option value="process1">Process 1</option>
          <option value="process2">Process 2</option>
          <option value="process3">Process 3</option>
        </select>
      </label>
      <br />
      <button type="submit">Give consent</button>
    </form>
  );
};

export default ConsentForm