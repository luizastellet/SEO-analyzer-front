import React from "react"
import { handleIconInformation } from "../utils/InformationContainerHandler"
import { ContentContainer, DefinitionContainer, DefinitionWrapper, InfoContainer, InfoWrapper, Tag, TitleWrapper } from "./CommonStyledComponets"
import { CheckIcon } from "./Icons"

export const KeywordsLocation = ({ description, heading, title }) => {
  console.log(heading)
  return (
    <div>
    <TitleWrapper>Localização de Palavras-chaves</TitleWrapper>
    <ContentContainer>
    <DefinitionContainer>
      <h4>Definição</h4>
      <DefinitionWrapper>
      Os lugares onde as palavras-chaves podem ser encontradas informam para o crawler a relevância daquelas palavras para a página. Alguns dos principais lugares onde as palavras-chaves devem aparecer são: título da página, descrição e tags de cabeçalho. 
      </DefinitionWrapper>
    </DefinitionContainer>
        <InfoContainer>
        <h4 style={{marginLeft: '10px'}}>Resultado</h4>
        {title.map(item => 
          <InfoWrapper type={item.type}>{
            handleIconInformation(item.type)}{item.infoText}
          </InfoWrapper>
        )}
        {description.map(item => 
          <InfoWrapper type={item.type}>{
            handleIconInformation(item.type)}{item.infoText}
          </InfoWrapper>
        )}
        {heading.map(item => 
          <InfoWrapper type={item.type}>{
            handleIconInformation(item.type)}{item.infoText}
          </InfoWrapper>
        )}
       </InfoContainer>
    </ContentContainer>
  </div>
  )
}