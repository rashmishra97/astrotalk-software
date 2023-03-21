import Card from 'react-bootstrap/Card'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import { FiPhoneCall } from 'react-icons/fi'
import { TbVideo } from 'react-icons/tb'
import { SlBookOpen } from 'react-icons/sl'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

function BannerCards() {
  const { t } = useTranslation()

  const nav = useNavigate()

  return (
    <div style={styles.card_main_container}>
      <div style={styles.card}>
        <Card
          style={{
            width: '18rem',
            height: '9rem',
            borderRadius: '10px',
          }}
          onClick={() => {
            nav('/list')
          }}
        >
          <HiOutlineChatBubbleLeftRight
            size={45}
            style={{
              display: 'flex',
              margin: 'auto',
              marginTop: '25px',
            }}
          />

          <Card.Body>
            <Card.Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              {t('Chat with astrologer')}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div style={styles.card}>
        <Card
          style={{
            width: '18rem',
            height: '9rem',
            borderRadius: '10px',
          }}
          onClick={() => {
            nav('/list')
          }}
        >
          <FiPhoneCall
            size={45}
            style={{
              display: 'flex',
              margin: 'auto',
              marginTop: '25px',
            }}
          />
          <Card.Body>
            <Card.Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              {t('Talk to Astrologer')}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div style={styles.card}>
        <Card
          style={{ width: '18rem', height: '9rem', borderRadius: '10px' }}
          onClick={() => {
            nav('/list')
          }}
        >
          <TbVideo
            size={45}
            style={{
              display: 'flex',
              margin: 'auto',
              marginTop: '25px',
            }}
          />
          <Card.Body>
            <Card.Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              {t('Live Astrologers')}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div style={styles.card}>
        <Card style={{ width: '18rem', height: '9rem', borderRadius: '10px' }}>
          <SlBookOpen
            size={45}
            style={{
              display: 'flex',
              margin: 'auto',
              marginTop: '25px',
            }}
          />
          <Card.Body>
            <Card.Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              {t('Astrotalk Blog')}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default BannerCards

const styles = {
  card_main_container: {
    display: 'flex',
    justifyContent: 'center',
    // border: "3px solid blue",
    margin: 'auto',
    maxWidth: '1250px',
    // backgroundColor: "yellow",
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  card: {
    marginLeft: '20px',
    marginBottom: '15px',
    // border: "1px solid red"
  },
}
