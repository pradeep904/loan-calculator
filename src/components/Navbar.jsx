import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
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
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import TableContent from "./TableContent";
import { ThemeContext } from "./theme/Theme";
import useEMI from "./custome/useEmi";
import { NavLink } from "react-router";
import DrawerComp from "./DrawerComp";

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* --------Navbar------- */}
      <AppBar>
        <Toolbar sx={{ gap: 4 }}>
          {isMatch ? (
            <>
              <DrawerComp />

              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Loan Calculator
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Loan Calculator
              </Typography>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-button" : "default-button"
                }
              >
                {({ isActive }) => (
                  <Button
                    color="inherit"
                    sx={{
                      bgcolor:isActive ? (mode === "dark" ? "#444444" : "#3888d8") : "transparent"
                    }}
                  >
                    Home
                  </Button>
                )}
              </NavLink>
              <NavLink
                to="/exchangerate"
                className={({ isActive }) =>
                  isActive ? "active-button" : "default-button"
                }
              >
                {({ isActive }) => (
                  <Button
                    color="inherit"
                    sx={{ bgcolor: isActive ? (mode === "dark" ? "#444444" : "#3888d8") : "transparent" }}
                  >
                    EXCHANGE RATES (LIVE)
                  </Button>
                )}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active-button" : "default-button"
                }
              >
                {({ isActive }) => (
                  <Button
                    color="inherit"
                    sx={{ bgcolor: isActive ? (mode === "dark" ? "#444444" : "#3888d8") : "transparent" }}
                  >
                    ABOUT
                  </Button>
                )}
              </NavLink>
              <NavLink
                to="/errorpg"
                className={({ isActive }) =>
                  isActive ? "active-button" : "default-button"
                }
              >
                {({ isActive }) => (
                  <Button
                    color="inherit"
                    sx={{ bgcolor: isActive ? (mode === "dark" ? "#444444" : "#3888d8") : "transparent" }}
                  >
                    ERROR PAGE
                  </Button>
                )}
              </NavLink>
            </>
          )}
          <CssBaseline />
          <Switch checked={mode === "dark"} onChange={toggleTheme} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
