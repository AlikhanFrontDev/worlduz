import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import api from "../Api";

export default function Poland() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  console.log(image.image);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `countries/${id}/university`
        );
        setData(response.university);
        console.log(response.university);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `countries/${id}/university`
        );
        setImage(response.image);
        console.log(response.university);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container>
      {/* <h1 className="titleCountry">Polsha universitetlari</h1> */}
      <div className="univers">
        {data.map((i) => {
          return (
            <Link to={`${i.id}`} key={i.id}>
              <div className="university">
                <div className="image" style={{backgroundImage: `url('${image}')`}}></div>
                {/* <img
                  className="image"
                  src={`http://ishkal.uz/${i.image}`}
                  alt="asd"
                /> */}
                <div className="name">{i.name}</div>
                <div className="hint price">min-kontrakt {i.min_price}</div>
                <div className="hint ielts">IELTS: {i.min_ielts}</div>
                <div className="hint ielts">{JSON.parse(i.categories)}</div>
                <div className="hint city">{i.city_name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@1,500&display=swap");
  @media screen and (max-width: 480px) {
    body {
      background-color: var(--tg-theme-secondary-bg-color);
    }
    nav {
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
    .menu {
      font-size: 20px;
      margin: 10px;
    }
    .titleCountry {
      margin-top: 10px;
      text-align: center;
      font-family: "DM Sans", sans-serif;
    }
    .univers {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
    .university {
      width: 60px;
      margin-top: 10px;
      color: var(--tg-theme-text-color);
      text-decoration: none;
      background-color: var(--tg-theme-bg-color);
      min-height: 150px;
      width: 170px;
      border-radius: 10px;
      font-family: "DM Sans", sans-serif;
      /* border: 1px solid red; */
      text-align: center;
      padding: 2px;
      border: 0.1px solid white;
    }
    .name {
      font-weight: 800;
      color: var(--tg-theme-text-color);
    }
    .image {
      /* margin: 0 auto; */
      width: 100%;
      height: 100px;
      border-radius: 10px;
      object-fit: cover;
    }
    .hint {
      color: var(--tg-theme-hint-color);
    }

    h1 {
      color: var(--tg-theme-text-color);
    }
    a{
      color: var(--tg-theme-text-color);
      text-decoration: none;
    }
  }
`;
