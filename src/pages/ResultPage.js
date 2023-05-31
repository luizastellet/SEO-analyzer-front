import React, { Suspense } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import BackgroundImg from '../assets/images/BackgroundImage.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Result = React.lazy(() => import("./Result"))

const endpoint = 'http://localhost:8000'

const Background = styled.div`
  width: 100%;
  background-color: #EBEBEB;
  display: flex;
  justify-content: center;
  overflow-y: visible;
  min-height: 100vh;
`
const BGImage = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  background: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px #0f172a99;

  @media screen and (max-width: 630px){
    border-radius: 0;
    height: 200px;
  }
`

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 50px;
  background-color: #fff;

  @media screen and (max-width: 630px){
    width: 90%;
  }
`

const Header = styled.div`
  height: 200px;
  position: relative;
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 630px){
    margin: 0;
  }
`
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 30px;
  }
  
  @media screen and (max-width: 630px){
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`
const Button = styled.button`
  width: 160px;
  height: 40px;
  background-color: #e27a0d;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (max-width: 630px){
    margin-top: 12px;
  }
`

const URLWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #FFF;
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;

  a { 
    display: block;
    margin: 4px;
    font-weight: 600;
    color: #002A52;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  
  :hover {
    text-decoration: underline;
  }
}
`

const ResultPage = () => {
  const navigate = useNavigate()
  const [URL, setURL] = useState("")
  const [data, setData] = useState({})

  function isEmpty(obj) {
    return Object.entries(obj).length === 0;
  }

  useEffect(() => {
    axios.get(`${endpoint}/page`)
      .then(res => setData(res.data))
  }, [])

  useEffect(() => {
    axios.get(`${endpoint}/url`)
      .then(res => setURL(res.data.value))
  }, [])

  console.log(data)
  return (
    <Background>
      <BGImage />
      <Container>
        <Header>
          <TopWrapper>
            <h1><a href='/'>Analisador de SEO </a></h1>
            <Button onClick={() => navigate("/")}> NOVA PESQUISA </Button>
          </TopWrapper>
          <URLWrapper> Exibindo resultados para: <a target="blank" href={URL}> {URL}</a></URLWrapper>
        </Header>
        {!isEmpty(data) && (
          <Suspense fallback={<p>Loading...</p>}>
            <Result {...data} />
          </Suspense>
        )}
      </Container>
    </Background>
  )
}

export default ResultPage;