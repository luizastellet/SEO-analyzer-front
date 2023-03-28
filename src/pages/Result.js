import React from "react";
import styled from "styled-components";
import { Headings } from "../components/Headings";
import { Images } from "../components/Images";
import Title from "../components/Title";

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 56px;
`
const Result = ({ title, headings, images }) => {
  return (
    <Container>
      <Title data={title} />
      <Headings {...headings} />
      <Images images={images}/>
    </Container>
  )
}

export default Result