import React from "react";
import {
  TitleWrapper,
  DefinitionWrapper,
  InfoWrapper,
} from "./CommonStyledComponets";
import styled from "styled-components";
import { Table, TableHead } from "./Headings";
import { handleIconInformation } from "../utils/InformationContainerHandler";

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 10px;
`
const Tag = styled.p`
  font-size: 16px;
  font-family: 'Source Code Pro', monospace;
  color: #4A4A4A;
  margin-right: 8px;

  ::after { 
    content: ' -';
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  
  svg {
    width: 20px;
    height: 20px;
  }
`
const Description = styled.p`
  color: #4A4A4A;
  font-size: 16px;
`

export const SemanticTags = ({ data }) => {
 
  return(
    <div>
      <TitleWrapper>HTML Semântico</TitleWrapper>
      <h4>Definição</h4>
      <DefinitionWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor ligula ante, et eleifend lorem molestie quis. Nulla dictum rhoncus facilisis.
      </DefinitionWrapper>
      
      <ul>
      {data.map(item => 
        <Item style={{display: 'flex'}}>
          <IconWrapper>
          {item.hasTag ? handleIconInformation("info") : handleIconInformation("error")}
          </IconWrapper>
          <Tag>{`<${item.tag}>`}</Tag>
          <Description>{item.description}</Description>
        </Item>
      )}
      </ul>
    </div>
  )
}