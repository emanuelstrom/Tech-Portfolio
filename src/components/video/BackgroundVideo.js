import * as React from "react";
import background from "./background.mp4";
import "./BackgroundVideo.css";
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function BackgroundVideo() {
  return (
    <div className="videoContainer" id="Home">
      <video autoPlay loop muted className="backgroundVideo">
        <source src={background} />
      </video>
      <Typography
        className="primaryText"
        sx={{
          fontSize: {
            xs: 18, // theme.breakpoints.up('xs')
            sm: 24, // theme.breakpoints.up('sm')
            md: 36, // theme.breakpoints.up('md')
            lg: 44, // theme.breakpoints.up('lg')
            xl: 54, // theme.breakpoints.up('xl')
          },
        }}
      >
        Hello, I'm <i className="greenText">Emanuel Ström</i>{" "}
        <Typography
          sx={{
            fontSize: {
              xs: 18, // theme.breakpoints.up('xs')
              sm: 24, // theme.breakpoints.up('sm')
              md: 36, // theme.breakpoints.up('md')
              lg: 44, // theme.breakpoints.up('lg')
              xl: 54, // theme.breakpoints.up('xl')
            },
          }}
        >
          I'm a full-stack web developer{" "}
        </Typography>
        <Button
          className="btn"
          variant="outlined"
          size="large"
          href="#About"
          sx={[
            {
              color: "#fff",
              borderColor: "#fff",
              fontWeight: {
                xs: 300, // theme.breakpoints.up('xs')
                sm: 400, // theme.breakpoints.up('sm')
                md: 500, // theme.breakpoints.up('md')
                lg: 600, // theme.breakpoints.up('lg')
                xl: 700, // theme.breakpoints.up('xl')
              },
              fontSize: {
                xs: 12, // theme.breakpoints.up('xs')
                sm: 14, // theme.breakpoints.up('sm')
                md: 16, // theme.breakpoints.up('md')
                lg: 18, // theme.breakpoints.up('lg')
                xl: 18, // theme.breakpoints.up('xl')
              },
            },
            {
              "&:hover": {
                backgroundColor: "#8A9689",
                borderColor: "#8A9689",
              },
              "&:visited": { color: "#fff" },
            },
          ]}
        >
          View my work <ArrowForwardIcon className="btn-icon" />
        </Button>
      </Typography>
    </div>
  );
}
