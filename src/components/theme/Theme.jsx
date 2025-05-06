import { createTheme, ThemeProvider } from "@mui/material";
import  { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider=({children})=>{
  const [mode, setMode]= useState("light");

  const darkMode=createTheme({
   palette:{
     mode:mode,
   },
  });

  const toggleTheme=()=>setMode((prev)=>prev ==="light" ? "dark": "light")
  return(
    <ThemeContext.Provider value={{mode, toggleTheme}}>
      <ThemeProvider theme={darkMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
} ;



  

