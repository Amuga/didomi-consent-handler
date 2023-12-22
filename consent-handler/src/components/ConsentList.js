import React from 'react';
import { consents } from '../App'


const ConsentList = () => {

    console.log('in list', consents)
    console.log(consents?.value)

  return (
    <div>
      <h2>List of Consents</h2>
      {consents?.value.length ? 
        consents.value.map((consent) => (
          <div key={consent.email}>
            <p>Name: {consent.name}</p>
            <p>Email: {consent.email}</p>
            <p>Data Processes: {consent.selectedProcesses}</p>
          </div>
        ))
      : 
        <div> There are no consents in the list</div>
      }
    </div>
  );
};

export default ConsentList;