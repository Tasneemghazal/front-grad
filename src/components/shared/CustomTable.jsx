import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';
import SpringModal from './SpringModal'; // Import your SpringModal component
import Confirm from '../Supervisor/supervisor_2/Confirm.jsx';

const RedTableHead = styled(TableHead)({
  backgroundColor: 'rgba(45, 3, 62, 0.4)', 
});

export default function CustomTable({ columns, data, onDelete, flag = true, request }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal open/close
  const [rowDataForConfirm, setRowDataForConfirm] = useState(null); // State to manage row data for Confirm component

  const sortedData = () => {
    let sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleConfirmClick = (rowId, sectionId) => {
    setRowDataForConfirm({ rowId, sectionId });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredData = sortedData().filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Function to display custom column names
  const getColumnName = (columnName) => {
    if (columnName === 'depId') {
      return 'Department Name';
    }
    return columnName;
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        sx={{ marginBottom: '10px' }}
      />
      <TableContainer component={Paper} sx={{ border: '1px solid rgba(43, 1, 62, 0.5)' }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <RedTableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index} align="center" onClick={() => handleSort(column)}>
                  {getColumnName(column)} {/* Display custom column name */}
                  {sortConfig.key === column && (
                    sortConfig.direction === 'ascending' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                  )}
                </TableCell>
              ))}
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </RedTableHead>
          <TableBody>
            {filteredData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} align="center">
                    {row[column]}
                  </TableCell>
                ))}
                <TableCell align="center">
                  {flag && (
                    request ? (
                      <Link to={`${row._id}`}>
                        <IconButton aria-label="edit">
                          <EditIcon sx={{ color: '#0b731b' }} />
                        </IconButton>
                      </Link>
                    ) : (
                      <IconButton aria-label="edit" onClick={() => handleConfirmClick(row._id, row.sectionId)}>
                        <DoneIcon sx={{ color: '#0b731b' }} />
                      </IconButton>
                    )
                  )}
                  {request ? (
                    <IconButton onClick={() => onDelete(row._id)} aria-label="delete">
                      <DeleteIcon sx={{ color: '#880909' }} />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => onDelete(row._id, row.sectionId)} aria-label="delete">
                      <CloseIcon sx={{ color: '#880909' }} />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SpringModal closeModal={handleCloseModal} isModalOpen={isModalOpen} modalContent={<Confirm {...rowDataForConfirm} />} />
    </div>
  );
}
