import React from "react";
import styled from 'styled-components'

const Wrapper = styled.footer`
  background: #00000075;
  height: 90px;
  width: 100%;
  padding: 24px;
  color: white;
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  font-size: 18px; 
  
  .footer-info {
    font-size: 18px; 
    /* width: 400px; */
    margin: 0 15px;
    text-align: center;

  }
  
  .info-wrapper {
    /* width: 400px; */
    margin: 0 15px;
    display: flex;
    justify-content: center;
  }
  
  a {
    cursor: pointer;
    font-weight: 600; 
  }
  
  @media screen and (max-width: 630px){
    flex-direction: column;
    height: 130px;
    justify-content: space-between;
    
    .footer-info {
    max-width: 80%;
  }
  
    .info-wrapper {
      max-width: 80%;
    }
  }
`
const Separator = styled.div`
  height: -webkit-fill-available;
  width: 1px;
  background: white;

  @media screen and (max-width: 630px){
    height: 2px;
    width: 70%;
  }
`

export const Footer = () => {
  return (
    <Wrapper>
      <p className="footer-info">Site desenvolvido como parte do Trabalho de Conclusão de Curso de Maria Luíza Stellet</p>
      <Separator />
      <div className="info-wrapper">
        <a href="/informacoes">Mais informações</a> 
      </div>
    </Wrapper>
  )
}