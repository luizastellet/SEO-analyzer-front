import React from "react";
import styled from 'styled-components'
import { handleIconInformation } from "../utils/InformationContainerHandler";
import {
  TitleWrapper,
  DefinitionWrapper,
  InfoWrapper,
  ContentContainer,
  DefinitionContainer,
  InfoContainer,
  Tag,
} from "./CommonStyledComponets";
import { DataIcon } from "./Icons";

export const Description = ({ data }) => {
  return (
    <div>
      <TitleWrapper>Descrição</TitleWrapper>
      <ContentContainer>
      <DefinitionContainer>
        <h4>Definição</h4>
        <DefinitionWrapper>
          A tag de descrição, deifinida:<Tag>{`<meta name="description">`}</Tag> fornece uma breve descrição da temática de uma página. Seu conteúdo é apresentado em forma de link nos resultados de mecanismos de busca. 
        </DefinitionWrapper>
      </DefinitionContainer>
          <InfoContainer>
            <h4>Resultado</h4>
           {!!data.content && (
             <InfoWrapper><DataIcon/>{data.content}</InfoWrapper>
           )}
        {data.errorName && (
          <InfoWrapper type={data.type}>{handleIconInformation(data.type)}{data.errorName}</InfoWrapper>
        )}
         </InfoContainer>
      </ContentContainer>
    </div>
  )
}