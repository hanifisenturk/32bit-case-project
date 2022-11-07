import { Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import { useAppContext } from "./../store/store";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import IframeMap from "../components/IframeMap/IframeMap";
import { useTranslation } from "react-i18next";

const AccessDenied = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets4.lottiefiles.com/packages/lf20_Nztgys.json"
      style={{ height: "300px", width: "300px" }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
};

function Contact({ headerHeight }) {
  const { t } = useTranslation();
  const { state } = useAppContext();
  return (
    <Box
      component="section"
      sx={{
        padding: "2.4rem",
      }}
    >
      <Typography
        sx={{
          fontSize: "3.2rem",
          fontWeight: "bold",
          marginBottom: "2.4rem",
        }}
        component="h2"
      >
        {t("Contact")}
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "2.4rem",
        }}
      >
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "50%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: `calc(100vh - ${headerHeight}px)`,
            }}
            component="section"
          >
            {state.isLogged ? <ContactForm /> : <AccessDenied />}
          </Box>
        </Box>
        <IframeMap />
      </Box>
    </Box>
  );
}

export default Contact;
