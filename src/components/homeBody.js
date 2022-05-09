import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./homeBody.css";

function homeBody() {
  return (
    <div className="body">
      <Box sx={{ width: "80%" }} mt={12}>
        <Typography variant="h2" fontWeight={700}>
          VI UDVIKLER
        </Typography>
        <Typography variant="h2" fontWeight={700} mt={2} id="fadeIn">
          TOP PROFESSIONELLE
        </Typography>
        <Typography variant="h2" fontWeight={700} mt={2}>
          APPS OG HJEMMESIDER
        </Typography>
      </Box>
    </div>
  );
}

export default homeBody;
