import React from "react";
import "./Footer.css";
import { Button, Box, Typography } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material/";

const Footer = () => {
  return (
    <div className="footer-container">
      <Box sx={{ marginBottom: "20px" }}>
        <Button
          href="https://www.linkedin.com/in/emanuelstrom/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#262f38",
            width: "64px",
            height: "64px",
            color: "#fff",
            borderRadius: "0%",
            marginRight: "15px",
            "&:hover": { bgcolor: "#00c6ff" },
          }}
        >
          <LinkedIn sx={{ color: "#fff" }} />
        </Button>
        <Button
          href="https://github.com/emanuelstrom"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#262f38",
            width: "64px",
            height: "64px",
            color: "#fff",
            borderRadius: "0%",
            "&:hover": { bgcolor: "#00c6ff" },
          }}
        >
          <GitHub sx={{ color: "#fff" }} />
        </Button>
      </Box>
      <Box></Box>
      <Box sx={{ color: "#8f9aa7" }}>Emanuel Ström </Box>{" "}
      <Box sx={{ color: "#00c6ff" }}> ©2021 </Box>
    </div>
  );
};

export default Footer;
