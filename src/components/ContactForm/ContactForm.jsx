import { useId } from "react";

import { useAppContext } from "../../store/store";

import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

import { contactSchema } from "../../utilities/validationSchemas/contactSchema";

import { toast } from "react-toastify";

import CountrySelector from "../CountrySelector/CountrySelector";

import "../../overrides.css";

import {
  Box,
  TextField,
  Button,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";

function ContactForm() {
  const { t } = useTranslation();
  const nameId = useId();
  const mailId = useId();
  const messageId = useId();
  const telephoneId = useId();
  const countryId = useId();

  const navigate = useNavigate();

  const { state } = useAppContext();

  const navigateHandler = () => navigate("/");

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataObj = {
      name: data.get("name"),
      mail: data.get("mail"),
      message: data.get("message"),
      telephone: data.get("telephone"),
      country: data.get("country"),
    };

    try {
      await contactSchema.validate(dataObj);
      console.log(dataObj);
      await fetch("https://formspree.io/f/xjvzpqdr", {
        method: "POST",
        body: JSON.stringify(dataObj),
        headers: {
          Accept: "application/json",
        },
      });

      toast.success("Your message has been sent!");
      navigateHandler();
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  return (
    <Box
      onSubmit={submitHandler}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
      component="form"
    >
      <Box>
        <InputLabel sx={{ fontSize: "1rem" }} htmlFor={nameId}>
          {t("name")}
        </InputLabel>
        <TextField
          name="name"
          defaultValue={state.name}
          id={nameId}
          required
          type="text"
          fullWidth
          sx={{ "&.MuiInputBase-input": { fontSize: "1.8rem !important" } }}
        />
      </Box>
      <Box>
        <InputLabel sx={{ fontSize: "1rem" }} htmlFor={mailId}>
          {t("mail")}
        </InputLabel>
        <TextField
          defaultValue={state.mail}
          name="mail"
          id={mailId}
          required
          type="email"
          fullWidth
        />
      </Box>
      <Box>
        <InputLabel sx={{ fontSize: "1rem" }} htmlFor={telephoneId}>
          {t("telephone")}
        </InputLabel>
        <TextField
          name="telephone"
          id={telephoneId}
          required
          type="tel"
          fullWidth
        />
      </Box>
      <Box>
        <InputLabel sx={{ fontSize: "1rem" }} htmlFor={messageId}>
          {t("message")}
        </InputLabel>
        <TextareaAutosize
          style={{
            width: "100%",
            minHeight: "180px",
            fontSize: "1.4rem",
            padding: "1rem",
          }}
          name="message"
          id={messageId}
          required
          type="text"
          placeholder={t("messagePlaceholder")}
          spellCheck={false}
        />
      </Box>
      <Box>
        <InputLabel sx={{ fontSize: "1rem" }} htmlFor={countryId}>
          {t("country")}
        </InputLabel>
        <CountrySelector />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          fontSize: "1.6rem",
        }}
      >
        <Button
          sx={{
            fontSize: "inherit",
            backgroundColor: "#FB2576",
            color: "white",
          }}
          type="submit"
        >
          {t("send")}
        </Button>
        <Button
          onClick={navigateHandler}
          sx={{ color: "red", fontSize: "inherit" }}
        >
          {t("cancel")}
        </Button>
      </Box>
    </Box>
  );
}

export default ContactForm;
