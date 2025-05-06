import { Box, Container, Typography } from "@mui/material";
import React from 'react'
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <>

      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column",gap:2}}>
      <Typography variant="h4"  >
        Something went wrong in the application
      </Typography>
      <NavLink to="/" className="gohome">GO HOME</NavLink>

      </Box>
    
    </>
  )
}

export default ErrorPage