import React, { useContext } from 'react';
import { effect } from '@preact/signals-react';
import { ConsentContext } from '../App';

const ConsentList = () => {

    const { consents } = useContext(ConsentContext)
    console.log('in list', consents)
    effect(() => console.log('anything', consents))
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