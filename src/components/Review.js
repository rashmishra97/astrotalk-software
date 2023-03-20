import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useTranslation } from 'react-i18next'

const Review = () => {
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
        <h2 style={styles}>{t('ASTROTALK REVIEWS')}</h2>
        <h3
          style={{
            textAlign: 'center',
            color: '#616161',
            paddingTop: '8px',
          }}
        >
          {t("Here about us from our customers")}
        </h3>
      </div>
      <div style={styles.main_container}>
        <Carousel responsive={responsive}>
          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Dale Stricklin</div>
            <div style={styles.card_subtitle}>Sydney, Australia</div>
            <div style={styles.card_text}>
              Consulted an Astrologer for child name's based on nakshatras. The
              service was good at a reasonable price and they were very patient
              and clear during the session. The names were suggested according
              to astrology and numerology and we got an awesome name for our
              baby boy.
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Dale Stricklin</div>
            <div style={styles.card_subtitle}>Sydney, Australia</div>
            <div style={styles.card_text}>
              Consulted an Astrologer for child name's based on nakshatras. The
              service was good at a reasonable price and they were very patient
              and clear during the session. The names were suggested according
              to astrology and numerology and we got an awesome name for our
              baby boy.
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Dale Stricklin</div>
            <div style={styles.card_subtitle}>Sydney, Australia</div>
            <div style={styles.card_text}>
              Consulted an Astrologer for child name's based on nakshatras. The
              service was good at a reasonable price and they were very patient
              and clear during the session. The names were suggested according
              to astrology and numerology and we got an awesome name for our
              baby boy.
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Dale Stricklin</div>
            <div style={styles.card_subtitle}>Sydney, Australia</div>
            <div style={styles.card_text}>
              Consulted an Astrologer for child name's based on nakshatras. The
              service was good at a reasonable price and they were very patient
              and clear during the session. The names were suggested according
              to astrology and numerology and we got an awesome name for our
              baby boy.
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Dale Stricklin</div>
            <div style={styles.card_subtitle}>Sydney, Australia</div>
            <div style={styles.card_text}>
              Consulted an Astrologer for child name's based on nakshatras. The
              service was good at a reasonable price and they were very patient
              and clear during the session. The names were suggested according
              to astrology and numerology and we got an awesome name for our
              baby boy.
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Dale Stricklin</div>
            <div style={styles.card_subtitle}>Sydney, Australia</div>
            <div style={styles.card_text}>
              Consulted an Astrologer for child name's based on nakshatras. The
              service was good at a reasonable price and they were very patient
              and clear during the session. The names were suggested according
              to astrology and numerology and we got an awesome name for our
              baby boy.
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Dale Stricklin</div>
            <div style={styles.card_subtitle}>Sydney, Australia</div>
            <div style={styles.card_text}>
              Consulted an Astrologer for child name's based on nakshatras. The
              service was good at a reasonable price and they were very patient
              and clear during the session. The names were suggested according
              to astrology and numerology and we got an awesome name for our
              baby boy.
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Dale Stricklin</div>
            <div style={styles.card_subtitle}>Sydney, Australia</div>
            <div style={styles.card_text}>
              Consulted an Astrologer for child name's based on nakshatras. The
              service was good at a reasonable price and they were very patient
              and clear during the session. The names were suggested according
              to astrology and numerology and we got an awesome name for our
              baby boy.
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.card_img}>
              <img
                style={{ borderRadius: '150px', width: 100, height: 100 }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Dale Stricklin</div>
            <div style={styles.card_subtitle}>Sydney, Australia</div>
            <div style={styles.card_text}>
              Consulted an Astrologer for child name's based on nakshatras. The
              service was good at a reasonable price and they were very patient
              and clear during the session. The names were suggested according
              to astrology and numerology and we got an awesome name for our
              baby boy.
            </div>
          </div>

          {/* <div style={styles.card}></div>
          <div style={styles.card}>Ituu</div>
          <div style={styles.card}>Item 4</div>
          <div style={styles.card}>Item 5</div>
          <div style={styles.card}>Item 6</div> */}
        </Carousel>
      </div>
    </div>
  )
}

export default Review

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
    height: '450px',
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
