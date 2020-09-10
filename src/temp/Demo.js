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
  padding: 7px 10px;
  /* background: ${(props) => (props.primary ? "red" : "green")}; */
  background: ${(props) => props.theme.primary};
  color: #fff;
  &:hover {
    background: blue;
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
