import { Autocomplete, Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const countryList = [
  { code: "TR", label: "Turkey" },
  { code: "US", label: "United States of America" },
  { code: "GB", label: "United Kingdom" },
  { code: "DE", label: "Germany" },
  { code: "SE", label: "Sweden" },
  { code: "KE", label: "Kenya" },
  { code: "BR", label: "Brazil" },
  { code: "ZW", label: "Zimbabwe" },
];

function CountrySelector() {
  const { t } = useTranslation();
  return (
    <Autocomplete
      id="country-select-demo"
      fullWidth
      options={countryList}
      autoHighlight
      getOptionLabel={(option) => t(option.code.toLowerCase())}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ fontSize: "1.8rem", "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt="Flag"
          />
          {t(option.code.toLowerCase())} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          name="country"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}

export default CountrySelector;
