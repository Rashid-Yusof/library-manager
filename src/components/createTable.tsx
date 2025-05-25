import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

type CreateTableProps = {
  data: Array<{ [key: string]: any }>;
  buttons: Array<string>;
};

const CreateTable = ({ data, buttons }: CreateTableProps) => {
  // Get table headers from keys of the first object
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell key={header}>{header}</TableCell>
          ))}
          <TableCell>
          Actions
        </TableCell>
        </TableRow>
        
      </TableHead>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {headers.map((key) => (
              <TableCell key={key}>
                {row[key]}
              </TableCell>
            ))}
            <TableCell>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              {buttons.map((label) => (
              <Button>{label}</Button>
            ))}
            </ButtonGroup>
          </TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CreateTable;