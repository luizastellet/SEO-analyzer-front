import styled from 'styled-components'

const InfoWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  box-shadow: 7px 7px 56px -26px rgba(0,0,0,0.9);
  background-color: #FFF;
  padding: 16px 24px;
  `
const ErrorType = styled.p`
  color: #4A4A4A;
  border-bottom: 1px solid ;
  border-color: ${props => props.error === 'error' ? 'red': 
    props.error === 'warning' ? 'yellow' : 'green'};
`


const Card = ({ tagName, errorType, errorTag, errorName, errorPosition, errorMessage}) => {
  
  return (
    <InfoWrapper>
      <ErrorType error={errorType}>
        {tagName} - {errorName}
      </ErrorType>
    </InfoWrapper>
  )
}

export default Card