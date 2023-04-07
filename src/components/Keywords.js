import React, { useEffect, useState } from "react";
import {
  TitleWrapper,
  DefinitionWrapper,
  InfoWrapper,
} from "./CommonStyledComponets";
import styled from "styled-components";
import { Table, TableHead } from "./Headings";
import { handleIconInformation } from "../utils/InformationContainerHandler";

const Cell = styled.p`
  margin-bottom: 10px;
  color: #4A4A4A;
  font-size: 16px;
`

export const Keywords = ({ data }) => {
  const isArrayEmpty = data.length === 1 && !data.content

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
        <div style={{width:  '100%', display: 'flex', justifyContent: 'center'}}>
        <Table style={{ width: '60%' }}>
          <TableHead >
            <th style={{ width: '33%'}}>Palavra-chave</th>
            <th style={{ width: '33%' }}>Quantidade encontrada</th>
            <th style={{ width: '33%' }}>Densidade</th>
          </TableHead>
          {data.map(item => (
            <tr>
              <td><Cell>{item.keyword}</Cell></td>
              <td><Cell>{item.count}</Cell></td>
              <td><Cell>{item.density}</Cell></td>
            </tr>
          ))}
        </Table>
        </div>
      )}
    </div>
  )
}