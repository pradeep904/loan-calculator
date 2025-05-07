import { Box,Paper,Table,TableBody,TableCell,TableContainer,TablePagination,TableRow,TableHead, Grid, Typography } from "@mui/material";
import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from "../contexts/CurrencyApi";
import Navbar from "../components/Navbar"


const ExchangeRate = () => {

    const { currencyData } = useContext(DataContext);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (e, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (e) => {
      setRowsPerPage(e.target.value);
      setPage(0);
    };
  
  const currencyCode=Object.entries(currencyData);
  

  return (
    <>  
        <Navbar/>

    <Box sx={{mt:15,height:"100vh",display:"flex", justifyContent:"center",alignItems:"center"}}>

      
    <Paper sx={{ width: '100%', overflow: 'hidden',padding:3 }}>
      <Box>
    <Typography variant="h6" >
      Live Exchange Rates (Base: USD)
      </Typography>
      <TableContainer  >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align="left" >Currency </TableCell>
                <TableCell align="right" >Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {currencyCode.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(([currency,row])=>(
              <TableRow key={currency}>
                <TableCell align="left" >{currency}</TableCell>
                <TableCell align="right">{row}</TableCell>
              </TableRow>
            ))}
                    
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={currencyCode.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Box>
    </Paper>
    </Box>
    </>
  )
}

export default ExchangeRate;