import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box sx={{display:'flex',justifyContent:"center" ,textAlign:'center',padding:3}} >

<Typography sx={{fontFamily:'times new roman' ,fontSize:59,fontWeight:'bold '}}  >welcome home </Typography>

    </Box>
  );
}
