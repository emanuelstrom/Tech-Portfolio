import React from "react";
import { Typography, Divider, Grid } from "@mui/material";
import "./About.css";
import { Speed, Devices, Lightbulb, RocketLaunch } from "@mui/icons-material";

const PlaceHolder = ({ icon, title, paragraph }) => {
  return (
    <Grid item xs={6} md={3} p={2}>
      <div className="placeHolder">
        <div className="circle">{icon}</div>
        <h3 className="title">{title}</h3>
        <p>{paragraph}</p>
      </div>
    </Grid>
  );
};

const ExperienceBar = ({ children, percentage }) => {
  return (
    <div className="experiencebar">
      <div className="bar-fill" style={{ width: percentage }}>
        <div className="experience-title">{children}</div>
        <div className="animation-bar" />
      </div>
      <span>{percentage}</span>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div className="hero-text-wrapper" id="About">
        <Typography
          className="hero-text"
          sx={{ fontWeight: 700, fontSize: 40 }}
        >
          ABOUT
        </Typography>
      </div>

      <Grid
        container
        spacing={0}
        sx={{
          margin: "50px auto",
          width: "100%",
          maxWidth: "1200px",
        }}
        p={{ xs: 1, sm: 2, md: 3 }}
      >
        <PlaceHolder
          icon={<Speed />}
          title="On-Time"
          paragraph="Making sure we set and reach deadlines is my specialty."
        />
        <PlaceHolder
          icon={<Devices />}
          title="Responsive"
          paragraph="My layouts will work on any device, big or small."
        />
        <PlaceHolder
          icon={<Lightbulb />}
          title="Innovative"
          paragraph="I always bring new ideas of improvement to the table."
        />
        <PlaceHolder
          icon={<RocketLaunch />}
          title="Results"
          paragraph="I always try to do the most valuable things I can do for the team."
        />
      </Grid>
      <Grid
        container
        spacing={0}
        p={5}
        sx={{ margin: "100px auto", width: "100%", maxWidth: "1200px" }}
      >
        <Grid item xs={12} md={6} sx={{ p: 2 }}>
          <img
            className="profile-picture"
            src={"/Emanuel.jpg"}
            alt={"Emanuel Ström"}
          />
          <Typography sx={{ fontWeight: 700, fontSize: 40 }}>
            Who's this?
          </Typography>
          <p className="biography">
            I'm a Front-End Developer who has attended{" "}
            <a href="https://www.academy.techover.nu/" target="_blank">
              Techover Academy
            </a>{" "}
            in Stockholm, Sweden. <br />
            <br /> I have serious passion for UI effects, animations and
            creating intuitive, dynamic user experiences.{" "}
            <a href="#contact">Let's make something special.</a>
          </p>
        </Grid>
        <Grid item xs={12} md={6} p={2}>
          <ExperienceBar percentage="100%">CSS</ExperienceBar>
          <ExperienceBar percentage="90%">HTML</ExperienceBar>
          <ExperienceBar percentage="90%">JavaScript</ExperienceBar>
          <ExperienceBar percentage="75%">React</ExperienceBar>
          <ExperienceBar percentage="75%">Redux</ExperienceBar>
          <ExperienceBar percentage="75%">Node.js</ExperienceBar>
          <ExperienceBar percentage="70%">Express</ExperienceBar>
          <ExperienceBar percentage="70%">MongoDB</ExperienceBar>
          <ExperienceBar percentage="70%">REST API</ExperienceBar>
          <ExperienceBar percentage="60%">NPM</ExperienceBar>
          <ExperienceBar percentage="60%">Git</ExperienceBar>
        </Grid>
      </Grid>

      <a
        href="https://www.academy.techover.nu/"
        target="_blank"
        className="techover-link"
      >
        <img
          className="techover-logo"
          src={"/techover-logo.png"}
          alt={"Techover Logo"}
        />
        <p className="techover-slogan">Certified by Techover Academy, 2022</p>
      </a>
    </div>
  );
};

export default About;
