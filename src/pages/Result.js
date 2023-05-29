import React from "react";
import styled from "styled-components";
import { Headings } from "../components/Headings";
import { Images } from "../components/Images";
import { Description } from "../components/Description";
import Title from "../components/Title";
import { Keywords } from "../components/Keywords";

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 56px;
`
const Result = ({ title, headings, images, description, keywords, semanticTags }) => {
  return (
    <Container>
      <Title data={title} />
      <Description data={description}/>
      <Keywords data={keywords} />
      <Headings {...headings} />
      <Images images={images}/>
    </Container>
  )
}

export default Result