import React from "react";
import { Box } from "@mui/material";

function IframeMap() {
  return (
    <Box sx={{ height: "100%", flexBasis: { xs: "auto", md: "50%" } }}>
      <div style={{ position: "relative", overflow: "hidden", height: "100%" }}>
        <iframe
          title="Address"
          src="https://yandex.com.tr/map-widget/v1/-/CCU6bWF4gB"
          allowfullscreen="true"
          style={{ position: "relative", height: "450px", width: "100%" }}
        ></iframe>
      </div>
    </Box>
  );
}

export default IframeMap;
