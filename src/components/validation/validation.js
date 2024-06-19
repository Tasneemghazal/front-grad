import * as Yup from 'yup';

export const signupValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(20, 'Name cannot be more than 20 characters long')
    .required('User name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters long')
    .max(20, 'Password cannot be more than 20 characters long')
    .required('Password is required'),
  
    phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  
  officeHours: Yup.string().required('Office hours are required'),
  depId: Yup.string().required('Department is required'),
});

export const depValidation = Yup.object().shape({
    name: Yup.string()
      .required('Department name is required'),
});

export const createProjectValidation = Yup.object().shape({
    name: Yup.string()
      .max(200, 'Name must be at most 200 characters')
      .required('Project name is required'),
      group: Yup.array()
      .of(
        Yup.string()
          .required('Student name is required')
          .min(1, 'Student name must be at least 1 character')
      )
      .min(1, 'At least one student name is required'),
    supervisorName: Yup.string()
      .min(3, 'Supervisor name must be at least 3 characters')
      .max(20, 'Supervisor name must be at most 20 characters')
      .required('Supervisor name is required'),
    depId: Yup.string()
      .matches(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId format')
      .required('Department is required'),
  });

export const studentValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(20, 'Name cannot be more than 20 characters long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters long')
    .max(20, 'Password cannot be more than 20 characters long')
    .required('Password is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  academicYear: Yup.number().min(1," academic year cannot be zero or negative")
    .required('Academic year is required'),
  depId: Yup.string()
    .matches(/^[0-9a-fA-F]{24}$/, 'Department ID must be a valid ObjectId')
    .required('Department ID is required'),
  universityNum:Yup.string().min(9).max(10).required('University Number is required')
});

export const annValidation = Yup.object().shape({
    subject: Yup.string()
      .required('Subject is required'),
      message: Yup.string()
      .required('Message is required'),
});

export const signInValidation = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(5, 'Password must be at least 5 characters long')
      .max(20, 'Password cannot be more than 20 characters long')
      .required('Password is required'),
  });

  export const techValidation = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(20, 'Name cannot be more than 20 characters long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
    subject: Yup.string()
      .required('Subject is required'),
      message: Yup.string()
      .required('Message is required'),
});
export const codeValidation = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
      
});

export const forgetValidation = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
    code:Yup.string().required('Code is required'),
});