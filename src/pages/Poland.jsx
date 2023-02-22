import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import api from "../Api";
import { IoMdArrowRoundBack } from 'react-icons/io';


export default function Poland() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [university, setUniversity] = useState([]);
  console.log(data)
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          api + `countries/${id}/university`
        );
        setData(response);
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
        setUniversity(response.university);
      } catch (error) {}
    };

    fetchData();
  }, [id]);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <p className="uniPrice">Consalting servis to'lovi: {data.price}</p>
      <div className="search-bar-button">
        <button onClick={goBack} className="back">
          <IoMdArrowRoundBack />
        </button>
        <input
          type="search"
          placeholder="Yo'nalish yoki Universitet bo'yicha qidiruv"
          className="search"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="univers">
        {university
          .filter((i) => {
            if (query === "") {
              return i;
            } else if (
              i.categories.toLowerCase().includes(query.toLowerCase())
            ) {
              return i;
            } else if (i.name.toLowerCase().includes(query.toLowerCase())) {
              return i;
            }
            return false;
          })
          .map((i) => {
            return (
              <Link to={`${i.id}`} key={i.id}>
                <div className="university" key={i.id}>
                  <div
                    className="image"
                    style={{ backgroundImage: `url("${i.image}")` }}
                  ></div>
                  <div className="name">{i.name}</div>
                  <div className="hint price">min-kontrakt {i.min_price}</div>
                  <div className="hint ielts">IELTS: {i.min_ielts}</div>
                  <div className="hint ielts">
                    {JSON.parse(i.categories).join(",  ")}
                  </div>
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

    .uniPrice{
      font-size: 20px;
      background-color: var(--tg-theme-bg-color);
      color: var(--tg-theme-text-color);
      border-radius: 10px;
      padding: 5px 10px;
      text-align: center;
      width: 200px;
      margin: 0 auto;
      margin-top: 20px;
    }

    .back {
      margin: 10px;
      padding: 10px;
      width: 80px;
      border: none;
      border-radius: 10px;
      background-color: var(--tg-theme-bg-color);
      color: var(--tg-theme-text-color);
      font-size: 20px;
    }

    .search {
      height: 30px;
      min-width: 350px;
      border-radius: 10px;
      border: none;
      padding: 20px;
      background-color: var(--tg-theme-bg-color);
      margin: 10px;
      color: var(--tg-theme-text-color);
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
