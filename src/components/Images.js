import React, { useEffect, useState } from "react";
import {
  TitleWrapper,
  DefinitionWrapper,
  InfoWrapper,
} from "./CommonStyledComponets";
import styled from "styled-components";
import { Table, TableHead, TagCell, Content, ContentCell } from "./Headings";
import { handleIconInformation } from "../utils/InformationContainerHandler"; 


const ContentRow = styled.tr`
  border-bottom: 1px solid #003060;
`

export const URLCell = styled.td`
  padding: 10px 20px;

  button { 
    cursor: pointer;
  }
`

const URL = styled.span`
  margin: 0;
  display: block;
  padding: 0px 20px;
  width: 250px;
  overflow: hidden;
  line-height: 1em;
  height: 2em;
  word-break: break-all;
`

const Ellipses = styled.div`
  display: block;
`

const TableElements = ({ images }) => {
  const [showMode, setShowMode] = useState("hide")

  const handleClick = (idx) => {
    const cell = document.getElementById(`cell_${idx}`)
    const button = document.getElementById(`btn_${idx}`)
    const ellipses = document.getElementById(`eps_${idx}`)
    if (showMode === "hide") {
      cell.style.lineHeight = "1em"
      cell.style.height = "auto"
      ellipses.style.display = "none"
      button.innerText = "Ver menos"
      setShowMode("show")
    }
    
    if (showMode === "show"){
      cell.style.overflow = "hidden"
      cell.style.lineHeight = "1em"
      cell.style.height = "2em"
      ellipses.style.display = "block"
      button.innerText = "Ver mais"
      setShowMode("hide")
    }
  }

  useEffect(() => {

  }, [showMode])


  return (
    images.map((item, idx) => (
      <ContentRow>
        <URLCell >
          <URL id={`cell_${idx}`} showMore={showMode}>
            {item.url}
          </URL>
          <Ellipses id={`eps_${idx}`} showMore={showMode}>...</Ellipses>
          <button id={`btn_${idx}`} style={{fontWeight: '600'}} onClick={() => handleClick(idx)}>
          Ver mais
          </button>
        </URLCell>
        <ContentCell style={{width: '500px'}}>
          {item.content}
          {!!item.errorName && (<InfoWrapper type='error'>
                {handleIconInformation('error')}
                {item.errorName}</InfoWrapper>)}
        </ContentCell>
      </ContentRow>
    ))
  )
}

export const Images = ({ images }) => {
  return (
    <div>
      <TitleWrapper>Imagens</TitleWrapper>
      <h4>Definição</h4>
      <DefinitionWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor ligula ante, et eleifend lorem molestie quis. Nulla dictum rhoncus facilisis.
      </DefinitionWrapper>
      <Table>
        <TableHead>
          <th style={{maxWidth: '30%'}}>src</th>
          <th style={{width: '70%'}}>Texto Alternativo</th>
        </TableHead>
        <TableElements images={images} />
      </Table>
    </div>
  )
}