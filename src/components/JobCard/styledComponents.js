import styled from 'styled-components'

export const JobCardContainer = styled.div`
  background-color: #272727;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 15px;
  width: 80vw;
  padding: 17px;
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 768px) {
    width: 55vw;
  }
`

export const CompanyLogoTitleCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 45px;
  @media (min-width: 768px) {
    width: 250px;
    height: 65px;
  }
`

export const CompanyLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  @media (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  }
`

export const JobTitle = styled.h1`
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const JobParagraph = styled.p`
  color: #ffffff;
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const LocationSalaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LocationContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    width: 20vw;
  }
`

export const HorizontalLine = styled.hr`
  border: 1px solid #cbd5e1;
  width: 70vw;
  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
