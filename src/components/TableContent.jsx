import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/CurrencyApi";

const TableContent = ({ emi, schedule,setSchedule, setEmi }) => {
  const [localCurrency, setLocalCurrency] = useState("USD");
  const { currencyData, searchTerm, setSearchTerm } = useContext(DataContext);

  const handleCurrencyChange = (e) => {
    setLocalCurrency(e.target.value);
    setSearchTerm(e.target.value);
  };
  const handleReset=()=>{
    setSchedule([]);
    setEmi(null);
  }

  const currencyCodes = Object.keys(currencyData);

  return (
    <>
    {emi !== null && schedule.length>0 &&(
    <>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Monthly EMI: ${emi ? emi : "0000"}
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <FormControl sx={{ width: 120 }}>
            <TextField
              select
              label="currency"
              value={localCurrency}
              defaultValue="EUR"
              onChange={handleCurrencyChange}
            >
              {currencyCodes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>

        <Grid item>
          <Button
            variant="outlined"
            sx={{ mt: 1, p: 1, color: "#c2185b", borderColor: "#c2185b" }}
            onClick={handleReset}
          >
            RESET TABLE
          </Button>
        </Grid>
      </Grid>

      <Paper sx={{ mt: 4, width: "100%" }}>
        <Typography variant="h5">
          Amortization Schedule ({localCurrency})
        </Typography>
        {schedule.length > 0 && (
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell align="center">Principal</TableCell>
                  <TableCell align="center">Interest</TableCell>
                  <TableCell align="right">Remaining Balance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.map((row) => (
                  <TableRow key={row.month}>
                    <TableCell sx={{ flexGrow: 2 }}>{row.month}</TableCell>
                    <TableCell align="center">
                      {row.principalPaid} {localCurrency}
                    </TableCell>
                    <TableCell align="center">
                      {row.interestPaid} {localCurrency}
                    </TableCell>
                    <TableCell align="right">
                      {row.remainingBalance} {localCurrency}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </>
    )}
    </>
  );
};


export default TableContent;
