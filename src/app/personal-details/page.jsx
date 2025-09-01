import { Box } from "@mui/material";
import PersonalDetailsForm from "./PersonalDetailsForm";

export default function Page() {
  return (
    <Box sx={{ width: "100%",}}>
      {/* <h1 className="text-2xl font-bold mb-6">Personal Details</h1> */}
      <PersonalDetailsForm />
    </Box>
  );
}