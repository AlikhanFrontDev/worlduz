import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import api from "../Api";

export default function Poland() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(data)
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `countries/${id}/university`
        );
        setData(response.university);
      } catch (error) {}
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
      } catch (error) {}
    };

    fetchData();
  }, [id]);
  return (
    <Container>
      <div className="univers">
        {data.map((i) => {
          return (
            <Link to={`${i.id}`} key={i.id}>
              <div className="university">
                <div
                  className="image"
                  style={{ backgroundImage: `url('http://ishkal.uz/${i.image}')` }}
                ></div>
                <div className="name">{i.name}</div>
                <div className="hint price">min-kontrakt {i.min_price}</div>
                <div className="hint ielts">IELTS: {i.min_ielts}</div>
                <div className="hint ielts">{JSON.parse(i.categories).join(',  ')}</div>
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
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
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
      min-height: 250px;
      width: 170px;
      border-radius: 10px;
      font-family: "Open Sans", sans-serif;
      text-align: center;
      padding: 2px;
      border: 0.1px solid white;
    }
    .name {
      font-weight: 800;
      color: var(--tg-theme-text-color);
    }
    .image {
      width: 100%;
      height: 100px;
      border-radius: 10px;
      background-position: center;
      background-size: cover;
    }
    .hint {
      color: var(--tg-theme-hint-color);
    }

    h1 {
      color: var(--tg-theme-text-color);
    }
    a {
      color: var(--tg-theme-text-color);
      text-decoration: none;
    }
  }
`;
