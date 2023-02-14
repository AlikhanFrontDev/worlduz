import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import vizja from "../assets/poland/vizja.jpeg";

export default function Poland() {
  return (
    <Container>
      <h1 class="titleCountry">Polsha universitetlari</h1>
      <div class="univers">
        <Link className="university" to={"/single"}>
          <div className="vizja image"></div>
          <div className="name">
            Vizja university of economics and human sciences
          </div>
          <div className="hint price">Kontrakt: min-$2100</div>
          <div className="hint ielts">IELTS: min-5.5</div>
          <div className="hint ielts">Bakalavr Magistratura</div>
          <div className="hint city">Warshava</div>
        </Link>
        <div className="university">
          <div className="vizja image"></div>
          <div className="name">
            Vizja university of economics and human sciences
          </div>
          <div className="hint price">Kontrakt: min-$2100</div>
          <div className="hint ielts">IELTS: min-5.5</div>
          <div className="hint ielts">Bakalavr Magistratura</div>
          <div className="hint city">Warshava</div>
        </div>
        <div className="university">
          <div className="vizja image"></div>
          <div className="name">
            Vizja university of economics and human sciences
          </div>
          <div className="hint price">Kontrakt: min-$2100</div>
          <div className="hint ielts">IELTS: min-5.5</div>
          <div className="hint ielts">Bakalavr Magistratura</div>
          <div className="hint city">Warshava</div>
        </div>
        <div className="university">
          <div className="vizja image"></div>
          <div className="name">
            Vizja university of economics and human sciences
          </div>
          <div className="hint price">Kontrakt: min-$2100</div>
          <div className="hint ielts">IELTS: min-5.5</div>
          <div className="hint ielts">Bakalavr Magistratura</div>
          <div className="hint city">Warshava</div>
        </div>
        <div className="university">
          <div className="vizja image"></div>
          <div className="name">
            Vizja university of economics and human sciences
          </div>
          <div className="hint price">Kontrakt: min-$2100</div>
          <div className="hint ielts">IELTS: min-5.5</div>
          <div className="hint ielts">Bakalavr Magistratura</div>
          <div className="hint city">Warshava</div>
        </div>
        <div className="university">
          <div className="vizja image"></div>
          <div className="name">
            Vizja university of economics and human sciences
          </div>
          <div className="hint price">Kontrakt: min-$2100</div>
          <div className="hint ielts">IELTS: min-5.5</div>
          <div className="hint ielts">Bakalavr Magistratura</div>
          <div className="hint city">Warshava</div>
        </div>
        <div className="university">
          <div className="vizja image"></div>
          <div className="name">
            Vizja university of economics and human sciences
          </div>
          <div className="hint price">Kontrakt: min-$2100</div>
          <div className="hint ielts">IELTS: min-5.5</div>
          <div className="hint ielts">Bakalavr Magistratura</div>
          <div className="hint city">Warshava</div>
        </div>
        <div className="university">
          <div className="vizja image"></div>
          <div className="name">
            Vizja university of economics and human sciences
          </div>
          <div className="hint price">Kontrakt: min-$2100</div>
          <div className="hint ielts">IELTS: min-5.5</div>
          <div className="hint ielts">Bakalavr Magistratura</div>
          <div className="hint city">Warsjhdfjshfkjhdskhava</div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@1,500&display=swap");
  @media screen and (max-width: 480px) {
    * {
      background-color: var(--tg-theme-secondary-bg-color);
    }
    body {
      background-color: var(--tg-theme-bg-color);
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
      gap: 5px;
    }
    .university {
      margin-top: 10px;
      color: var(--tg-theme-text-color);
      text-decoration: none;
      background-color: var(--tg-theme-bg-color);
      /* border: 1px solid var(--tg-theme-hint-color); */
      /* border: 1px solid red; */
      text-align: center;
      /* padding: 5px; */
      min-height: 300px;
      width: 170px;
      border-radius: 10px;
      /* color: white; */
      font-family: "DM Sans", sans-serif;
      /* margin-bottom: 60px; */
    }
    .name {
      font-weight: 800;
      color: var(--tg-theme-text-color);
    }
    .image {
      /* margin: 0 auto; */
      width: 100%;
      height: 180px;
      background-color: blue;
      background-image: url(${vizja});
      background-size: cover;
      border-radius: 10px;
    }
    .hint {
      color: var(--tg-theme-hint-color);
    }

    h1 {
      color: var(--tg-theme-text-color);
    }
  }
`;
