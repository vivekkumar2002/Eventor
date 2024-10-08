import React from "react";
import "./Header.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logout from "../logout/Logout";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const pages = ["Home", "Event", "Venue", "Event Guest", "RSVP", "Contact us"];

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("authToken");
    // Add more actions as needed...

    // Navigate to the login page
    navigate("/login", { replace: true });
  };

  const userString = localStorage.getItem("user");

  // Parse the JSON string to get the user object
  const user = userString ? JSON.parse(userString) : null;

  // Get the username from the user object
  const username = user ? user.username : null;

  console.log(username);

  return (
    <div>
      <header className="header" data-header="">
        <div className="container">
          <a href="#">
            <h1 className="logo">Eventor</h1>
          </a>
          <button
            className="nav-toggle-btn"
            data-nav-toggle-btn=""
            aria-label="Toggle Menu"
          >
            <ion-icon name="menu-outline" className="open" />
            <ion-icon name="close-outline" className="close" />
          </button>
          <nav className="navbar">
            <ul className="navbar-list">
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <li className="navbar-link">
                    <Button
                      key={page}
                      component={Link}
                      to={`/${page.toLowerCase().replace(" ", "")}`}
                      sx={{
                        my: 0,
                        px: 2, // Add horizontal padding
                        py: 1, // Add vertical padding
                        fontSize: "16px",
                        color: "white", // Change text color for better contrast
                        backgroundColor: "purple", // Background color for the button
                        border: "1px solid black", // Define a border for better visibility
                        borderRadius: "8px", // Add rounded corners
                        "&:hover": {
                          backgroundColor: "lightblue", // Change this to set the hover background color
                          color: "green", // Change this to set the hover text color
                        },
                        display: "block",
                        textAlign: "center", // Center text inside the button
                      }}
                    >
                      {page}
                    </Button>
                  </li>
                ))}
              </Box>
            </ul>
            <Dropdown>
              <MenuButton> My Account</MenuButton>
              <Menu slots={{ listbox: Listbox }}>
                <MenuItem>{username}</MenuItem>
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Log Out</MenuItem>
              </Menu>
            </Dropdown>
          </nav>
        </div>
      </header>
    </div>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }
  `
);
