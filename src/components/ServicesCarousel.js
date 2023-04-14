import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { GiLuckyFisherman } from 'react-icons/gi'
import { TbGridPattern } from 'react-icons/tb'
import { SiHandshake } from 'react-icons/si'
import { MdFestival } from 'react-icons/md'
import { GiLinkedRings } from 'react-icons/gi'
import { GiRingedPlanet } from 'react-icons/gi'
import { FaLifeRing } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const ServicesCarousel = () => {
  const { t } = useTranslation()

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      // partialVisibilityGutter: 100
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      // partialVisibilityGutter: 100
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // partialVisibilityGutter: 100
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // partialVisibilityGutter: 100
    },
  }
  return (
    <div
      style={{
        background: '#dedede',
        // border: '1px solid green',
        paddingBottom: '25px',
      }}
    >
      <h3
        style={{
          padding: '25px 0px',
          textAlign: 'center',
        }}
      >
        {t('COMPLIMENTARY ASTROLOGY SERVICES')}
      </h3>
      <div style={styles.main_container}>
        <Carousel responsive={responsive} centerMode={false}>
          <div style={styles.card}>
            <GiLuckyFisherman
              size={80}
              style={{
                margin: '20px 10',
              }}
            />
            <h5
              style={{
                margin: '12px 10px',
              }}
            >
              {t("Today's Horoscope")}
            </h5>
            <div style={styles.desc}>
              {' '}
              Get free Aries daily horoscope prediction today online from the
              best astrologer. Read your Aries Zodiac Sign horoscope today!{' '}
            </div>
          </div>

          <div style={styles.card}>
            <TbGridPattern
              size={80}
              style={{
                margin: '20px 10',
              }}
            />
            <h5
              style={{
                margin: '12px 10px',
              }}
            >
              {t('Free Kundli')}
            </h5>
            <div style={styles.desc}>
              {' '}
              Generate your free online kundli report from Astrotalk. Our Kundli
              software can help you predict the future for yourself by reading
              the birth chart.{' '}
            </div>
          </div>

          <div style={styles.card}>
            <SiHandshake
              size={80}
              style={{
                margin: '20px 10',
              }}
            />
            <h5
              style={{
                margin: '12px 10px',
              }}
            >
              {t('Compatibility')}
            </h5>
            <div style={styles.desc}>
              Love could be confusing, but only until you haven’t found how
              compatible you two are for each other.
            </div>
          </div>

          <div style={styles.card}>
            <MdFestival size={80} />
            <h5
              style={{
                margin: '12px 10px',
              }}
            >
              {t('Festival 2023')}
            </h5>
            <div style={styles.desc}>
              {' '}
              Festival -- "Its Nothing but an Uncountable forms of
              celebrations". Check Out for more{' '}
            </div>
          </div>

          <div style={styles.card}>
            <GiLinkedRings size={80} />
            <h5
              style={{
                margin: '12px 10px',
              }}
            >
              Kundli Matching
            </h5>
            <div style={styles.desc}>
              {' '}
              Check Love Compatibility and Marriage Prediction online at
              Astrotalk. Get the best Horoscope and kundli matching predictions
              today!{' '}
            </div>
          </div>

          <div style={styles.card}>
            <GiRingedPlanet size={80} />
            <h5
              style={{
                margin: '12px 10px',
              }}
            >
              {' '}
              Chinese Horoscope
            </h5>
            <div style={styles.desc}>
              {' '}
              Are you a Cat? A Mouse? Or the roaring Lion? Let the Chinese
              astrology reveal it for you. Check your's now{' '}
            </div>
          </div>

          <div style={styles.card}>
            <FaLifeRing size={80} />
            <h5
              style={{
                margin: '12px 10px',
              }}
            >
              Today Panchang
            </h5>
            <div style={styles.desc}>
              {' '}
              Panchang enlists a record of auspicious dates and times for any
              auspicious task such as marriage, celebration, puja, starting any
              business etc.{' '}
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
export default ServicesCarousel

const styles = {
  main_container: {
    maxWidth: 1250,
    margin: 'auto',
    padding: 10,
    textAlign: 'center',
    // marginBottom: 50,
  },

  card: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    maxWidth: '320px',
    margin: 'auto',
    textAlign: 'center',
    height: 340,
    borderRadius: 10,
    marginLeft: 22,
    padding: 10,
    backgroundColor: 'white',
  },

  desc: {
    margin: '18px 10px',
  },
}
