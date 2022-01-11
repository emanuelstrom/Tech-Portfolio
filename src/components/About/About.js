import * as React from "react";
import "./About.css";
import { Typography, Grid, List, ListItem } from "@mui/material";
import {
  Speed,
  Devices,
  Lightbulb,
  RocketLaunch,
  FiberManualRecord,
} from "@mui/icons-material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

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

/* const ExperienceBar = ({ children, percentage }) => {
  return (
    <div className="experiencebar">
      <div className="bar-fill" style={{ width: percentage }}>
        <div className="experience-title">{children}</div>
        <div className="animation-bar" />
      </div>
      <span>{percentage}</span>
    </div>
  );
}; */

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
            <br />
            <br />
            After working as a photographer and getting a good sense of image
            and design so I became more and more interested in it digital. In
            the end, the interest became so great that I applied for it Techover
            academy.
            <br />
            <br />
            I have been coached by consultants in the IT industry who have
            learned me the MERN-stack. Now I can build web apps, e-commerce
            sites, custom system integrations and my own APIs.
            <br />
            <br />
            Using my programming skills along with my knowledge in photography
            and design, I now build stylish and advanced systems!
          </p>
        </Grid>
        <Grid item xs={12} md={6} p={2} sx={{ width: "100%", height: "100%" }}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#563d7c" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>CSS</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#e34c26" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>HTML</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#f1e05a" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>
                JavaScript
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#61dafb" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>React</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#764abc" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>Redux</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#84ba64" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>
                Node.js
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#555" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>
                Express
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#023430" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>
                MongoDB
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#ff6c37" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>
                REST API
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#cb3837" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>NPM</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#0A1929" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ fontWeight: 700 }}>Git</TimelineContent>
            </TimelineItem>
          </Timeline>

          {/*  <ExperienceBar percentage="100%">CSS</ExperienceBar>
          <ExperienceBar percentage="90%">HTML</ExperienceBar>
          <ExperienceBar percentage="90%">JavaScript</ExperienceBar>
          <ExperienceBar percentage="75%">React</ExperienceBar>
          <ExperienceBar percentage="75%">Redux</ExperienceBar>
          <ExperienceBar percentage="75%">Node.js</ExperienceBar>
          <ExperienceBar percentage="70%">Express</ExperienceBar>
          <ExperienceBar percentage="70%">MongoDB</ExperienceBar>
          <ExperienceBar percentage="70%">REST API</ExperienceBar>
          <ExperienceBar percentage="60%">NPM</ExperienceBar>
          <ExperienceBar percentage="60%">Git</ExperienceBar> */}
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
