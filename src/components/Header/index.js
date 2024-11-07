/* eslint-disable jsx-a11y/control-has-associated-label */
import './index.css'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const Header = props => {
  const remove = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <nav className="nav-el">
      <Link to="/" className="link-el">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="kt"
        />
      </Link>
      <button className="rr" type="button" onClick={remove}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
