import { createTheme, ThemeProvider } from "@mui/material";
import { common } from "@mui/material/colors";
import  { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider=({children})=>{
  const [mode, setMode]= useState("light");

  const darkMode=createTheme({
   palette:{
     mode:mode,
     primary: {
      main: mode === "dark" ? "#90caf9" : "#1976d2",
    },
    background: {
      default: mode === "dark" ? "#121212" : "#ffffff",
      paper: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
      bgco:"rgba(0,0,0,0.54)"
    },
    
    text: {
      primary: mode === "dark" ? "#ffffff" : "#000000",
    },
   },
  });

  const toggleTheme=()=>setMode((prev)=>prev ==="light" ? "dark": "light")
  return(
    <ThemeContext.Provider value={{mode, toggleTheme}}>
      <ThemeProvider theme={darkMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
} ;



  

