import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  TablePagination
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Close as CloseIcon,
  Done as DoneIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SpringModal from './SpringModal';
import Confirm from '../Supervisor/supervisor_2/Confirm.jsx';
import ConfirmDelete from './ConfirmDelete.jsx';

const RedTableHead = styled(TableHead)({
  backgroundColor: '#135D66',
  color: '#fff'
});

export default function CustomTable({
  columns,
  data,
  onDelete,
  flag = true,
  request = true,
  getSectionNum
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowDataForConfirm, setRowDataForConfirm] = useState(null);
  const [sectionNumbers, setSectionNumbers] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [rowDataForDelete, setRowDataForDelete] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchSectionNumbers = async () => {
      const sectionNums = {};
      for (const row of data) {
        try {
          const res = await getSectionNum(row.sectionId);
          sectionNums[row.sectionId] = res;
        } catch (error) {
          console.error('Error fetching section number:', error);
        }
      }
      setSectionNumbers(sectionNums);
    };
    fetchSectionNumbers();
  }, [data, getSectionNum]);

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

  const handleDeleteConfirmation = (rowId) => {
    setRowDataForDelete(rowId);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    onDelete(rowDataForDelete);
    setIsDeleteModalOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = sortedData().filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const getColumnName = (columnName) => {
    if (columnName === 'depId') {
      return 'Department Name';
    }
    if (columnName === 'sectionId') {
      return 'Section Number';
    }
    if (columnName === 'studentId') {
      return 'Student Name';
    }
    if (columnName === 'students') {
      return 'Student Names';
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
      <TableContainer component={Paper} sx={{ border: '1px solid #135D66' }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <RedTableHead>
            <TableRow>
              {columns &&
                columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    onClick={() => handleSort(column)}
                    sx={{ color: "#fff" }}
                  >
                    {getColumnName(column)} {/* Display custom column name */}
                    {sortConfig.key === column && (
                      sortConfig.direction === 'ascending' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                    )}
                  </TableCell>
                ))}
              <TableCell align="center" sx={{ color: "#fff" }}>Actions</TableCell>
            </TableRow>
          </RedTableHead>
          <TableBody>
            {paginatedData &&
              paginatedData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns &&
                    columns.map((column, colIndex) => (
                      <TableCell key={colIndex} align="center">
                        {Array.isArray(row[column]) ? row[column].join('-') :
                          column === 'sectionId' ? sectionNumbers[row[column]] :
                          column === 'studentId' ? row.studentName :
                          column === 'Student Names' ? row.studentsNames.join(', ') :
                          row[column]}
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
                      <IconButton onClick={() => handleDeleteConfirmation(row._id)} aria-label="delete">
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <SpringModal
        closeModal={handleCloseDeleteModal}
        isModalOpen={isDeleteModalOpen}
        modalContent={
          <ConfirmDelete
            handleDeleteConfirm={handleDelete}
            closeModal={handleCloseDeleteModal}
          />}
      />
      <SpringModal closeModal={handleCloseModal} isModalOpen={isModalOpen} modalContent={<Confirm {...rowDataForConfirm} closeModal={handleCloseModal} />} />
    </div>
  );
}
