import React, { useContext, useEffect, useState } from 'react';
import { RequestContext } from '../../context/RequestContextProvider.jsx';
import CustomTable from '../../shared/CustomTable.jsx';
import axios from 'axios';

export default function SupervisorTab3() {
    const { getRequests } = useContext(RequestContext);
    const [tableData, setTableData] = useState([]);
    const [tableColumns, setTableColumns] = useState([]);
    const [rejRequest, setRejRequest] = useState([]); // Initialize as an object
    const reject = async (requestId,sectionId) => {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/supervisor/reject`,{requestId,sectionId});
        console.log(data);
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
    return (
        <>
            <CustomTable data={tableData} columns={tableColumns} request={false} onDelete={reject}/>
        </>
    );
}
