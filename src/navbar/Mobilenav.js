import React, { useEffect, useState } from 'react'
import { style } from './Stylenav'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../components/LanguageSelector'
import { useNavigate } from 'react-router-dom'

const Mobilenav = () => {
  const { t } = useTranslation()
  const [modalShow, setModalShow] = React.useState(false)

  const nav = useNavigate()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div style={{ ...style.navbar_container, justifyContent: 'space-between' }}>
      <div style={{ ...style.navbar_logo, margin: '0px 5px' }}>
        <AiOutlineMenu
          size={25}
          onClick={() => {
            handleShow()
          }}
        />
        <LanguageSelector show={modalShow} onHide={() => setModalShow(false)} />

        <img
          src="astro1.jfif"
          style={{ marginLeft: '5px' }}
          alt="logo"
          width="60px"
          height="20px"
        ></img>
        <span style={{ ...style.text, fontSize: '18px', marginLeft: '20px' }}>
          Astrotalk
        </span>
      </div>
      <div style={{ ...style.login_div, marginLeft: '0px' }}>
        <span>
          <img
            src="language_icon.webp"
            alt="language img"
            width={50}
            height="20px"
            onClick={() => {
              setModalShow(true)
            }}
          ></img>
        </span>
        <span style={{ ...style.user_icon, marginRight: '0px' }}>
          <FaRegUser size={20} style={{ marginRight: '0px' }} />
        </span>
      </div>

      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="start"
          style={styles.offcanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img
                src="astro1.jfif"
                style={{ marginLeft: '15px' }}
                alt="logo"
                width="90px"
                height="30px"
              ></img>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={styles.offcanvasBody} padd>
            <hr style={{ width: '100%', padding: '0px', color: 'black' }} />
            <ul style={styles.ul}>
              <li>{t('Notification')}</li>
              <hr />
              <li>Sign Up as Astrologer</li>
              <hr />
              <li>Login</li>
              <hr />
              <li>Astromail</li>
              <hr />
              <li
                onClick={() => {
                  nav('/transaction')
                }}
              >
                Wallet Transaction
              </li>
              <hr />
              <li>Logout</li>
              <hr />
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  )
}

export default Mobilenav

const styles = {
  offcanvasBody: {
    flexGrow: '1',
    padding: '0px',
    overflowY: 'auto',
  },
  ul: {
    padding: '15px',
    listStyleType: 'none',
    width: '100%',
  },
  offcanvas: {
    backgroundColor: '#ededed',
  },
}
