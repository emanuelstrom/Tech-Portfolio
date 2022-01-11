import * as React from "react";
import background from "./background.mp4";
import "./BackgroundVideo.css";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function BackgroundVideo() {
  return (
    <div className="videoContainer" id="Home">
      <video autoPlay loop muted className="backgroundVideo">
        <source src={background} />
      </video>
      <div className="primaryText">
        Hello, I'm <i className="blueText">Emanuel Ström</i>{" "}
        <p className="primaryTextSlogan">I'm a full-stack web developer </p>
        <Button
          className="btn"
          variant="outlined"
          size="large"
          href="#About"
          sx={[
            {
              color: "#fff",
              borderColor: "#fff",
              fontWeight: 700,
              fontSize: 18,
            },
            {
              "&:hover": {
                backgroundColor: "#00c6ff",
                borderColor: "#00c6ff",
              },
              "&:visited": { color: "#fff" },
            },
          ]}
        >
          View my work <ArrowForwardIcon className="btn-icon" />
        </Button>
      </div>
    </div>
  );
}
