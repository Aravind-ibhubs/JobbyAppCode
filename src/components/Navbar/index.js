import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiOutlineHome} from 'react-icons/hi'
import {BsBriefcase} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import {
  NavContainer,
  NavLogo,
  NavListContainer,
  NavPathItem,
  LogoutButtonLg,
  LogoutButtonSm,
  SmallIcons,
} from './styledComponents'

const Navbar = props => {
  const onclickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavContainer>
      <NavLogo
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <NavListContainer>
        <Link to="/">
          <NavPathItem>Home</NavPathItem>
          <SmallIcons>
            <HiOutlineHome color="#ffffff" />
          </SmallIcons>
        </Link>
        <Link to="/jobs">
          <NavPathItem>Jobs</NavPathItem>
          <SmallIcons>
            <BsBriefcase color="#ffffff" />
          </SmallIcons>
        </Link>
      </NavListContainer>
      <LogoutButtonLg type="button" onClick={onclickLogout}>
        Logout
      </LogoutButtonLg>
      <LogoutButtonSm type="button" onClick={onclickLogout}>
        <FiLogOut color="#ffffff" height={80} />
      </LogoutButtonSm>
    </NavContainer>
  )
}

export default withRouter(Navbar)
