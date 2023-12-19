import React, { useContext } from 'react';
import { ConsentContext } from '../App';

const ConsentList = () => {

    const { consents } = useContext(ConsentContext)

  return (
    <div>
      <h2>List of Consents</h2>
      {consents?.value.map((consent) => (
        <div key={consent.email}>
          <p>Name: {consent.name}</p>
          <p>Email: {consent.email}</p>
          <p>Data Processes: {consent.selectedProcesses}</p>
        </div>
      ))}
    </div>
  );
};

export default ConsentList;