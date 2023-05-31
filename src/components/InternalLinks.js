import React from "react"
import { handleIconInformation } from "../utils/InformationContainerHandler"
import { ContentContainer, DefinitionContainer, DefinitionWrapper, InfoContainer, InfoWrapper, Tag, TitleWrapper } from "./CommonStyledComponets"
import { CheckIcon } from "./Icons"

export const InternalLinks = ({ data }) => {

  return (
    <div>
    <TitleWrapper>Links Internos</TitleWrapper>
    <ContentContainer>
    <DefinitionContainer>
      <h4>Definição</h4>
      <DefinitionWrapper>
      {`São tags <a> cujo atributo href aponta para outros conteúdos dentro do mesmo site. Desta forma, os crawlers conseguem seguir estes links, descobrindo e indexando outros conteúdos dentro do mesmo site`}.
      </DefinitionWrapper>
    </DefinitionContainer>
        <InfoContainer>
        <h4 style={{marginLeft: '10px'}}>Resultado</h4>
         {!!data.links && (
           <InfoWrapper type={data.type}><CheckIcon/>{data.content}</InfoWrapper>
         )}
      {!data.links && (
        <InfoWrapper type={'error'}>{handleIconInformation('error')}{data}</InfoWrapper>
      )}
       </InfoContainer>
    </ContentContainer>
  </div>
  )
}