import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  primary: "teal",
  secondary: "green",
};

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 20px 10px;
  text-align: center;
  max-width: 100%;
  transition: 0.25s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 7px 10px;
  /* background: ${(props) => (props.primary ? "red" : "green")}; */
  background: ${(props) => props.theme.primary};
  color: #fff;
  &:hover {
    background: blue;
    cursor: pointer;
  }
`;

const Demo = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <button>+</button>
        <Button primary>Create</Button>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
