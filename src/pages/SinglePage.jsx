import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import api from "../Api";

export default function SinglePage() {
  const { id } = useParams();
  const [image, setData] = useState([]);
  const [field, setField] = useState([]);
  console.log(image)
  const [file, setFile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `universities/${id}/field`
        );
        setData(response.image);
      } catch (error) {}
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `universities/${id}/field`
        );
        setField(response.data);
      } catch (error) {}
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `universities/${id}/field`
        );
        setFile(response.contactFile);
      } catch (error) {}
    };

    fetchData();
  }, [id]);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Container>
        <div
          className="image"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="buttons">
          <Link
            className="button"
            to={"https://b24-2jofzh.bitrix24.site/crm_form_e0vmc/"}
          >
            Ariza qoldirish
          </Link>
          <Link className="button" to={file}>
            Shartnoma yuklash
          </Link>
        </div>
        {field.map((field) => {
          return (
            <div className="accordion" key={field.id}>
              <Accordion
                className="colorAccardion"
                expanded={expanded === `panel${field.id}`}
                onChange={handleChange(`panel${field.id}`)}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon color="var(--tg-theme-text-color)" />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    className="name"
                    sx={{ width: "50%", flexShrink: 0 }}
                  >
                    {field.name}
                  </Typography>
                  <Typography className="info" sx={{ color: "text.secondary" }}>
                    {field.category}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="info">
                  <Typography>
                    <p className="title">kontrakt:</p> {field.price} <br />{" "}
                    <p className="title">o'qish davomiyligi:</p>{" "}
                    {field.duration}yil
                  </Typography>
                  <Typography className="description">
                    <p className="title">Fakultet haqida malumot: </p> <br />
                    {field.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

  font-family: "Open Sans", sans-serif;
  .title {
    color: var(--tg-theme-text-color);
    font-weight: 600;
  }
  .buttons {
    display: flex;
  }
  margin: 0;
  .image {
    height: 45vh;
    width: 100vw;
    object-fit: cover;
    position: center;
    background-size: cover;
    border-bottom-right-radius: 40px;
    background-color: red;
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
  .description {
    color: var(--tg-theme-hint-color);
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 5px auto;
    width: 170px;
    height: 50px;
    background-color: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    text-decoration: none;
  }
`;
