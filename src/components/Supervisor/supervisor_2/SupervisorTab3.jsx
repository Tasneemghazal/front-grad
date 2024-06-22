import React, { useContext, useEffect, useState } from 'react';
import { RequestContext } from '../../context/RequestContextProvider.jsx';
import CustomTable from '../../shared/CustomTable.jsx';
import axios from 'axios';
import SpringModal from '../../shared/SpringModal.jsx';
import { SectionContext } from '../../context/SectionContextProvider.jsx';
import DeleteContent from '../../shared/DeleteContent.jsx';
import Title from '../../shared/title.jsx';
import { useSnackbar } from '../../context/SnackbarProvider.jsx';
import { userContext } from '../../context/StudentContextProvider.jsx';

export default function SupervisorTab3() {
    const { getRequests } = useContext(RequestContext);
    const { getStudentById } = useContext(userContext);
    const [tableData, setTableData] = useState([]);
    const [tableColumns, setTableColumns] = useState([]);
    const [rejRequest, setRejRequest] = useState({ requestId: null, sectionId: null });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { getSectionNum } = useContext(SectionContext);
    const { showSnackbar } = useSnackbar();

    const reject = async (requestId, sectionId) => {
        setRejRequest({ requestId, sectionId });
        setIsModalOpen(true);
    }

    const handleRejectConfirmation = async () => {
        const { requestId } = rejRequest;
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/supervisor/reject`, rejRequest);
            setTableData(tableData.filter(row => row.state !== 'rejected'));
            if (data.message === "success") {
                showSnackbar({ message: "Request rejected successfully", severity: "success" });
            }
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
                    const columns = ["sectionId", "studentId", "Student Names"];
                    setTableColumns(columns);
                    const enrichedRequests = await Promise.all(requests.filter(request => request.state === 'Pending').map(async request => {
                        const studentName = await getStudentById(request.studentId);
                        const studentsNames = await Promise.all(request.students.map(async studentId => {
                            const student = await getStudentById(studentId);
                            return student.user.name;
                        }));
                        return {
                            ...request,
                            studentName: studentName.user.name,
                            studentsNames
                        };
                    }));
                    console.log(enrichedRequests)
                    setTableData(enrichedRequests);
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    const getSectionNumber = async (secId) => {
        try {
            const res = await getSectionNum(secId);
            return res;
        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleDelete = async (requestId, sectionId) => {
        reject(requestId, sectionId);
    };

    return (
        <>
            <Title title={"Your requests"} />
            <CustomTable data={tableData} columns={tableColumns} request={false} onDelete={handleDelete} getSectionNum={getSectionNumber} />
            <SpringModal
                isModalOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                modalContent={<DeleteContent handleRejectConfirmation={handleRejectConfirmation} setIsModalOpen={setIsModalOpen} />}
            />
        </>
    );
}
