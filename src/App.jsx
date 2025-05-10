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
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { ThemeContextProvider } from "./components/theme/Theme";

function App() {
  return (
    <>
        <ThemeContextProvider>
          {/* <Box bgcolor={"Background.default"}> */}
          <Box sx={{ backgroundColor: (theme) => theme.palette.background.default }} >
        <LandingPage/>
          </Box>

        </ThemeContextProvider>
    </>
  );
}

export default App;
