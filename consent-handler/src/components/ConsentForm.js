import React, { useState, useContext } from 'react'
import { ConsentContext } from '../App'

const ConsentForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedProcesses, setSelectedProcesses] = useState([])
  const { consents } = useContext(ConsentContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // End result
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
          <option value="newsletter">Receive newsletter</option>
          <option value="ads">Be shown targetd ads</option>
          <option value="statistics">Contribute to anonymous visit statistics</option>
        </select>
      </label>
      <br />
      <button type="submit">Give consent</button>
    </form>
  );
};

export default ConsentForm