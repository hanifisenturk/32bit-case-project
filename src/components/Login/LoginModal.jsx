import { useId } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";
import hash from "hash.js";

import "../../overrides.css";

import {
  Box,
  TextField,
  Typography,
  Button,
  InputLabel,
  Modal,
} from "@mui/material";
import { useAppContext } from "../../store/store";

import ToggleSelector from "../LanguageSelector/ToggleSelector";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginSchema } from "../../utilities/validationSchemas/loginSchema";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function LoginModal({ isOpen, onClose }) {
  const { state, dispatch } = useAppContext();

  const { t } = useTranslation();
  const nameId = useId();
  const mailId = useId();
  const passwordId = useId();

  const [storedValue, setValue] = useLocalStorage("user", state);

  const loginHandler = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const hashedPassword = hash
      .sha256()
      .update(data.get("password"))
      .digest("hex");
    const dataObj = {
      name: data.get("name"),
      mail: data.get("mail"),
      password: data.get("password"),
    };

    try {
      await loginSchema.validate(dataObj);
      dispatch({
        type: "LOGIN",
        payload: {
          ...dataObj,
          password: hashedPassword,
        },
      });
      setValue({
        ...dataObj,
        isLogged: true,
        currentLanguage: state.currentLanguage,
        password: hashedPassword,
      });

      onClose();
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <ToggleSelector />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2.4rem",
            fontWeight: "bold",
            marginBottom: "1.8rem",
          }}
        >
          {t("login")}
        </Typography>

        <Box
          onSubmit={loginHandler}
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            fontSize: "1.6rem",
          }}
        >
          <Box>
            <InputLabel sx={{ fontSize: "1.2rem" }} htmlFor={nameId}>
              {t("name")}
            </InputLabel>
            <TextField
              name="name"
              id={nameId}
              required
              type="text"
              fullWidth
              sx={{ fontSize: "inherit" }}
            />
          </Box>
          <Box>
            <InputLabel sx={{ fontSize: "1.2rem" }} htmlFor={mailId}>
              {t("mail")}
            </InputLabel>

            <TextField
              id={mailId}
              name="mail"
              required
              type="email"
              fullWidth
              sx={{ fontSize: "1.8rem" }}
            />
          </Box>
          <Box>
            <InputLabel sx={{ fontSize: "1.2rem" }} htmlFor={passwordId}>
              {t("password")}
            </InputLabel>
            <TextField
              name="password"
              required
              id={passwordId}
              type="password"
              fullWidth
              sx={{ fontSize: "1.8rem" }}
            />
          </Box>
          <Box
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
              fontSize: "1.4rem",
            }}
          >
            <Button
              type="submit"
              sx={{
                backgroundColor: "green",
                color: "#fff",
                padding: "1.2rem 2.4rem",
                fontSize: "inherit",

                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            >
              {t("login")}
            </Button>
            <Button
              onClick={onClose}
              sx={{
                color: "red",
                fontSize: "inherit",
              }}
            >
              {t("cancel")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginModal;
