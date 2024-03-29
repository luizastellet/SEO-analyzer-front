import React from "react";
import { 
  TitleWrapper,
  ContentContainer,
  DefinitionContainer,
  DefinitionWrapper,
  InfoContainer,
  InfoWrapper, 
  Tag 
} from "./CommonStyledComponets";
import { handleIconInformation } from '../utils/InformationContainerHandler'
import { DataIcon } from '../components/Icons'

const Title = ({ data }) => {
  return (
    <div>
      <TitleWrapper>Título da Página</TitleWrapper>
      <ContentContainer>
      <DefinitionContainer>
        <h4>Definição</h4>
        <DefinitionWrapper>
          A tag <Tag>{`<title>`}</Tag> fornece uma breve descrição da temática de uma página. Seu conteúdo é apresentado em forma de link nos resultados de mecanismos de busca. 
        </DefinitionWrapper>
      </DefinitionContainer>
      {!!data.length && data.map(item => (
          <InfoContainer>
            <h4 style={{marginLeft: '10px'}}>Resultado</h4>
           {!!item.title && (
             <InfoWrapper><DataIcon/>{item.title}</InfoWrapper>
           )}
         <InfoWrapper type={item.type}>{handleIconInformation(item.type)}{item.infoText}</InfoWrapper>
         </InfoContainer>
       ))}
      </ContentContainer>
    </div>
  )
}

export default Title