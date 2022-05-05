import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import AccountCircle from "@mui/icons-material/AccountCircle";

import { Avatar, Badge, Button } from "@mui/material";
import { clientContext } from "../context/ClientContext";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const data = React.useContext(clientContext);
  const { authWithGoogle, user, logOut, cartCount } = data;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{ backgroundColor: "black" }}>
        <Toolbar className="navbar">
          <Link to="/">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Главная
            </Button>
          </Link>
          <Link to="/about">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              О нас
            </Button>
          </Link>
          <Link to="/product">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Продукция
            </Button>
          </Link>
          <Link to="/guarantee">
            <Button id="g" sx={{ my: 2, color: "white", display: "block" }}>
              Гарантия
            </Button>
          </Link>
          <Link to="/admin-panel">
            <Button sx={{ my: 2, color: "gray", display: "block" }}>
              Admin Panel
            </Button>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" }, alignItems: "center" }}>
            <Link to="/cart" style={{ marginRight: 10 }}>
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCart />
              </Badge>
            </Link>
            {user ? (
              <div>
                <Avatar
                  src={user.photoURL}
                  alt={user.displayName}
                  style={{ marginRight: 10 }}
                />

                <Button>
                  <Logout color="error" onClick={logOut} />
                </Button>
              </div>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls=""
                aria-haspopup="true"
                color="inherit"
                onClick={authWithGoogle}
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
