import { Box, Container, Typography, useTheme } from "@mui/material";
import React from 'react'
import { NavLink } from "react-router";

const ErrorPage = () => {

    const theme = useTheme();

  return (
    <>

      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column",gap:2,
        color: theme.palette.text.primary
      }}>
      <Typography variant="h4"  >
        Something went wrong in the application
      </Typography>
      <NavLink to="/" className="gohome">GO HOME</NavLink>

      </Box>
    
    </>
  )
}

export default ErrorPage