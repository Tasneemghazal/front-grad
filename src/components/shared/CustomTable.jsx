import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CustomTable({ columns, data, onDelete }) {
  return (
    <TableContainer component={Paper} sx={{ border: "1px solid rgba(43, 1, 62, 0.5)" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns && columns.map((column, index) => (
              <TableCell key={index} align="center">{column}</TableCell>
            ))}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns && columns.map((column, colIndex) => (
                <TableCell key={colIndex} align="center">
                  {row[column]}
                </TableCell>
              ))}
              <TableCell align="center">
                <IconButton onClick={() => onDelete(row._id)} aria-label="delete">
                  <DeleteIcon sx={{color:"#880909"}}/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
