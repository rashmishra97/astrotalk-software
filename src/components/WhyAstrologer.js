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
          <p>{t('para1')}</p>
          <p>{t('para2')}</p>
          <p>{t('para3')}</p>
          <p>{t('para4')}</p>
          <p>{t('para5')}</p>
          <p>{t('para6')}</p>
          <p>{t('para7')}</p>
          <p>
            <strong>
              {t('Online Astrology Consultation')} {t('Services')}
            </strong>
          </p>
          <p>{t('para8')}</p>
          <p>{t('para9')}</p>
          <p>{t('para10')}</p>
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
