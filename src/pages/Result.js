import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

const Container = styled.div`
  width: 100%;
  padding: 16px;
`
const Result = ({ title }) => {
  return (
    <Container>
      <Title data={title}></Title>
    </Container>
  )
}

export default Result