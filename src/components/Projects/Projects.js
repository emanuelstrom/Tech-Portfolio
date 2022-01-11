import React, { useState, useRef, useEffect } from "react";
import { Button, Typography, Box, Modal, Grid } from "@mui/material";
import "./Projects.css";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 920,
  maxWidth: "100vw",
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  outline: "none",
};

const Image = React.forwardRef(
  ({ title, alt, imgSrc, description, href }, ref) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <>
        <Grid
          xs={12}
          md={3}
          item
          p={2}
          className="image"
          ref={ref}
          onClick={handleOpen}
        >
          <Button
            className="btn test-btn"
            variant="outlined"
            size="large"
            sx={[
              {
                color: "#8a9689",
                borderColor: "#8a9689",
                fontWeight: 700,
                fontSize: 16,
                borderWidth: "2px",
              },
              {
                "&:hover": {
                  backgroundColor: "#8a9689",
                  borderColor: "#8a9689",
                  color: "#fff",
                  borderWidth: "2px",
                },
                "&:visited": { color: "#fff" },
              },
            ]}
          >
            Read More
          </Button>
          <img src={imgSrc} alt={alt} />
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-image">
              <img src={imgSrc} alt={alt} />
            </div>

            <Box sx={{ padding: 2 }}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ fontWeight: 700, fontSize: "28px" }}
              >
                {title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ my: 2 }}>
                {description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  className="btn"
                  variant="outlined"
                  size="large"
                  href={href}
                  target="_blank"
                  sx={[
                    {
                      color: "#fff",
                      borderColor: "#8a9689",
                      bgcolor: "#8a9689",
                      fontWeight: 700,
                      fontSize: 16,
                      borderWidth: "2px",
                      transition: "all .2s ",
                    },
                    {
                      "&:hover": {
                        backgroundColor: "#8a9689",
                        borderColor: "#8a9689",
                        color: "#fff",
                        borderWidth: "2px",
                        transform: "scale(1.1)",
                      },
                      "&:visited": { color: "#fff" },
                    },
                  ]}
                >
                  Visit page
                </Button>
                <CloseIcon
                  onClick={handleClose}
                  sx={{ cursor: "pointer", color: "#808080" }}
                />
              </Box>
            </Box>
          </Box>
        </Modal>
      </>
    );
  }
);

const Projects = () => {
  const [value, setValue] = useState("1");

  return (
    <div className="projects-container" id="Projects">
      <div className="hero-text-wrapper">
        <Typography
          className="hero-text"
          sx={{ fontWeight: 700, fontSize: 40 }}
        >
          PROJECTS
        </Typography>
      </div>

      <Grid container className="image-slider">
        <Image
          title="Spotify Clone"
          alt="spotify clone"
          imgSrc="./images/Spotify.png"
          description="Comming soon!"
        />
        <Image
          title="Web shop"
          alt="web shop"
          imgSrc="./images/thumb-2.png"
          description="decription "
        />
        <Image
          title="Klarna Checkout"
          alt="klarna checkout"
          imgSrc="./images/Klarna-checkout.png"
          description="I have created a Klarna Checkout solution ready to be implemented live."
          href="https://klarna-checkout-emanuel.herokuapp.com/checkout/AAA-123"
        />
        <Image
          title="Coolors Clone"
          alt="Coolors Clone"
          imgSrc="./images/coolors.png"
          description="I created a clone of coolors.co together with two friends using React.js and Tailwind."
          href="https://gifted-gates-8403ec.netlify.app/0d50e1-0075e4-0082b0-00876d-3e863c"
        />

        <Image
          title="Chat App"
          alt="chat-app"
          imgSrc="./images/chat-app.png"
          description="Created a chat app with two friends using Next.js, Firebase and Tailwind"
          href="https://chat-app-immatheus.vercel.app/register"
        />
      </Grid>
    </div>
  );
};

export default Projects;
