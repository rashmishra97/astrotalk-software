import React, { useEffect, useState } from 'react'
import { style } from './Stylenav'
import { FaUser } from 'react-icons/fa'
import Mobilenav from './Mobilenav';
import Button from 'react-bootstrap/Button';
const Navbar = () => {

    const [wid, setWid] = useState(window.innerWidth);
    const updateSize = () => {
        setWid(window.innerWidth)
        console.log(wid, window.innerWidth, "wiiiiiid");
    }

    useEffect(() => {
        window.addEventListener("resize", updateSize)
    }, [])

    return (
        wid > 640 ?
            <div style={style.navbar_container}  >
                <div style={style.navbar_logo}  >
                    <img src='astro1.jfif'
                        alt='logo'
                        width='100px'
                        height='50px'>
                    </img>
                    <span style={style.text} >Astrotalk</span>
                </div>
                <div style={style.login_div} >
                    <span style={style.login_btn}>Login</span>
                    <span style={style.img} >
                        <img src='language_icon.webp' alt='language img' width={60} height='27px'>
                        </img>
                    </span>
                    <span style={style.user_icon}   >
                        <FaUser size={30} />
                    </span>
                </div>
            </div> : <Mobilenav />
    )
}

export default Navbar;

{/* <Button >button</Button> */ }
