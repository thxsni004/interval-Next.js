"use client";
import { Button, Typography, Box } from "@mui/material";
import { useField, useFormikContext } from "formik";

export default function FileUploadField({ name, label }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFieldValue(name, file);
    } else {
      alert("File size must be less than 5MB");
    }
  };

  return (
    <Box sx={{ mb: 3 }}>

      {/* label + upload button in one row */}
      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1">{label}</Typography>
        <Button variant="outlined" component="label" size="small">
          Upload File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
      </Box>

      {/* file name below the label */}

      {field.value && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mt: 1 }}
        >
          {field.value.name}
        </Typography>
      )}

      {/* error message */}

      {meta.touched && meta.error && (
        <Typography color="error" variant="caption" sx={{ display: "block" }}>
          {meta.error}
        </Typography>
      )}
    </Box>
  );
}
