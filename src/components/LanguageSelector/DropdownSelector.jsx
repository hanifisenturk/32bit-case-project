import { MenuItem, Select, Box } from "@mui/material";
import useLocalStorage from "../../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../../store/store";
import i18n from "../../utilities/Internationalization/Internationalization";

const providedLanguages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "tr",
    name: "Turkish",
  },
];

function DropdownSelector() {
  const { state, dispatch } = useAppContext();
  const [storedLanguage, setStoredLanguage] = useLocalStorage("user", state);

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    if (selectedLanguage !== null) {
      setStoredLanguage({ ...state, currentLanguage: selectedLanguage });
      dispatch({
        type: "SET_CURRENT_LANGUAGE",
        payload: selectedLanguage,
      });
    }
  };

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state.currentLanguage}
        label="Language"
        onChange={handleChange}
        sx={{
          backgroundColor: "#fff",
          fontSize: "1.6rem",
          width: "10rem",
          border: "none",
          outline: "none",
          "&:focus": {
            border: "none",
            outline: "none",
          },
        }}
      >
        {providedLanguages.map((language) => {
          return (
            <MenuItem
              key={uuidv4()}
              sx={{
                fontSize: "1.6rem",
              }}
              value={language.code}
            >
              {language.name}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
}

export default DropdownSelector;
