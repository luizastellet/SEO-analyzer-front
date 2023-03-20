import React from "react";
import styled from "styled-components";
import { Headings } from "../components/Headings";
import Title from "../components/Title";

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 56px;
`
const Result = ({ title, headings }) => {
  return (
    <Container>
      <Title data={title} />
      <Headings data={headings} />
    </Container>
  )
}

export default Result