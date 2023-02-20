import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import vizja from "../assets/poland/vizja.jpeg";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import api from "../Api";

export default function SinglePage() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [field, setField] = useState([]);
  const [file, setFile] = useState([]);
  console.log(data);
  console.log(field);
  console.log(file)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `universities/${id}/field`
        );
        setData(response);
        console.log(response.image);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `universities/${id}/field`
        );
        setField(response.fields);
        console.log(response.fields);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `universities/${id}/field`
        );
        setFile(response.contact_file);
        console.log(response.contact_file);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Container>
        <img className="image" src={data.image} alt="" />
        <Link
          className="button"
          to={"https://b24-2jofzh.bitrix24.site/crm_form_e0vmc/"}
        >
          Ariza qoldirish
        </Link>
        <Link
          className="button"
          to={file}
        >
          Shartnoma yuklash
        </Link>
        {field.map((field) => {
          return(

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
                <Typography>{field.price} ({field.duration})</Typography>
                <Typography>
                  {field.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          )
        })}
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
    /* width: 100px;
    height: 100px;
    background-color: #00000087;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center; */
  }
  .price p {
    /* font-size: 20px;
    color: #fff; */
  }
  .accordion {
    /* margin-top: 50px; */
  }
  .colorAccardion {
    /* background-color: var(--tg-theme-bg-color); */
  }
  .name {
    /* color: var(--tg-theme-text-color); */
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
