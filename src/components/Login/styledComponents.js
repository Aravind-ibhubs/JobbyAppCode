import styled from 'styled-components'

export const MainApp = styled.div`
  background-color: #000000;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.form`
  background-color: #202020;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: 85vw;
  border-radius: 15px;
  @media (min-width: 768px) {
    width: 35vw;
  }
`

export const LoginLogo = styled.img`
  height: 35px;
  width: 100px;
`

export const LabelElement = styled.label`
  color: #cbd5e1;
  font-family: 'Roboto';
  font-size: 12px;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80vw;
  @media (min-width: 768px) {
    width: 30vw;
  }
`

export const InputElement = styled.input`
  background-color: transparent;
  border: 1px solid #2c364c;
  height: 30px;
  padding: 10px;
  width: 80vw;
  color: #cbd5e1;
  @media (min-width: 768px) {
    width: 30vw;
  }
`

export const Button = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  border-radius: 10px;
  padding: 15px;
  border-width: 0px;
  width: 80vw;
  @media (min-width: 768px) {
    width: 30vw;
  }
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 13px;
`
