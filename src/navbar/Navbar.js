import React, { useEffect, useRef, useState } from 'react'
import { style } from './Stylenav'
import { FaUser } from 'react-icons/fa'
import Mobilenav from './Mobilenav'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector'
import Overlay from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Navbar = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const target = useRef(null)

  const [modalShow, setModalShow] = React.useState(false)

  const [wid, setWid] = useState(window.innerWidth)
  const updateSize = () => {
    setWid(window.innerWidth)
    console.log(wid, window.innerWidth, 'wiiiiiid')
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize)
  }, [])

  const gotoLoginPage = () => {
    navigate('/login')
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

      <div style={style.login_div}>
        <span style={style.login_btn} onClick={gotoLoginPage}>
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
            // trigger="focus"
            show={show}
            placement="bottom"
            overlay={
              <Tooltip
                id="overlay-example"
                color="blue"
                style={{
                  paddingTop: 15,
                  margin: 0,
                  // border: '1px solid red',
                  background: 'white',
                  marginTop: 3,
                }}
              >
                <div
                  style={{
                    color: 'black',
                    borderRadius: 3,
                    cursor: 'pointer',
                    background: 'white',
                    padding: '8px 12px',
                    fontSize: 16,
                  }}
                >
                  <div onClick={() => navigate('/transaction')}>
                    Wallet Transaction
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
