import React, { useEffect, useState } from "react";
import {
  TitleWrapper,
  DefinitionWrapper,
  InfoWrapper,
} from "./CommonStyledComponets";
import styled from "styled-components";
import { Table, TableHead, TagCell, Content, ContentCell } from "./Headings";
import { handleIconInformation } from "../utils/InformationContainerHandler";


export const Keywords = ({ data }) => {
  const isArrayEmpty = data.length === 1 && !data.content
  console.log(">>>", data)

  return (
    <div>
      <TitleWrapper>Palavras-chave</TitleWrapper>
      <h4>Definição</h4>
      <DefinitionWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor ligula ante, et eleifend lorem molestie quis. Nulla dictum rhoncus facilisis.
      </DefinitionWrapper>
   {isArrayEmpty && (
        <InfoWrapper style={{ marginLeft: '0px' }} type='error'>
          {handleIconInformation('error')}
          {data[0].errorName}
        </InfoWrapper>
      )}
         {!isArrayEmpty && (
        <Table>
          <TableHead>
            <th style={{ maxWidth: '30%' }}>Palavra-chave</th>
            <th style={{ width: '70%' }}>Quantidade encontrada</th>
            <th style={{ width: '70%' }}>Densidade</th>
          </TableHead>
          <td>a</td>
          <td>b</td>
          <td>c</td>
        </Table>
      )}
    </div>
  )
}