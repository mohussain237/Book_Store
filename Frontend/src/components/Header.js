import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";


const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography  style={{ fontSize: '30px' }}>
             Books
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "70%" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Books" />
            
            <NavLink to="/cart" style={{ color: "white" }}>
            <Typography  style={{ fontSize: '40px',marginLeft:'30px' }}>
            <ShoppingCartIcon/>
            </Typography>
          </NavLink>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
