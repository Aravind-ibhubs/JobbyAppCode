import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: #2c364c;
  height: 10vh;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const NavLogo = styled.img`
  height: 30px;
  width: 80px;
`

export const NavListContainer = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-between;
`

export const NavPathItem = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Roboto';
  display: none;
  @media (min-width: 768px) {
    font-size: 18px;
    display: block;
  }
`

export const LogoutButtonLg = styled.button`
  display: none;
  @media (min-width: 768px) {
    display: block;
    background-color: #4f46e5;
    border-width: 0px;
    color: #f8fafc;
    border-radius: 10px;
    padding: 10px;
    width: 100px;
  }
`

export const LogoutButtonSm = styled.button`
  display: block;
  background-color: transparent;
  border-width: 0px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const SmallIcons = styled.h1`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`
