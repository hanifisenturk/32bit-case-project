import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import DropdownSelector from "../LanguageSelector/DropdownSelector";
import LoginButton from "../Login/LoginButton";
import LoginModal from "../Login/LoginModal";
import { useAppContext } from "../../store/store";
import UserInfoDropdown from "../UserInfoDropdown/UserInfoDropdown";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { pathname } = useLocation();

  const { state } = useAppContext();

  return (
    <Box
      fullWidth
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2.4rem",
        backgroundColor: "#150050",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1.4rem",
          color: "#fff",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "2.4rem",
            fontWeight: "bold",
            color: "#fff",
          }}
          variant="span"
        >
          Ferrari
        </Link>

        <Typography
          sx={{
            fontSize: "1.6rem",
            opacity: 0.7,
          }}
          variant="span"
        >
          {pathname === "/"
            ? "Ferrari"
            : t(pathname[1].toUpperCase() + pathname.slice(2))}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",

          gap: ".8rem",
        }}
      >
        <NavLinks />
        <DropdownSelector />
        {!state.isLogged ? (
          <LoginButton
            onClick={() => setIsModalOpen((oldState) => !oldState)}
          />
        ) : (
          <UserInfoDropdown />
        )}
        <LoginModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Box>
    </Box>
  );
}

export default Header;
