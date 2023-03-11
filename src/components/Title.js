import React from "react";
import styled from "styled-components";

const DataIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={25}
    height={25}
    {...props}
  >
    <path
      d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm1 18h-2v-7h2zm-1-9.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15 11.5z"
      transform="scale(8.53333)"
      fill="#0e56c7"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    />
  </svg>
)


const InfoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={50}
    height={50}
    {...props}
  >
    <path
      transform="scale(5.12)"
      d="M48 25c0 12.69-10.31 23-23 23S2 37.69 2 25 12.31 2 25 2s23 10.31 23 23z"
      fill="#28d719"
      stroke="#28d719"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    />
    <path
      d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm9.988 10.988a1 1 0 0 0-.816.451L23.97 30.477 16.68 23.71a1 1 0 1 0-1.36 1.467l8.996 8.347 11.512-16.964a1 1 0 0 0-.84-1.573z"
      transform="scale(5.12)"
      fill="#fff"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    />
  </svg>
)


const WarningIcon = (props) => (
  <svg
    fill="#f0e924"
    viewBox="-192 -192 2304 2304"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#f0e924"
    {...props}
  >
    <path
      d="M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm-9.838 1342.685c-84.47 0-153.19 68.721-153.19 153.19 0 84.47 68.72 153.192 153.19 153.192s153.19-68.721 153.19-153.191-68.72-153.19-153.19-153.19ZM1153.658 320H746.667l99.118 898.623h208.755L1153.658 320Z"
      fillRule="evenodd"
    />
  </svg>
)

const ErrorIcon =  (props) => (
  <svg
    fill="#df1111"
    viewBox="-1.7 0 20.4 20.4"
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
    stroke="#df1111"
    {...props}
  >
    <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z" />
  </svg>
)

const Container = styled.div`
  color: #4A4A4A;
`
const TitleWrapper = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 28px;
  
`
const DefinitionContainer = styled.div`

`
const DefinitionWrapper = styled.p`
  color: #4A4A4A;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: justify; 
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const Tag = styled.span`
  text-align: center;
  align-self: center;
  font-family: 'Source Code Pro', monospace;
`

const InfoWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: ${({type}) => handleColorInformation(type)};
  svg {
      min-width: 25px;
      height: 25px;
      margin-right: 8px;
    }
`

const handleColorInformation = type => {
  switch (type) {
    case "error":
      return "rgba(255, 138, 138, 0.2)";
    case "warning":
      return "rgba(231, 237, 62, 0.2)";
    case "info":
      return "rgba(49, 163, 49, 0.2)";
    default:
      return "rgba(3, 148, 252, 0.2)";
  }
};

// const Title = ({ title, type, tag, errorName }) => {
const Title = ({ data }) => {
  console.log(data)
  return (
    <Container>
      <TitleWrapper>Título</TitleWrapper>
      <ContentContainer>
      <DefinitionContainer>
        <DefinitionWrapper>
          A tag <Tag>{`<title>`}</Tag> fornece uma breve descrição da temática de uma página. Seu conteúdo é apresentado em forma de link nos resultados de mecanismos de busca. 
        </DefinitionWrapper>
      </DefinitionContainer>
      {!!data.length && data.map(item => (
          <InfoContainer>
           {!!item.title && (
             <InfoWrapper><DataIcon/>{item.title}</InfoWrapper>
           )}
         <InfoWrapper type={item.type}><ErrorIcon/>{item.errorName}</InfoWrapper>
         </InfoContainer>
       ))}
      </ContentContainer>
    </Container>
  )
}

export default Title