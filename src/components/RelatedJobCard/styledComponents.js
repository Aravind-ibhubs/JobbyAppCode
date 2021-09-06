import styled from 'styled-components'

export const CardContainers = styled.li`
  background-color: #202020;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 25px;
  margin: 15px;
  border-radius: 15px;
  @media (min-width: 768px) {
    width: 25vw;
    min-height: 400px;
  }
`

export const CardTopContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    width: 12vw;
  }
`

export const CardImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`

export const TopHeading = styled.h1`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 17px;
`

export const Description = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
`

export const BottomContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (min-width: 768px) {
    width: 14vw;
  }
`
