import React from "react";
import styled from "styled-components";

export default function Form() {
  return (
    <div>
      <Title> Malumotlaringizni qoldiring</Title>
      <Container>
        <input type="text" placeholder="ism" />
        <input type="text" placeholder="familiya" />
        <input type="text" placeholder="telefon raqam" />
        <input type="text" placeholder="shahringiz" />
        <input type="text" placeholder="til bilish darajasi" />
        <button type="reset">Yuborish</button>
      </Container>
    </div>
  );
}

const Title = styled.h3`
  color: var(--tg-theme-text-color);
  font-family: sans-serif;
  width: 82%;
  margin: 20px auto;
  text-align: center;
`;
const Container = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  input {
    width: 82%;
    height: 30px;
    border: none;
    border-bottom: 1px solid var(--tg-theme-text-color);
    padding: 10px;
    color: var(--tg-theme-hint-color);
    background-color: var(--tg-theme-bg-color);
  }
  input:focus {
    outline: none;
  }
  button {
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
  }
`;
