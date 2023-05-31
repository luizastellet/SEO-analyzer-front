import React from "react"
import { ContentContainer, DefinitionContainer, DefinitionWrapper, InfoContainer, InfoWrapper, Tag, TitleWrapper } from "./CommonStyledComponets"
import { CheckIcon } from "./Icons"
import styled from "styled-components"

const Keyword = styled.div`
    font-weight: 700; 
    display: inline;
    margin: 0 6px;
`

export const KeywordsInURL = ({ data }) => {
    console.log(data)
  return (
    <div>
    <TitleWrapper>Palavras-chaves na URL</TitleWrapper>
    <ContentContainer>
    <DefinitionContainer>
      <h4>Definição</h4>
      <DefinitionWrapper>
      {`São tags <a> cujo atributo href aponta para outros conteúdos dentro do mesmo site. Desta forma, os crawlers conseguem seguir estes links, descobrindo e indexando outros conteúdos dentro do mesmo site`}.
      </DefinitionWrapper>
    </DefinitionContainer>
        <InfoContainer>
        <h4 style={{marginLeft: '10px'}}>Resultado</h4>
         {!!data.length && data.map(item =>
           <InfoWrapper type={item.type}>
                <CheckIcon/> 
                
                A palavra-chave <Keyword>{item.content}</Keyword> foi encontrada na URL.
                
           </InfoWrapper>
         )}
      {/* {!data.links && (
        <InfoWrapper type={'error'}>{handleIconInformation('error')}{data}</InfoWrapper>
      )} */}
       </InfoContainer>
    </ContentContainer>
  </div>
  )
}