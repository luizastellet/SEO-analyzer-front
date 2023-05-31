import React from "react";
import {
  TitleWrapper,
  DefinitionWrapper,
  InfoWrapper,
} from "./CommonStyledComponets";
import styled from "styled-components";
import { Table, TableHead } from "./Headings";
import { handleIconInformation } from "../utils/InformationContainerHandler";

const Cell = styled.p`
  color: #4A4A4A;
  font-size: 16px;
  margin: 18px 0;
`

export const Keywords = ({ data }) => {
  const isArrayEmpty = data.length === 1 && !data.content
  return (
    <div>
      <TitleWrapper>Densidade de Palavras-chaves</TitleWrapper>
      <h4 style={{fontWeight: '500'}}>Definição</h4>
      <DefinitionWrapper>
      Quantidade de vezes que uma palavra chave aparece em uma página se comparada ao número total de palavras existentes. O valor da densidade deve estar entre 2% e 8%.
      </DefinitionWrapper>
      <h4 style={{fontWeight: '500', marginTop: '20px', marginBottom: '10px'}}>Resultado</h4>
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
            <tr style={{borderBottom: '1px solid #003060'}}>
              <td><Cell>{item.keyword}</Cell></td>
              <td><Cell>{item.count}</Cell></td>
              <td>
                <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  {handleIconInformation(item.type)}
                  <Cell>{item.density}</Cell>
                  </div>
                </td>
            </tr>
          ))}
        </Table>
        </div>
      )}
    </div>
  )
}