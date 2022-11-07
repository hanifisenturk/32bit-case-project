import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";

function Home({ headerHeight }) {
  const { t } = useTranslation();
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        minHeight: "80vh",
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: "3.2rem",
          fontWeight: "bold",
          maxWidth: "80rem",
          marginTop: "2.4rem",
          textAlign: "center",
        }}
      >
        {t("text")}
      </Typography>
    </Box>
  );
}

export default Home;
