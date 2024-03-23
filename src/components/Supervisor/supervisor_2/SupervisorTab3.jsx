import React, { useContext, useEffect, useState } from 'react'
import { RequestContext } from '../../context/RequestContextProvider.jsx'
import { Paper } from '@mui/material';

export default function SupervisorTab3() {
    const { getRequests } = useContext(RequestContext);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { requests } = await getRequests();
            console.log(requests);
            setRequests(requests);
        }
        fetchData();
    }, []);

    return (
        <>
            {requests.map((req) => (
                <Paper key={req._id}>
                    {req.text}
                </Paper>
            ))}
        </>
    );
}
