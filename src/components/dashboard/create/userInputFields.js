import { useFormik } from 'formik';

const userInputFields = (initialValues, onSubmit, handleFieldChange) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
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
        id: "officeHours",
        type: "text",
        name: "officeHours",
        title: "officeHours",
        value: formik.values.officeHours,
      },
   
  ];

  return { formik, inputs };
};

export default userInputFields;
