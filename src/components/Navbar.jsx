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
import TableContent from "./TableContent";
import { ThemeContext } from "./theme/Theme";
import useEMI from "./custome/useEmi";
import { NavLink } from "react-router";

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  

  return (
    <>
      {/* --------Navbar------- */}
      <AppBar>
        <Toolbar sx={{ gap: 4 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
          <NavLink to="/" className={({isActive})=>isActive?"active-button" : "default-button"}>
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/exchangerate" className="navlinks">
            <Button color="inherit">EXCHANGE RATES (LIVE)</Button>
          </NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?"active-button" : "default-button"}>
            <Button color="inherit">ABOUT</Button>
          </NavLink>
          <NavLink to="/errorpg" className="navlinks">
            <Button color="inherit">ERROR PAGE</Button>
          </NavLink>

          <CssBaseline />
          <Switch checked={mode === "dark"} onChange={toggleTheme} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
