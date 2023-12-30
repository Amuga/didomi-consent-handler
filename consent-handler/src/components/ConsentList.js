import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { consents } from '../App'


const ConsentList = () => {

    console.log('in list', consents)
    console.log(consents?.value)

  return (
    <div style={{
      alignItems: 'center',
      margin: 'auto',
      textAlign: 'center'
      }}
    >
      <h2>List of Consents</h2>
      {consents?.value.length ?
      ( 
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%' }}
          aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='left'>Email</TableCell>
                <TableCell align='left'>Data Processes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consents.value.map((consent) => (
                <TableRow key={consent.email}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>{consent.name}</TableCell>
                  <TableCell component='th' scope='row'>{consent.email}</TableCell>
                  <TableCell component='th' scope='row'>{consent.selectedProcesses}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        )
      : 
        <div> There are no consents in the list</div>
      }
    </div>
  );
};

export default ConsentList;