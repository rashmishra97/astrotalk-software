import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useTranslation } from 'react-i18next'

const AstrologerCarousel = () => {
  const { t } = useTranslation()

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      <div style={styles.heading}>
        <h2 style={styles}>{t('OUR ASTROLOGERS')}</h2>
        <h3
          style={{
            textAlign: 'center',
            color: '#616161',
            paddingTop: '8px',
          }}
        >
          {t('5000+ Best Astrologers from India for Online Consultation')}
        </h3>
      </div>
      <div style={styles.main_container}>
        <Carousel responsive={responsive}>
          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}> Astrologer Type</div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}> Astrologer Type</div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}> Astrologer Type</div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}> Astrologer Type</div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}> Astrologer Type</div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}> Astrologer Type</div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}> Astrologer Type</div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}> Astrologer Type</div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}> Astrologer Type</div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default AstrologerCarousel

const styles = {
  heading: {
    textAlign: 'center',
    padding: '30px 0px',
    // border: "1px solid red"
  },
  main_container: {
    maxWidth: '1200px',
    // border: "1px solid red",
    margin: 'auto',
    marginBottom: '40px',
  },
  card: {
    maxWidth: 270,
    boxShadow: '0px 0px 5px 1px #616161',
    // boxShadow: '1px 1px 1px 1px #616161',
    marginLeft: '20px',
    marginTop: 10,
    marginBottom: 10,
    height: '230px',
    borderRadius: '10px',
  },
  card_img: {
    minHeight: 50,
    display: 'flex',
    justifyContent: 'center',
    // margin: '20px 0px',
    padding: '25px 0px',
  },

  card_title: {
    textAlign: 'center',
    fontWeight: 500,
  },

  card_subtitle: {
    textAlign: 'center',
  },
  card_text: {
    padding: 15,
  },
}
