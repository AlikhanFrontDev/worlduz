import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import api from "../Api";
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function SinglePage() {
  const { id } = useParams();
  const [image, setData] = useState([]);
  const [field, setField] = useState([]);
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
        setField(response.fields);
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
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <div>
      <Container>
        <div
          className="image"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <button onClick={goBack} className="back"><IoMdArrowRoundBack/></button>
        </div>
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
          <Link className="button" to={"https://t.me/world_uz_bot?start=pay"}>
            To'lov qilish
          </Link>
        </div>
        {field.map((i) => {
          return (
            <div className="accordion" key={i.id}>
              <Accordion
                className="colorAccardion"
                expanded={expanded === `panel${i.id}`}
                onChange={handleChange(`panel${i.id}`)}
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
                    {i.name}
                  </Typography>
                  <Typography className="info" sx={{ color: "text.secondary" }}>
                    {i.category}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="info">
                  <Typography>
                    <p className="title">kontrakt:</p> {i.price} <br />{" "}
                    <p className="title">o'qish davomiyligi:</p>{" "}
                    {i.duration}yil
                  </Typography>
                  <Typography className="description">
                    <p className="title">Fakultet haqida malumot: </p> <br />
                    {i.description}
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
  .back{
    margin: 15px;
    padding: 15px;
    width: 80px;
    border: none;
    border-radius: 10px;
    background-color: #ffffff7b;
    font-size: 20px;
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
    width: 100px;
    height: 40px;
    background-color: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    text-decoration: none;
    font-size: 12px;
    text-align: center;
  }
`;
