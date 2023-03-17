import React from 'react'
import { style } from '../navbar/Stylenav';

const Footer = () => {
    return (
        <div>
            <div className="red-bg">
                <div
                    style={{
                        margin: "0 20px 20px 20px",
                        maxWidth: 380,
                    }}
                >
                    <div className="footer-title">CORPORATE Info</div>
                    <li className="footer-li">Refund and Cancellation Policy</li>
                    <li className="footer-li">Disclaimer</li>
                    <li className="footer-li">About Us</li>
                    <li className="footer-li">Pricing Policy</li>
                    <li className="footer-li">Terms and Conditions</li>
                    <li className="footer-li">Privacy Policy</li>
                </div>

                <div
                    style={{
                        margin: "0 20px 20px 20px",
                        flex: 1,
                    }}
                >
                    <div className="footer-title">Contact us</div>
                    <li className="footer-li">
                        We are available 24 * 7 on chat <br />
                        support, click to start chat
                    </li>
                    <li className="footer-li">Email ID: contact@astrotalk.com</li>
                </div>
                <div
                    style={{
                        margin: "0 20px 20px 20px",
                        flex: 1,
                    }}
                >
                    <div className="footer-title"> Secure</div>
                    <li className="footer-li">Private and Confidential</li>
                    <li className="footer-li">Verified Astrologer</li>
                    <li className="footer-li">Secure  Payments</li>
                </div>
                <div style={{ margin: "0 20px", flex: 1 }}>
                    <div className="footer-title"> SOCIAL:</div>
                    <li className="footer-li">
                        <img src="facebook-png.png" alt="logo" width="30px"></img>
                    </li>
                    <li className="footer-li">
                        <img src="instagram-png.png" alt="logo" width="30px" />
                    </li>
                    <li className="footer-li">
                        <img src="linkedin-png.png" alt="logo" width="30px" />
                    </li>
                    <li className="footer-li">
                        <img src="youtube-png.png" alt="logo" width="30px" />
                    </li>
                </div>
            </div>

        </div>
    )
}

export default Footer;

// const style = {

// }