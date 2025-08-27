import IdProofForm from "./IdProofForm"
import { Box } from "@mui/material"

export default function page(){
    return(
        <Box sx={{ maxWidth: "42rem", mx: "auto", mt: 10 }}>
            <IdProofForm/>
        </Box>
    )
}