import styled from "styled-components"
import { handleColorInformation } from '../utils/InformationContainerHandler'


export const TitleWrapper = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 28px;
  
`
export const DefinitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    font-size: 16px;
    font-weight: 500;
  }

`
export const DefinitionWrapper = styled.p`
  color: #4A4A4A;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: justify; 
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 16px;
    font-weight: 500;
  }
`
export const Tag = styled.span`
  text-align: center;
  align-self: center;
  font-family: 'Source Code Pro', monospace;
`

export const InfoWrapper = styled.div`
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