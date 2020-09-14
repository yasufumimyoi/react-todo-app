import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
`;

const Container_inner = styled.div`
  max-width: 1230px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const CssMedia = () => (
  <Container>
    <Container_inner>
      <div></div>
    </Container_inner>
  </Container>
);

export default CssMedia;
