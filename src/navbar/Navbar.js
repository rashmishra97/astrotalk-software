import React, { useEffect, useState } from 'react'
import { style } from './Stylenav'
import { FaUser } from 'react-icons/fa'
import Mobilenav from './Mobilenav'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector'

const Navbar = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

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
        <span style={style.user_icon}>
          <FaUser size={30} />
        </span>
      </div>
    </div>
  ) : (
    <Mobilenav />
  )
}

export default Navbar
