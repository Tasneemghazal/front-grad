import { useFormik } from 'formik';

const studentInputFields = (initialValues, onSubmit,validationSchema, handleFieldChange) => {
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
      id: "email",
      type: "email",
      name: "email",
      title: "Email",
      value: formik.values.email,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: "Password",
      value: formik.values.password,
    },
    {
      id: "phoneNumber",
      type: "text",
      name: "phoneNumber",
      title: "PhoneNumber",
      value: formik.values.phoneNumber,
    },
    {
        id: "academicYear",
        type: "Number",
        name: "academicYear",
        title: "academicYear",
        value: formik.values.academicYear,
      },
      {
        id: "universityNum",
        type: "text",
        name: "universityNum",
        title: "universityNum",
        value: formik.values.universityNum,
      },
    
  ];

  return { formik, inputs ,resetForm: formik.resetForm};
};

export default studentInputFields;