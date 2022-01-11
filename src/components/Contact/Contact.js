import React from "react";
import { Typography, Box, Button } from "@mui/material";
import "./Contact.css";
import DownloadIcon from "@mui/icons-material/Download";

const Contact = () => {
  return (
    <div className="contact-container" id="Contact">
      <Box className="hero-text-wrapper">
        <Typography
          className="hero-text-white"
          sx={{ fontWeight: 700, fontSize: 40 }}
        >
          CONTACT
        </Typography>
      </Box>
      <br />
      <Box>
        <Typography sx={{ color: "#00c6ff", fontWeight: 600 }}>
          Have a question or want to work together?
        </Typography>
        <br />
        <Typography
          sx={{ color: "#00c6ff", fontWeight: 600, marginBottom: "20px" }}
        >
          Email me at:{" "}
          <a style={{ color: "#fff" }} href="mailto:emanuel.strom@gmail.com">
            emanuel.strom@gmail.com
          </a>
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "100px" }}>
        <Button
          variant="outlined"
          sx={{
            marginRight: "10px",
            borderColor: "#fff",
            borderWidth: "2px",
            color: "#fff",
            fontWeight: 900,
            fontSize: "16px",
            padding: "5px 25px",
            "&:hover": {
              bgcolor: "#00c6ff",
              borderColor: "#00c6ff",
              borderWidth: "2px",
            },
            "&:visited": { color: "#fff" },
          }}
          href="mailto:emanuel.strom@gmail.com"
        >
          EMAIL ME
        </Button>
        <Button
          variant="outlined"
          sx={{
            marginRight: "10px",
            borderColor: "#fff",
            borderWidth: "2px",
            color: "#fff",
            fontWeight: 900,
            fontSize: "16px",
            padding: "5px 25px",
            "&:hover": {
              bgcolor: "#00c6ff",
              borderColor: "#00c6ff",
              borderWidth: "2px",
            },
            "&:visited": { color: "#fff" },
          }}
          endIcon={<DownloadIcon />}
          href="/Emanuel-Ström-CV.pdf"
          download
        >
          DOWNLOAD CV
        </Button>
      </Box>
    </div>
  );
};

export default Contact;
