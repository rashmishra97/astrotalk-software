import React, { useEffect, useRef, useState } from 'react'
import { style } from './Stylenav'
import { FaUser } from 'react-icons/fa'
import Mobilenav from './Mobilenav'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector'
import Overlay from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Login from '../components/Login'

const Navbar = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const target = useRef(null)

  const [modalShow, setModalShow] = React.useState(false)

  const [wid, setWid] = useState(window.innerWidth)
  const updateSize = () => {
    setWid(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize)
  }, [])

  // const gotoLoginPage = () => {
  //   navigate('/login')
  // }

  const toggleFunction = (showLogin) => {
    setShowLogin(showLogin)
  }

  return wid > 640 ? (
    <div style={style.navbar_container}>
      <Link
        to={{
          pathname: '/',
        }}
      >
        <div style={style.navbar_logo}>
          <img src="astro1.jfif" alt="logo" width="100px" height="50px"></img>
          <span style={style.text}>Astrotalk</span>
        </div>
      </Link>

      {/* {modalShow && (
        <LanguageSelector show={modalShow} onHide={() => setModalShow(false)} />
      )} */}

      <LanguageSelector show={modalShow} onHide={() => setModalShow(false)} />
      {showLogin && <Login toggleFunction={toggleFunction} />}


      <div style={style.login_div}>
        <span style={style.login_btn} onClick={() => setShowLogin(true)} >
          {t('Login')}
        </span>

        <span style={style.img}>
          <img
            src="language_icon.webp"
            alt="language img"
            width={60}
            height="27px"
            onClick={() => setModalShow(true)}
          ></img>
        </span>

        <div style={{ position: 'relative' }}>
          <Overlay
            target={target.current}
            show={show}
            placement="bottom-end"
            overlay={
              <Tooltip
                id="overlay-example"
                color="blue"
                aria-flowto="left"
                // onTouchCancel="true"
                style={{
                  position: 'relative',
                  // zIndex: 1,
                  right: 0,
                  marginTop: 15,
                  // border: '2px solid red'
                }}
              >
                <div
                  style={{
                    // border: '3px solid blue',
                    cursor: 'pointer',
                    fontSize: 17,
                    color: '#616161',
                    borderRadius: 7,
                    position: 'relative',
                    zIndex: 999,
                    width: '280px',
                    minWidth: 'auto',
                    boxShadow: '0px 0px 3px .5px #616161',
                    padding: '5px 10px 20px 10px',
                    listStyleType: 'none',
                  }}
                >
                  <li onClick={() => setShow()} >
                    <img onClick={() => navigate('/userProfile')}
                      src="https://aws.astrotalk.com/assets/images/astrolger/profile_pic.png"
                      alt="profile"
                      width="85"
                      height=""
                      style={{
                        borderRadius: '50%',
                        margin: '5px 10px 12px 10px',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                    ></img>
                  </li>

                  <hr />
                  <div style={{ textAlign: 'left', padding: '10px 0px' }}>
                    <li>
                      <Link
                        to="/userProfile"
                        style={{
                          textDecoration: 'none',
                          color: '#616161',
                          padding: '5px 0px',
                          cursor: 'pointer',
                        }} onClick={() => setShow()}
                      >
                        Profile
                      </Link>
                    </li>


                    <li>
                      <Link
                        to="/notification"
                        style={{
                          textDecoration: 'none',
                          color: '#616161',
                          padding: '5px 0px',
                          cursor: 'pointer',
                        }} onClick={() => setShow()}
                      >
                        Notification
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/transaction"
                        style={{
                          textDecoration: 'none',
                          justifyContent: 'space-between',
                          display: 'flex',
                          padding: '5px 0px',
                          color: '#616161',
                          cursor: 'pointer',
                        }}
                        onClick={() => setShow(false)}
                      >
                        <div>Wallet Transaction</div>
                        <div>₹ 0</div>
                      </Link>
                    </li>

                    <li>
                      <Link to='/orderHistory' style={{ textDecoration: 'none', color: '#616161', }} onClick={() => setShow(false)} >
                        Order History
                      </Link>
                    </li>

                    <li>Logout</li>
                  </div>
                </div>
              </Tooltip>
            }
          >
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <FaUser 
                size={30}
                onClick={() => setShow(!show)}
                style={style.user_icon}
              />
            </div>
          </Overlay>
        </div>
      </div>
    </div>
  ) : (
    <Mobilenav />
  )
}

export default Navbar
