import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
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
import TableContent from "../components/TableContent";
import useEMI from "../components/custome/useEmi";
import Navbar from "../components/Navbar";

const Home = () => {

  const { emi, calculateEMI, schedule,setSchedule,setEmi } = useEMI();
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("8.5");
  const [tenure, setTenure] = useState("5");


  return (
    <>
        <Navbar/>
      <Container sx={{ mt: 10 }}>
        <Typography variant="h4" gutterBottom>
          Loan Calculator Dashboard
        </Typography>

        <Grid container spacing={2}>
          <Grid item>
            <Box
              component="form"
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    display: "none",
                  },
                "& input": {
                  appearance: "textfield",
                },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Loan Amount"
                variant="outlined"
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                focused
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              component="form"
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    display: "none",
                  },
                "& input": {
                  appearance: "textfield",
                },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Interest Rate (%)"
                variant="outlined"
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              component="form"
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    display: "none",
                  },
                "& input": {
                  appearance: "textfield",
                },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Term (Years)"
                variant="outlined"
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </Box>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => calculateEMI(principal, rate, tenure)}
        >
          CALCULATE
        </Button>

        {emi !==null && <TableContent  emi={emi} schedule={schedule} setSchedule={setSchedule} setEmi={setEmi}/>}
        
      </Container>
    </>
  );
};

export default Home;
