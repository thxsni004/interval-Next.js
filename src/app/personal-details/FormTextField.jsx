// "use client";
// import { TextField, Tooltip, IconButton, InputAdornment, Box } from "@mui/material";
// import { useField } from "formik";
// import InfoIcon from "@mui/icons-material/Info";

// export default function FormTextField({ label, tooltip, ...props }) {
//   const [field, meta] = useField(props);

//   return (
//     <Box sx={{ mb: 4 }}>
//       <TextField
//         {...field}
//         {...props}
//         fullWidth
//         label={label}
//         InputProps={{
//           endAdornment: tooltip ? (
//             <InputAdornment position="end">
//               <Tooltip title={tooltip} arrow>
//                 <IconButton size="small">
//                   <InfoIcon fontSize="small" />
//                 </IconButton>
//               </Tooltip>
//             </InputAdornment>
//           ) : null,
//         }}
//         error={meta.touched && Boolean(meta.error)}
//         helperText={meta.touched && meta.error}
//       />
//     </Box>
//   );
// }


"use client";
import { TextField, Tooltip, IconButton, InputAdornment, Box } from "@mui/material";
import { useField, useFormikContext } from "formik";
import InfoIcon from "@mui/icons-material/Info";

export default function FormTextField({ label, tooltip, onTooltipClick, ...props }) {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        {...field}
        {...props}
        fullWidth
        label={label}
        InputProps={{
          endAdornment: tooltip ? (
            <InputAdornment position="end">
              <Tooltip title={tooltip} arrow>
                <IconButton
                  size="small"
                  onClick={() => {
                    if (onTooltipClick) {
                     onTooltipClick();
                    }
                  }}
                >
                  <InfoIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ) : null,
        }}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </Box>
  );
}
