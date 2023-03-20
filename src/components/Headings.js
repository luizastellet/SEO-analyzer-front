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
import styled from "styled-components";

const Table = styled.table`
  /* width: 100%;
  font-size: 16px;
  border: 1px solid #003060;
  border-radius: 8px; */
  margin-top: 15px;
    width: 100%;
    text-align: center;
    overflow:hidden;
    border-collapse:separate;
    border: solid #003060 1px;
    -webkit-border-radius: 8px;
       -moz-border-radius: 8px;
            border-radius: 8px;

  td {
    border-left: 1px solid #003060;
  }

  td:first-child {
    border-left: none;
  }

  td:last-child {
    border-right: none;
  }
  `
const TableHead = styled.tr`
  background-color: #003060;
  font-size: 18px;
  color: #fff;
  border: 1px solid #003060;
  border-radius: 8px;
  
  th {
    padding: 8px 0;
    text-align: center;
    border-left: 1px solid #fff;
  }

  th:first-child {
    border-left: none;
  }

  th:last-child {
    border-right: none;
  }
`

export const Headings = ({ data }) => {
  console.log(data)
  return (
    <div>
      <TitleWrapper>Títulos de Seção </TitleWrapper>
      <h4>Definição</h4>
      <DefinitionWrapper>
        As tags de título....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor ligula ante, et eleifend lorem molestie quis. Nulla dictum rhoncus facilisis. Fusce auctor malesuada dolor vitae mollis. Nam dapibus est id purus vestibulum, vestibulum tristique nisi imperdiet.
      </DefinitionWrapper>
      <Table>
        <TableHead>
          <th style={{width: '20%'}}>Person 2</th>
          <th>Person 3</th>
        </TableHead>
        <tr>
          <td>Emil</td>
          <td>Linus</td>
        </tr>
        <tr>
          <td>14</td>
          <td>10</td>
        </tr>
      </Table>
    </div>
  )
}