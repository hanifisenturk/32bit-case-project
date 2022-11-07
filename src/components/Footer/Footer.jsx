import { Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const currentYear = new Date().getFullYear();

function Footer() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundColor: "#FB2576",
        color: "#fff",
        padding: "2.4rem",

        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link style={{ color: "#fff" }}>
        <Typography sx={{ fontSize: "1.4rem" }}>{t("madeWith")}</Typography>
      </Link>
      <Typography sx={{ fontSize: "1.4rem" }}>
        {currentYear} {t("rights")}
      </Typography>
    </Box>
  );
}

export default Footer;
