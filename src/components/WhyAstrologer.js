import React from 'react'
import { useTranslation } from 'react-i18next'

const WhyAstrologer = () => {
  const { t } = useTranslation()

  return (
    <div
      style={{
        background: '#dedede',
      }}
    >
      <div style={styles.container}>
        <h4 style={{ textAlign: 'center' }}>{t('WHY ASTROLOGY ?')}</h4>
        <h6 style={{ textAlign: 'center' }}>
          {' '}
          {t('Astrology reveals the will of the god')}
        </h6>
        <div style={styles.text}>
          <p>
            Astrology is a predictive science with its own sets of methods,
            claims and findings that have forever inspired and allowed people
            with insights into different aspects of their life. Astrology, with
            its wows and hows, is contentful and approving enough to make people
            a believer of the same. And thankfully, it continues to do so
            despite the world shifting bases from what they believe in and what
            they don’t.
          </p>
          <p>
            If one has to go into the technicalities of astrology, it is the
            study of different cosmic objects, which are usually stars and
            planets, that have an effect on the lives of the people. You must be
            aware that there are as many as 8 planets in the solar system.
            However, If I ask an online astrologer near me about the planets in
            astrology, they will tell me that there are as many as 9 planets in
            astrology also called Navagrahas. And surprisingly, the planet
            Earth, in astrology, is not counted among the nine planets.
          </p>
          <p>
            The 9 planets in astrology are Sun (Surya), Moon (Chandra), Mars
            (Mangala), Mercury (Budha), Jupiter (Brihaspati), Venus (Shukra),
            Saturn (Shani), Rahu (north node of the moon), and Ketu (south node
            of the moon).
          </p>
          <p>
            Among these planets, some planets are called friendly planets,
            meaning the presence of them brings positivity to your life. And
            then, there are also planets that have a negative influence on
            humans. The latter would be planets like Rahu and Ketu. Their
            presence in one’s Kundli is said to bring pain and misery. However,
            there is another aspect one needs to be aware of. It’s the fact that
            the presence of Ketu in one’s horoscope is not always bad and
            similarly, the presence of Jupiter in one’s Kundli might not be the
            best every time.
          </p>
          <p>
            It all depends on which houses these planets are sitting in. If you
            ever had the opportunity to talk to an astrologer online, then s/he
            must have told you about houses in astrology and the movements of
            planets in the same. There are as many as 12 houses in Kundli. And
            all of these houses represent one thing or the other. You can check
            your free kundali online.
          </p>
          <p>
            For example, the first house, which any online astrology
            consultation would tell you is also the ascendant of the person, is
            the house of self. It represents a person’s personality and physical
            traits. Similarly, the fifth house in the Vedic horoscope, also
            known as Putra Bhava is the house of creativity, playfulness, joy,
            pleasure, and romance. If, for example, a good planet, like Jupiter,
            is camping in the fifth house, your love life will excel. Likewise,
            if Rahu is camping in the same house, then you might feel the need
            for online astrology consultation to deal with the woes.
          </p>
          <p>
            Then there are other things in astrology like elements, the Moon
            sign of an individual, numerology, tarot and so much more that is
            impossible to wind up here.
          </p>
          <p>
            <strong>Online Astrology Consultation &amp; Services</strong>
          </p>
          <p>
            The online footprint of things and people has grown over the years.
            And Astrotalk, as a brand, is using the best of it to cater online
            astrology services to anyone and everyone across the length and
            breadth of the globe. Astrotalk, over the years, has nurtured as a
            community of the best astrologers who have their expertise in Vedic
            Astrology, tarot card reading, Vastu Shastra, numerology, Reiki
            healing, Palmistry, and many more subjects.
          </p>
          <p>
            The motive behind providing astrology predictions online is simply
            helping people save time, money, and pain to find astrologers in the
            hustle and bustle of the city lights. Besides, to ensure
            credibility, Astrotalk has, over the years, worked extensively to
            add value to customer service. And a good chunk of credit for this
            goes to the astrologers who work for 100% customer satisfaction
            using their knowledge to deliver impeccable astrology consultancy. s
          </p>
          <p>
            Surely, not everything in life should revolve around money, so we at
            Astrotalk, besides online astrology, also organize various events
            that help one get a better understanding of online astrology
            prediction and more related themes. These events range from free
            astrology predictions sessions to live events involving Aartis and
            Pujas that happen across India at some of the most renowned temples.
            It's a way for us to connect with people.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyAstrologer

const styles = {
  container: {
    background: '#dedede',
    // textAlign: 'center',
    padding: '20px 0px',
    // border: '1px solid red',
    maxWidth: '1190px',
    margin: 'auto',
  },

  text: {
    padding: '20px 20px',
  },
}
