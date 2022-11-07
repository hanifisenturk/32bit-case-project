import { List, ListItem, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

function NavLinks() {
  const { t } = useTranslation();
  return (
    <List
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {links.map((link) => {
        return (
          <ListItem key={uuidv4()}>
            <Link
              underline="none"
              component={RouterLink}
              sx={{
                fontSize: "1.8rem ",
                opacity: 0.8,
                color: "#fff",
                "&:hover": {
                  opacity: 1,
                },
              }}
              to={link.path}
            >
              {t(link.title)}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}

export default NavLinks;
