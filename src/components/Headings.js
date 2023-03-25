import React from "react";
import {
  TitleWrapper,
  DefinitionWrapper,
  InfoWrapper,
} from "./CommonStyledComponets";
import { handleIconInformation } from '../utils/InformationContainerHandler'
import styled from "styled-components";
import { RemoveBrackets, Parser } from '../utils/formatting'

const Table = styled.table`
    width: 100%;
    text-align: center;
    overflow:hidden;
    background-color: #003060;
    /* border: solid #003060 1px; */
    -webkit-border-radius: 8px;
       -moz-border-radius: 8px;
            border-radius: 8px;

  border-collapse: collapse; 

  td, tr:not(:first-child) {
    background-color: #fff;
    vertical-align: middle;

  }
  
  tr { 
    border-left: 1px solid #003060;
    border-right: 1px solid #003060;

  }
  
  tr:last-child {
    border-bottom: 1px solid #003060;

    td:first-child{
      border-bottom-left-radius: 11px;
    }
    td:last-child {
      border-bottom-right-radius: 11px;

    }
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
const ContentRow = styled.tr`
  border-top: ${props => props.last ? '1px solid #003060' : ''};


`

const TagCell = styled.td`
  p { text-align: center; }
  
  `

const Content = styled.p`
  color: #4A4A4A;
  font-size: 16px;
  text-align: justify;
  padding: 10px;
  `
const ContentCell = styled.td`
  text-align: justify;
  margin-bottom: 10px;
`

const OtherHeadings = ({ headings }) => {
  let previous = ''
  let same
  const res = headings.reduce((acc, item) => {
    if (previous === item.tag) {
      same = true
    } else {
      same = false
      previous = item.tag
    }

    const content = item.content && Parser(item.content)
    acc.push(
      <>
        <ContentRow last={!same}>
          <TagCell>
            <Content>{same ? null : item.tag}</Content>
          </TagCell>
          <ContentCell>
            {content && (<Content>{content}</Content>)}
            {!content && (<InfoWrapper type='warning'>{handleIconInformation('warning')}blablablabla</InfoWrapper>)}
          </ContentCell>
        </ContentRow >
      </>
    )
    return acc
  }, [])

  return res
}

export const Headings = ({ h1, headings }) => {
  const treatedHeadings = RemoveBrackets(headings)
  return (
    <div>
      <TitleWrapper>Títulos de Seção </TitleWrapper>
      <h4>Definição</h4>
      <DefinitionWrapper>
        As tags de título....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor ligula ante, et eleifend lorem molestie quis. Nulla dictum rhoncus facilisis. Fusce auctor malesuada dolor vitae mollis. Nam dapibus est id purus vestibulum, vestibulum tristique nisi imperdiet.
      </DefinitionWrapper>
      {/* <div style={{ border: '1px solid', borderRadius: '8px' }}> */}
        <Table>
          <TableHead>
            <th style={{ width: '20%' }}>Tag</th>
            <th>Conteúdo</th>
          </TableHead>
          <OtherHeadings headings={treatedHeadings} />
        </Table>
      {/* </div> */}
    </div>
  )
}