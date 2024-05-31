import { useFormik } from 'formik';

const userInputFields = (initialValues, onSubmit, validationSchema) => {
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
      onChange: formik.handleChange,
    },
    {
      id: "email",
      type: "email",
      name: "email",
      title: "Email",
      value: formik.values.email,
      onChange: formik.handleChange,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: "Password",
      value: formik.values.password,
      onChange: formik.handleChange,
    },
    {
      id: "phoneNumber",
      type: "text",
      name: "phoneNumber",
      title: "PhoneNumber",
      value: formik.values.phoneNumber,
      onChange: formik.handleChange,
    },
    {
      id: "officeHours",
      type: "text",
      name: "officeHours",
      title: "officeHours",
      value: formik.values.officeHours,
      onChange: formik.handleChange,
    },
  ];

  return { formik, inputs };
};

export default userInputFields;
