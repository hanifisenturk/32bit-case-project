import Stack from "@mui/material/Stack";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useAppContext } from "../../store/store";
import i18n from "../../utilities/Internationalization/Internationalization";
import useLocalStorage from "../../hooks/useLocalStorage";

function ToggleSelector() {
  const { state, dispatch } = useAppContext();

  const [storedValue, setValue] = useLocalStorage("user", state);

  const handleChange = (event, newLanguage) => {
    i18n.changeLanguage(newLanguage);
    if (newLanguage !== null) {
      dispatch({
        type: "SET_CURRENT_LANGUAGE",
        payload: newLanguage,
      });
      setValue({ ...state, currentLanguage: newLanguage });
    }
  };

  return (
    <Stack>
      <ToggleButtonGroup
        value={state.currentLanguage}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
      >
        <ToggleButton value="en" aria-label="English">
          EN
        </ToggleButton>
        <ToggleButton value="tr" aria-label="Turkish">
          TR
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ToggleSelector;
