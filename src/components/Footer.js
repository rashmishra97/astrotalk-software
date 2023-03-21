import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <div style={styles.footer_bg}>
        <div
          style={{
            margin: '0 20px 20px 20px',
            maxWidth: 380,
            paddingLeft: '0px',
          }}
        >
          <h4
            style={{
              borderBottom: '2px solid yellow',
              display: 'inline-block',
            }}
          >
            {t('Corporate Info')}
          </h4>
          <div>
            <li className="footer-li" style={styles.li}>
              {t('Refund and Cancellation Policy')}
            </li>
            <li className="footer-li" style={styles.li}>
              {t('Disclaimer')}
            </li>
            <li className="footer-li" style={styles.li}>
              {t('About Us')}
            </li>
            <li className="footer-li" style={styles.li}>
              {t('Pricing Policy')}
            </li>
            <li className="footer-li" style={styles.li}>
              {t('Terms and Conditions')}
            </li>
            <li className="footer-li" style={styles.li}>
              {t('Privacy Policy')}
            </li>
          </div>
        </div>

        <div
          style={{
            margin: '0 20px 20px 20px',
            flex: 1,
          }}
        >
          <h4
            style={{
              borderBottom: '2px solid yellow',
              display: 'inline-block',
            }}
          >
            {t('Contact us')}
          </h4>
          <li style={styles.li}>
            {t('We are available 24 * 7 on chat')} <br />
            {t('support, click to start chat')}
          </li>
          <li style={styles.li}>{t('Email ID: contact@astrotalk.com')}</li>
        </div>

        <div
          style={{
            margin: '0 20px 20px 20px',
            flex: 1,
          }}
        >
          <h4
            style={{
              borderBottom: '2px solid yellow',
              display: 'inline-block',
            }}
          >
            {' '}
            {t('Secure')}
          </h4>
          <li style={styles.li}>{t('Private and Confidential')}</li>
          <li style={styles.li}>{t('Verified Astrologer')}</li>
          <li style={styles.li}>{t('Secure Payments')}</li>
        </div>

        <div style={{ margin: '0px 20px', flex: '1' }}>
          <h4
            style={{
              borderBottom: '2px solid yellow',
              display: 'inline-block',
              marginBottom: '20px',
            }}
          >
            {' '}
            {t('SOCIAL')}
          </h4>
          <div style={styles.social_li}>
            <li className="footer-li" style={{ marginRight: '25px' }}>
              <img src="facebook-png.png" alt="logo" width="40px"></img>
            </li>
            <li className="footer-li" style={{ marginRight: '25px' }}>
              <img src="instagram-png.png" alt="logo" width="40px" />
            </li>
            <li className="footer-li" style={{ marginRight: '25px' }}>
              <img src="linkedin-png.png" alt="logo" width="40px" />
            </li>
            <li className="footer-li" style={{ marginRight: '25px' }}>
              <img src="youtube-png.png" alt="logo" width="40px" />
            </li>
          </div>

          <span>
            <li className="footer-li" style={styles.apps}>
              <img
                src="android-img.webp"
                alt="logo"
                width="120px"
                style={{
                  marginRight: '5px',
                }}
              />
              <img
                src="ios-img.webp"
                alt="logo"
                width="120px"
                style={{
                  marginLeft: '5px',
                }}
              />
            </li>
          </span>
        </div>
      </div>

      {/* copy right footer */}
      <div style={styles.copyright_footer}>
        <p style={{ margin: '0px' }}>
          Copyright @ 2023 LogixHunt Software Solutions Pvt. Ltd. All Rights
          Reserved{' '}
        </p>
      </div>
    </>
  )
}

export default Footer

const styles = {
  footer_bg: {
    backgroundColor: 'black',
    display: 'flex',
    color: 'white',
    paddingTop: '20px',
    listStyleType: 'none',
    paddingLeft: '25px',
    flexWrap: 'wrap',
  },
  social_li: {
    display: 'flex',
    // textAlign: "left"
  },

  apps: {
    marginTop: '30px',
    display: 'flex',
  },
  li: {
    marginTop: '15px',
  },

  copyright_footer: {
    backgroundColor: '#36454F',
    padding: '16px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontStyle: 'bold',
  },
}
