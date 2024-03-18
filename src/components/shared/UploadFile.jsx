import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { purple } from '@mui/material/colors';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadFile({ buttonText, onFileChange }) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileChange(file); 
    }
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{ my: 1,
        backgroundColor: "rgba(43, 1, 62, 0.5)",

      "&:hover": {
        backgroundColor: "rgba(43, 1, 62, 0.8)",
      },
    width: "100%",}}
    >
      {fileName ? fileName : buttonText}
      <VisuallyHiddenInput type="file" onChange={handleFileChange} />
    </Button>
  );
}
