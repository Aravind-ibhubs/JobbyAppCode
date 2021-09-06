import styled from 'styled-components'

export const FilterContainer = styled.div`
  background-color: transparent;
  min-height: 50vh;
  @media (min-width: 768px) {
    height: 75vh;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
`

export const LineElement = styled.hr`
  border: 1px solid #f8fafc;
  @media (min-width: 768px) {
    width: 200px;
    margin-right: auto;
  }
`

export const CheckboxContainer = styled.div`
  background-color: transparent;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
  margin: 10px;
  background-color: #4f46e5;
`

export const LabelElement = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 13px;
`

export const CardContainer = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
`

export const FilterHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
`
