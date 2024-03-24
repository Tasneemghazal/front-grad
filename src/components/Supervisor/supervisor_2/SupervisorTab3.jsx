import React, { useContext, useEffect, useState } from 'react';
import { RequestContext } from '../../context/RequestContextProvider.jsx';
import CustomTable from '../../shared/CustomTable.jsx';
import axios from 'axios';
import SpringModal from '../../shared/SpringModal.jsx';
import { Box, Button, Typography } from '@mui/material';
import { SectionContext } from '../../context/SectionContextProvider.jsx';

export default function SupervisorTab3() {
    const { getRequests } = useContext(RequestContext);
    const [tableData, setTableData] = useState([]);
    const [tableColumns, setTableColumns] = useState([]);
    const [rejRequest, setRejRequest] = useState({ requestId: null, sectionId: null }); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { getSections } = useContext(SectionContext);

    const reject = async (requestId, sectionId) => {
        setRejRequest({ requestId, sectionId });
        setIsModalOpen(true);
    }

    const handleRejectConfirmation = async () => {
        const { requestId } = rejRequest;
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/supervisor/reject`, rejRequest);
            setTableData(prevData => prevData.filter(request => request._id !== requestId)); // Filter out the rejected request using its _id property
        } catch (error) {
            console.log(error);
        }
        setIsModalOpen(false);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { requests } = await getRequests();
                if (requests.length > 0) {
                    const reqKeys = Object.keys(requests[0]);
                    const columns = ["sectionId", "studentId", "text"];
                    setTableColumns(columns);
                    setTableData(requests);
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchSections = async () => {
            try {
                const sectionsData = await getSections();
                setTableData(prevData => prevData.map(request => ({
                    ...request,
                    sectionId: sectionsData.find(section => section._id === request.sectionId)?.num || request.sectionId
                })));
            } catch (error) {
                console.error('Error fetching sections:', error);
            }
        };
        fetchSections();
    }, []);

    // Define a function to handle deletion from table
    const handleDelete = async (requestId, sectionId) => {
        reject(requestId, sectionId); // Trigger reject action
    };

    return (
        <>
            <CustomTable data={tableData} columns={tableColumns} request={false} onDelete={handleDelete}/>
            <SpringModal
                isModalOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                modalContent={
                    <Box>
                    <Typography>Are you sure you want to reject this request?</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                        <Button 
                            onClick={handleRejectConfirmation} 
                            sx={{
                                border: "1px solid red",
                                color: "white",
                                backgroundColor: "red",
                                '&:hover': {
                                    backgroundColor: "rgba(255, 0, 0, 0.7)",
                                },
                            }}
                        >
                            Yes
                        </Button>
                        <Button 
                            onClick={() => setIsModalOpen(false)}
                            sx={{
                                border: "1px solid #1b5e20",
                                color: "white",
                                backgroundColor: "#1b5e20",
                                '&:hover': {
                                    backgroundColor: "#4caf50",
                                },
                            }}
                        >
                            No
                        </Button>
                    </Box>
                </Box>
                }
            />
        </>
    );
}
