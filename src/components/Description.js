import React from "react";
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
import { CheckIcon } from "./Icons";

export const Description = ({ data }) => {
  return (
    <div>
      <TitleWrapper>Descrição</TitleWrapper>
      <ContentContainer>
      <DefinitionContainer>
        <h4>Definição</h4>
        <DefinitionWrapper>
         A descrição, definida pela tag: <Tag>{` <meta name="description">`}</Tag> fornece uma breve descrição da temática de uma página. Seu conteúdo é apresentado nos resultados trazidos pelas SERPs. 
        </DefinitionWrapper>
      </DefinitionContainer>
          <InfoContainer>
          <h4 style={{marginLeft: '10px'}}>Resultado</h4>
           {!!data.content && (
             <InfoWrapper type={data.type}><CheckIcon/>{data.content}</InfoWrapper>
           )}
        {data.errorName && (
          <InfoWrapper type={data.type}>{handleIconInformation(data.type)}{data.errorName}</InfoWrapper>
        )}
         </InfoContainer>
      </ContentContainer>
    </div>
  )
}