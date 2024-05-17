// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <Link to="/">
      <img
        className="logo-icon"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            className="option-btn"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="icon" />
          </button>
        }
      >
        {close => (
          <div className="pop-modal-container">
            <button
              type="button"
              className="trigger-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul className="option-list">
              <Link to="/" className="list-item">
                <li className="list-item">
                  <AiFillHome className="list-icon" />
                  <h1 className="list-title">Home</h1>
                </li>
              </Link>
              <Link to="/about" className="list-item">
                <li className="list-item">
                  <BsInfoCircleFill className="list-icon" />
                  <h1 className="list-title">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
