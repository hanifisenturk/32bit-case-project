import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function LoginButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: "#fff",
        fontSize: "1.6rem",
        color: "#000",
        width: "10rem",
        "&:hover": {
          backgroundColor: "#fff",
        },
      }}
    >
      {t("login")}
    </Button>
  );
}

export default LoginButton;
