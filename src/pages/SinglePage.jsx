import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import vizja from "../assets/poland/vizja.jpeg";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SinglePage() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Container>
        <img className="image" src={vizja} alt="" />
        <div className="price">
          <p>top: 1000</p>
        </div>
        <Link className="button" to={"/form"}>
          Ariza qoldirish
        </Link>
        <div className="accordion">
          <Accordion
            className="colorAccardion"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="var(--tg-theme-text-color)" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className="name" sx={{ width: "33%", flexShrink: 0 }}>
                Economics
              </Typography>
              <Typography className="info" sx={{ color: "text.secondary" }}>
                Bakalavr
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="info">
              <Typography>2.500 EUR (3 yil)</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium vitae facere itaque placeat minus impedit id, rem ea
                animi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="colorAccardion"
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="var(--tg-theme-text-color)" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className="name" sx={{ width: "33%", flexShrink: 0 }}>
                Economics
              </Typography>
              <Typography className="info" sx={{ color: "text.secondary" }}>
                Bakalavr
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="info">
              <Typography>2.500 EUR (3 yil)</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium vitae facere itaque placeat minus impedit id, rem ea
                animi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="colorAccardion"
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="var(--tg-theme-text-color)" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className="name" sx={{ width: "33%", flexShrink: 0 }}>
                Economics
              </Typography>
              <Typography className="info" sx={{ color: "text.secondary" }}>
                Bakalavr
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="info">
              <Typography>2.500 EUR (3 yil)</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium vitae facere itaque placeat minus impedit id, rem ea
                animi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="colorAccardion"
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="var(--tg-theme-text-color)" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className="name" sx={{ width: "33%", flexShrink: 0 }}>
                Economics
              </Typography>
              <Typography className="info" sx={{ color: "text.secondary" }}>
                Bakalavr
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="info">
              <Typography>2.500 EUR (3 yil)</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium vitae facere itaque placeat minus impedit id, rem ea
                animi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="colorAccardion"
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="var(--tg-theme-text-color)" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className="name" sx={{ width: "33%", flexShrink: 0 }}>
                Economics
              </Typography>
              <Typography className="info" sx={{ color: "text.secondary" }}>
                Bakalavr
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="info">
              <Typography>2.500 EUR (3 yil)</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium vitae facere itaque placeat minus impedit id, rem ea
                animi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="colorAccardion"
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="var(--tg-theme-text-color)" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className="name" sx={{ width: "33%", flexShrink: 0 }}>
                Economics
              </Typography>
              <Typography className="info" sx={{ color: "text.secondary" }}>
                Bakalavr
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="info">
              <Typography>2.500 EUR (3 yil)</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium vitae facere itaque placeat minus impedit id, rem ea
                animi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="colorAccardion"
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="var(--tg-theme-text-color)" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className="name" sx={{ width: "33%", flexShrink: 0 }}>
                Economics
              </Typography>
              <Typography className="info" sx={{ color: "text.secondary" }}>
                Bakalavr
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="info">
              <Typography>2.500 EUR (3 yil)</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium vitae facere itaque placeat minus impedit id, rem ea
                animi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="colorAccardion"
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="var(--tg-theme-text-color)" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className="name" sx={{ width: "33%", flexShrink: 0 }}>
                Economics
              </Typography>
              <Typography className="info" sx={{ color: "text.secondary" }}>
                Bakalavr
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="info">
              <Typography>2.500 EUR (3 yil)</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium vitae facere itaque placeat minus impedit id, rem ea
                animi.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 0;
  .image {
    height: 45vh;
    width: 100vw;
    object-fit: cover;
    border-bottom-right-radius: 40px;
  }
  .price {
    width: 150px;
    height: 150px;
    background-color: #00000087;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .price p {
    font-size: 25px;
    color: #fff;
  }
  .accordion {
    /* margin-top: 50px; */
  }
  .colorAccardion {
    background-color: var(--tg-theme-bg-color);
  }
  .name {
    color: var(--tg-theme-text-color);
  }
  .info {
    color: var(--tg-theme-hint-color);
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 5px auto;
    width: 200px;
    height: 50px;
    background-color: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    text-decoration: none;
  }
`;
