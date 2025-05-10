import {
  Drawer,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { ThemeContext } from "./theme/Theme";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();

  const pages = [
    { name: "Home", path: "/" },
    { name: "EXCHANGE RATES (LIVE)", path: "/exchangerate" },
    { name: "About", path: "/about" },
    { name: "Error Page", path: "/errorpg" },
  ];

  const handleClose = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <Drawer open={openDrawer} onClose={handleClose}  >
        <>
          <List>
            {pages.map((page, index) => (
              <ListItem
                disablePadding
                key={index}
                onClick={() => setOpenDrawer(false)}
                sx={{ mb: 2}}
              >
                <NavLink
                  to={page.path}
                  className={({ isActive }) =>
                   ( isActive ? "activebutton"  :"defaultbutton" 
                  )}
                  style={{ marginLeft:"10px",textDecoration: "none", width: "100%", }}
                >
                  {({isActive})=>(
                      <ListItemButton
                      sx={{  width: "100%", borderRadius: "5px 0 0 5px",
                        "&:hover": {
                          backgroundColor: "transparent",    // Removes hover background
                        },
                       }}
                    >
                      <ListItemText 
                      primary={page.name}
                      className="drawer-text"
                      sx={{ color: isActive ? "#ffffff" : theme.palette.text.primary,
                       }}
                       />
                    </ListItemButton>
                  )}
                  
                </NavLink>
              </ListItem>
            ))}
          </List>
        </>
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
