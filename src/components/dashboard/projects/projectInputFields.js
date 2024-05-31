import { useFormik } from 'formik';

const projectInputFields = (initialValues, onSubmit,validationSchema, handleFieldChange,handleFileChange) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const inputs = [
    {
      id: "name",
      type: "text",
      name: "name",
      title: "Name",
      value: formik.values.name,
    },
    {
      id: "supervisorName",
      type: "text",
      name: "supervisorName",
      title: "SupervisorName",
      value: formik.values.supervisorName,
    },
    
  ];

  return { formik, inputs };
};

export default projectInputFields;