import React from "react";
import styled from "styled-components";
import { Headings } from "../components/Headings";
import { Images } from "../components/Images";
import { Description } from "../components/Description";
import Title from "../components/Title";
import { Keywords } from "../components/Keywords";
import { InternalLinks } from "../components/InternalLinks";
import { KeywordsInURL } from "../components/KeywordsInURL";
import { KeywordsLocation } from "../components/KeywordsLocation";

const Spacer = styled.div`
  width: 90%; 
  height: 1px;
  background: #000;
`

const Container = styled.div`
  width: 100%;
  padding: 16px 30px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  justify-content: center;
  align-items: center;
`
const Result = ({ title, headings, images, description, keywords, internalLinks, keywordsInURL, keywordsLocation}) => {
  return (
    <Container>
      <Title data={title} />
      <Spacer />
      <Description data={description}/>
      <Spacer />
      <Keywords data={keywords} />
      <Spacer />
      <Headings {...headings} />
      <Spacer />
      <Images images={images}/>
      <Spacer />
      <InternalLinks data={internalLinks} /> 
      <Spacer />
      <KeywordsInURL data={keywordsInURL} />
      <Spacer />
      <KeywordsLocation {...keywordsLocation} />
    </Container>
  )
}

export default Result