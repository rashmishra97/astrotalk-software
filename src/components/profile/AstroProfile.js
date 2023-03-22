import React from 'react'
import { Button } from 'react-bootstrap'

const AstroProfile = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1110px',
        margin: 'auto',
        flexWrap: 'wrap',
      }}
    >
      <div style={styles.card_main}>
        <div
          style={{
            // border: '3px solid green',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <div style={styles.card_imgdiv}>
            <div>
              <img
                src="astro-img.jpg"
                alt="astro img"
                width={220}
                height={220}
                style={styles.card_img}
              ></img>
            </div>
          </div>

          <div
            style={{
              margin: '18px',
              marginLeft: '5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <div style={styles.card_typediv}>
              <div style={{ display: 'flex' }}>
                <h3
                  style={{
                    fontWeight: '900px',
                    fontSize: '20px',
                    marginRight: '10px',
                  }}
                >
                  Astrologer Name
                </h3>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    width={22}
                    height={22}
                    alt="rating"
                  />
                </div>
              </div>

              <div
                style={{
                  color: 'gray',
                  fontSize: '18px',
                  marginBottom: '2px',
                }}
              >
                Numerlogy, Vastu, Tarot{' '}
              </div>
              <div
                style={{
                  color: 'gray',
                  marginBottom: '2px',
                  fontSize: '18px',
                }}
              >
                Hindi
              </div>
              <div
                style={{ color: 'gray', marginBottom: '2px', fontSize: '18px' }}
              >
                Exp : 10 yrs
              </div>
              <span
                style={{
                  color: '#8B0019',
                  marginBottom: '2px',
                  fontSize: '18px',
                }}
              >
                ₹ 20 &nbsp;
                <del style={{ color: 'gray' }}> 28/min</del>
              </span>
            </div>

            <div style={styles.card_calldiv}>
              <div
                style={{
                  margin: '0px',
                }}
              >
                <Button
                  variant="outline-success"
                  color="green"
                  size="lg"
                  style={{
                    width: '250px',
                    borderRadius: '150px',
                    height: '60px',
                  }}
                >
                  <img
                    src="https://astrotalk.s3.amazonaws.com/assets/images/chatoffline/online-status-chat.webp"
                    alt="call-img"
                    width={27}
                    style={{ float: 'left' }}
                  />
                  Start Call
                </Button>
                <Button
                  variant="outline-secondary"
                  size="lg"
                  si
                  style={{
                    width: '250px',
                    borderRadius: '150px',
                    height: '60px',
                  }}
                >
                  <img
                    src="https://astrotalk.s3.amazonaws.com/assets/images/chatoffline/offline-status-call.webp"
                    alt="call-img"
                    width={27}
                    style={{ float: 'left' }}
                  />
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2
            style={{
              fontSize: '20px',
              margin: '20px 0px',
              textAlign: 'center',
              color: '#454545',
              // border: '1px solid red',
            }}
          >
            About me
          </h2>
          <p
            style={{
              fontSize: '14px',
              marginBottom: '10px',
              color: '#454545',
            }}
          >
            Tarot Ruchi is a celebrated Astrologer with an experience of more
            than 5 years in the field of Astrology. She is an expert of Tarot
            Card Reading, Face Reading and also a well-versed Psychic reader.
            Talking about her educational qualifications, she has done Clinical
            Hypnotherapy from California Hypnosis Institute, Clinical Psychology
            from IGNOU, Graphology from Indian Institute of Graphology and also
            an advanced course in Pranic Healing. She is an all-round Astrologer
            and intuitive reader who can provide you with an insight of your
            life using her tarot cards and guidance for bringing stability in
            your lives. Working from last 5 years she has learnt a lot of things
            regarding human nature and her main motive is to serve the society
            and work for the benefit of the people. In fact, the remedies she
            provides are completely based on current life situations of the
            people and leaves a very positive impact on their future life.
            Besides this, you can also consult her regarding Career &amp;
            Business, Love &amp; Relationship, Wealth &amp; Property, Marriage
            Problems, Educational Problems or any other problem that is creating
            hurdles in your life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AstroProfile

const styles = {
  card_main: {
    width: '100%',
    margin: '30px 8px',
    boxShadow: '0px 0px 5px 1px #616161',
    borderRadius: '10px',
    padding: '20px 10px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  card_img: {
    borderRadius: '300px',
    border: '1px solid red',
    padding: '20px',
  },

  card_imgdiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItem: 'center',
    maxHeight: '650px',
    // border: '2px solid pink',
    margin: '20px',
  },

  card_typediv: {},

  card_calldiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}
