import React, { useState, useEffect, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { SectionContext } from "../context/SectionContextProvider.jsx";
import { Avatar, Box, Button, Link } from "@mui/material";
import InputCom from "./InputCom.jsx";
import { useFormik } from "formik";
import { useSnackbar } from "../context/SnackbarProvider.jsx";
import axios from "axios";

export default function AccordionExpandIcon({ submissions }) {
  const { getSectionNum } = useContext(SectionContext);
  const { showSnackbar } = useSnackbar();
  const [sections, setSections] = useState([]);
  
  const initialValues = {
    feedback: submissions.map(() => ""), // Initialize feedback as an array
    taskIds: submissions.map(submission => submission.taskId),
  };

  const onSubmit = async (values) => {
    try {
      for (let i = 0; i < values.feedback.length; i++) {
        const feed = {
          feedback: values.feedback[i],
          taskId: values.taskIds[i],
        };

        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/supervisor/feedback`,
          feed
        );
        console.log(data);
        if (data.message === "success") {
          showSnackbar({
            message: "Feedback submitted successfully",
            severity: "success",
          });
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });

  useEffect(() => {
    const fetchSections = async () => {
      const sectionsData = await Promise.all(
        submissions.map((submission) => getSectionNum(submission.section))
      );
      setSections(sectionsData);
      console.log(sectionsData);
      formik.setFieldValue(
        "taskIds",
        submissions.map((submission) => submission.taskId)
      );
    };
    fetchSections();
  }, [submissions, getSectionNum]);

  return (
    <div style={{ textAlign: "center", border: "1px solid black" }}>
      {submissions &&
        submissions.map((submission, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon style={{ color: "rgba(43, 1, 62, 0.7)" }} />
              }
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Section: {sections[index]}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{backgroundColor:"#77B0AA", width:"40%", m:"auto",borderRadius:"5px"}}>Task : {submission.taskId.txt}</Typography>
              {submission.file && (
                <Box sx={{ textAlign: "center" }}>
                  The file that was delivered:
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    {submission.file && (
                      <Link href={submission.file}>
                        <Avatar
                          alt="pdf logo"
                          src="/image/file.png"
                          sx={{ border: "1px solid #000" }}
                        />
                      </Link>
                    )}
                  </Box>
                </Box>
              )}
              {submission.txt && (
                <Box>
                  The text that was delivered:{" "}
                  {submission.txt && <Typography>{submission.txt}</Typography>}
                </Box>
              )}
              {submission.taskId.feedback && (
                <Box>
                  <Typography sx={{backgroundColor:"#77B0AA", width:"40%", m:"auto",borderRadius:"5px"}}>Feedback:</Typography>
                  {submission.taskId.feedback && <Typography>{submission.taskId.feedback}</Typography>}
                </Box>
              )}
              <Box>
                <form
                  onSubmit={formik.handleSubmit}
                  encType="multipart/form-data"
                >
                  <InputCom
                    type="text"
                    name={`feedback[${index}]`}
                    id={`feedback-${index}`}
                    title="Feedback"
                    value={formik.values.feedback[index]}
                    placeholder="Feedback"
                    onChange={(e) => {
                      formik.setFieldValue(`feedback[${index}]`, e.target.value);
                    }}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.feedback && formik.touched.feedback[index]}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#135D66",
                      "&:hover": {
                        backgroundColor: "#77B0AA",
                      },
                      width: "100%",
                      mt: 1,
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
