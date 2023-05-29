import React from "react"
import styled from "styled-components"
import { ErrorIcon } from "./Icons"

const InfoWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 12px;
  margin: 10px;
  border-radius: 6px;
  border: 1px solid red;
  background: #fcefef;
  font-size: 12px;
  svg {
      min-width: 15px;
      height: 15px;
      margin-right: 8px;
    }
`

export const Error = () => {
  return (
    <InfoWrapper>
      <ErrorIcon />
      A URL inserida não é válida. 
    </InfoWrapper>
  )
}