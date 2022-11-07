import { useState } from "react";

import { Box, Button, Menu, MenuItem, Link } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../store/store";
import useLocalStorage from "../../hooks/useLocalStorage";
import ToggleSelector from "../LanguageSelector/ToggleSelector";

function UserInfoDropdown() {
  const { t } = useTranslation();
  const { state, dispatch } = useAppContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [storedValue, setValue] = useLocalStorage("user", state);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    setValue({
      name: "",
      mail: "",
      password: "",
      currentLanguage: state.currentLanguage,
      isLogged: false,
    });
    handleClose();
    navigate("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userName =
    state?.name.length > 15 ? state?.name.slice(0, 12) + "..." : state?.name;

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          backgroundColor: "#fff",
          color: "#150050",
          height: "100%",
          outline: "none",
          border: "none",
          "&:hover": {
            backgroundColor: "#fff",
          },
        }}
      >
        {userName}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem sx={{ display: { md: "none" } }} onClick={handleClose}>
          <Link
            underline="none"
            component={RouterLink}
            sx={{
              fontSize: "1.8rem ",
              opacity: 0.8,
              color: "#000",
              width: "100%",
            }}
            to="/"
          >
            {t("Home")}
          </Link>
        </MenuItem>
        <MenuItem sx={{ display: { md: "none" } }} onClick={handleClose}>
          <Link
            underline="none"
            component={RouterLink}
            sx={{
              fontSize: "1.8rem ",
              opacity: 0.8,
              color: "#000",
              width: "100%",
            }}
            to="/contact"
          >
            {t("Contact")}
          </Link>
        </MenuItem>
        <MenuItem sx={{ display: { md: "none" } }} onClick={handleClose}>
          <ToggleSelector />
        </MenuItem>
        <MenuItem sx={{ fontSize: "1.6rem" }}>{state.mail}</MenuItem>
        <MenuItem
          sx={{ fontSize: "1.6rem", color: "red" }}
          onClick={handleLogout}
        >
          {t("logout")}
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default UserInfoDropdown;
