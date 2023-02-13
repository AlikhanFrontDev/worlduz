import React from 'react'
import styled from 'styled-components'

import vizja from "../assets/poland/vizja.jpeg"

export default function Poland() {
  return (
    <Container>
        <h1 class="titleCountry">Polsha universitetlari</h1>
            <div class="univers">
            <div class="university">
                <div class="vizja image"></div>
                <div class="name">Vizja university of economics and human sciences</div>
                <div class="price">Kontrakt: min-$2100</div>
                <div class="ielts">IELTS: min-5.5</div>
                <div class="city">Warshava</div>
            </div>
            <div class="university">
                <div class="vizja image"></div>
                <div class="name">Vizja university of economics and human sciences</div>
                <div class="price">Kontrakt: min-$2100</div>
                <div class="ielts">IELTS: min-5.5</div>
                <div class="city">Warshava</div>
            </div>
            <div class="university">
                <div class="vizja image"></div>
                <div class="name">Vizja university of economics and human sciences</div>
                <div class="price">Kontrakt: min-$2100</div>
                <div class="ielts">IELTS: min-5.5</div>
                <div class="city">Warshava</div>
            </div>
            <div class="university">
                <div class="vizja image"></div>
                <div class="name">Vizja university of economics and human sciences</div>
                <div class="price">Kontrakt: min-$2100</div>
                <div class="ielts">IELTS: min-5.5</div>
                <div class="city">Warshava</div>
            </div>
            <div class="university">
                <div class="vizja image"></div>
                <div class="name">Vizja university of economics and human sciences</div>
                <div class="price">Kontrakt: min-$2100</div>
                <div class="ielts">IELTS: min-5.5</div>
                <div class="city">Warshava</div>
            </div>
            <div class="university">
                <div class="vizja image"></div>
                <div class="name">Vizja university of economics and human sciences</div>
                <div class="price">Kontrakt: min-$2100</div>
                <div class="ielts">IELTS: min-5.5</div>
                <div class="city">Warshava</div>
            </div>
            </div>
    </Container>
  )
}

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@1,500&display=swap');
    @media screen and (max-width: 480px) {
    body{
        background-color: var(--tg-theme-bg-color);
    }
    nav{
     display: flex;
     justify-content: space-between;
     padding: 20px;
    } 
    .menu{
        font-size: 20px;
        margin: 10px;
    }
    .titleCountry{
        text-align: center;
        font-family: 'DM Sans', sans-serif;
        color: rgb(108, 108, 225);
    }
    .univers{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

    }
    .university{
        /* background-color: red; */
        height: 300px;
        width: 180px;
        border-radius: 10px;
        /* color: white; */
        font-family: 'DM Sans', sans-serif;
        margin-bottom: 60px;
    }
    .name{
        font-weight: 800;
    }
    .image{
        width: 180px;
        height: 200px;
        background-color: blue;
        background-image: url(${vizja});
        background-size: cover;
        border-radius: 10px;
    }
}
`