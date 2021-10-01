import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiOutlineHome} from 'react-icons/hi'
import {BsBriefcase} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Navbar = props => {
  const onclickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="nav-logo"
        />
      </Link>
      <ul className="nav-list-container">
        <li>
          <Link to="/">
            <h1 className="nav-path-item">Home</h1>
            <h1 className="small-icons">
              <HiOutlineHome color="#ffffff" />
            </h1>
          </Link>
        </li>
        <li>
          <Link to="/jobs">
            <h1 className="nav-path-item">Jobs</h1>
            <h1 className="small-icons">
              <BsBriefcase color="#ffffff" />
            </h1>
          </Link>
        </li>
        <li>
          <button
            className="logout-button-lg"
            type="button"
            onClick={onclickLogout}
          >
            Logout
          </button>
          <button
            className="logout-button-sm"
            type="button"
            onClick={onclickLogout}
          >
            <FiLogOut color="#ffffff" height={80} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Navbar)
