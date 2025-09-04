"use client";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";

export default function FormRadioGroup({ name, label, options, ...props }) {
  const [field, meta] = useField(name);

  return (
    <FormControl error={meta.touched && Boolean(meta.error)}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup {...field} row>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
      {meta.touched && meta.error && (
        <FormHelperText error>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}