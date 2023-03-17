import React from 'react'
import { style } from './Stylenav'
import { FaUser } from 'react-icons/fa'
// import './Navbar.css'

const Navbar = () => {
    return (
        <div style={style.navbar_container} className="navbar_container" >
            <div style={style.navbar_logo} className='navbar_logo' >

                <img src='astro1.jfif' className='img'
                    alt='logo'
                    width='130px'
                    height='50px'>
                </img>
                <span style={style.text}>Astrotalk</span>
            </div>
            <div style={style.login_div} className="login-div">
                <span style={style.login_btn}>Login</span>
                <span style={style.user_icon}   >
                    <FaUser width="50px" height={20} />
                </span>
            </div>
        </div>
    )
}

export default Navbar;