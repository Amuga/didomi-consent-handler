import React, { useState } from 'react';
import { signal, computed } from "@preact/signals-react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { consents } from '../App'


const ConsentList = () => {

    const currentPage = signal(1)
    const resultsPerPage = 2

    // Calculate the index of the first and last consent to show on the current page
    const indexOfLastResult = computed(() => currentPage * resultsPerPage)
    const indexOfFirstResult = computed(() => indexOfLastResult - resultsPerPage)
    // For some reasons using a singal/computed for currentResults wasn't working/properly updating when clicking pages, unsure why, but I went with a local state in the end.
    const [currentResults, setCurrentResults] = useState(consents?.value.slice(indexOfFirstResult, indexOfLastResult))

    const handlePaginate = index => {
      currentPage.value = index + 1
      setCurrentResults(consents?.value.slice(indexOfFirstResult, indexOfLastResult))
    }

  return (
    <div style={{
      alignItems: 'center',
      margin: 'auto',
      textAlign: 'center'
      }}
    >
      <h2>List of Consents</h2>
      {currentResults?.length ?
      ( 
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%',
            minWidth: '690px' }}
          aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='left'>Name</TableCell>
                <TableCell align='left'>Email</TableCell>
                <TableCell align='left'>Data Processes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentResults.map((consent) => (
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
      {/* Pagination */}
        {consents?.value.length > resultsPerPage && (
          <div style={{ marginTop: '20px'}}>
          {Array.from({ length: Math.ceil(consents.value.length / resultsPerPage) }, (_, index) => (
            <button style={{marginLeft: '5px'}} key={index + 1} onClick={() => handlePaginate(index)}>{index + 1}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsentList;