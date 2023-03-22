import React, { useState } from 'react'
import { Breadcrumb, Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SortComp from './SortComp'
import { CiSearch } from 'react-icons/ci'
import AstroFilter from './AstroFilter'

const AstrologersList = () => {
  const [modalShow, setModalShow] = useState(false)
  const [filterShow, setFilterShow] = useState(false)

  const nav = useNavigate()

  return (
    <div
      style={{
        boxShadow: '0px 0px 5px 1px #616161',
        marginTop: '15px',
      }}
    >
      <div
        style={{
          padding: '30px 0px',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1200px',
          margin: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
            marginBottom: '10px',
            maxWidth: '1138px',
            marginLeft: '28px',
            // minWidth: ''
          }}
        >
          {modalShow && (
            <SortComp show={modalShow} onHide={() => setModalShow(false)} />
          )}
          {filterShow && (
            <AstroFilter
              show={filterShow}
              onHide={() => setFilterShow(false)}
            />
          )}
          <div>
            <Breadcrumb>
              <Breadcrumb.Item href="http://localhost:3000">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Astrologers</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <span>Available balance: ₹ 0</span>
          <div
            style={{
              flexWrap: 'wrap',
              marginLeft: '5px',
              width: 480,
              display: 'flex',
            }}
          >
            <Button
              variant="outline-success"
              style={{ width: '100px' }}
              onClick={() => nav('/recharge')}
            >
              Recharge
            </Button>

            <Button
              variant="outline-secondary"
              style={{ width: '70px' }}
              onClick={() => setFilterShow(true)}
            >
              {console.log('chala hu')}
              Filter
            </Button>

            <Button
              variant="outline-secondary"
              style={{ width: '80px' }}
              onClick={() => setModalShow(true)}
            >
              Sort by
            </Button>

            <InputGroup style={{ maxWidth: 220, height: 50, marginBottom: 0 }}>
              <Form.Control
                size="md"
                placeholder="Search by..."
                style={{ padding: '5px 10px' }}
              />
              <CiSearch
                color="#616161"
                style={{
                  float: 'right',
                  margin: '15px 2px',
                }}
              />
            </InputGroup>
          </div>
        </div>

        <div style={{ margin: '20px 0px' }}>
          {/* Horizontal div */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Crad div */}
            <div style={styles.card_main} onClick={() => nav('/profile')}>
              <div style={styles.card_imgdiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                    alt="astro img"
                    width={65}
                    height={65}
                    style={styles.card_img}
                  ></img>
                </div>
                <div style={{ fontSize: '12px', color: 'gary' }}>
                  21685 orders
                </div>
              </div>

              <div style={styles.card_typediv}>
                <div style={{ fontWeight: '900px', fontSize: '16px' }}>
                  Astrologer Name
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Numerlogy, Vastu, Tarot{' '}
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>Hindi</div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Exp : 10 yrs
                </div>
                <span style={{ color: 'gray', fontSize: '14px' }}>
                  ₹ 20 &nbsp;
                  <del> 28/min</del>
                </span>
              </div>

              {/*------ Call div------ */}
              <div style={styles.card_calldiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    width={20}
                    height={20}
                    alt="rating"
                    style={{ float: 'right' }}
                  />
                </div>
                <div>
                  <Button variant="outline-secondary" style={{ width: '80px' }}>
                    Call
                  </Button>
                </div>
              </div>
            </div>
            {/* Crad div */}

            <div style={styles.card_main} onClick={() => nav('/profile')}>
              <div style={styles.card_imgdiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                    alt="astro img"
                    width={65}
                    height={65}
                    style={styles.card_img}
                  ></img>
                </div>
                <div style={{ fontSize: '12px', color: 'gary' }}>
                  21685 orders
                </div>
              </div>

              <div style={styles.card_typediv}>
                <div style={{ fontWeight: '900px', fontSize: '16px' }}>
                  Astrologer Name
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Numerlogy, Vastu, Tarot{' '}
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>Hindi</div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Exp : 10 yrs
                </div>
                <span style={{ color: 'gray', fontSize: '14px' }}>
                  ₹ 20 &nbsp;
                  <del> 28/min</del>
                </span>
              </div>

              {/*------ Call div------ */}
              <div style={styles.card_calldiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    width={20}
                    height={20}
                    alt="rating"
                    style={{ float: 'right' }}
                  />
                </div>
                <div>
                  <Button variant="outline-secondary" style={{ width: '80px' }}>
                    Call
                  </Button>
                </div>
              </div>
            </div>

            <div style={styles.card_main} onClick={() => nav('/profile')}>
              <div style={styles.card_imgdiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                    alt="astro img"
                    width={65}
                    height={65}
                    style={styles.card_img}
                  ></img>
                </div>
                <div style={{ fontSize: '12px', color: 'gary' }}>
                  21685 orders
                </div>
              </div>

              <div style={styles.card_typediv}>
                <div style={{ fontWeight: '900px', fontSize: '16px' }}>
                  Astrologer Name
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Numerlogy, Vastu, Tarot{' '}
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>Hindi</div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Exp : 10 yrs
                </div>
                <span style={{ color: 'gray', fontSize: '14px' }}>
                  ₹ 20 &nbsp;
                  <del> 28/min</del>
                </span>
              </div>

              {/*------ Call div------ */}
              <div style={styles.card_calldiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    width={20}
                    height={20}
                    alt="rating"
                    style={{ float: 'right' }}
                  />
                </div>
                <div>
                  <Button variant="outline-secondary" style={{ width: '80px' }}>
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* second Horizontal div */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Crad div */}
            <div style={styles.card_main}>
              <div style={styles.card_imgdiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                    alt="astro img"
                    width={65}
                    height={65}
                    style={styles.card_img}
                  ></img>
                </div>
                <div style={{ fontSize: '12px', color: 'gary' }}>
                  21685 orders
                </div>
              </div>

              <div style={styles.card_typediv}>
                <div style={{ fontWeight: '900px', fontSize: '16px' }}>
                  Astrologer Name
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Numerlogy, Vastu, Tarot{' '}
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>Hindi</div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Exp : 10 yrs
                </div>
                <span style={{ color: 'gray', fontSize: '14px' }}>
                  ₹ 20 &nbsp;
                  <del> 28/min</del>
                </span>
              </div>

              {/*------ Call div------ */}
              <div style={styles.card_calldiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    width={20}
                    height={20}
                    alt="rating"
                    style={{ float: 'right' }}
                  />
                </div>
                <div>
                  <Button variant="outline-secondary" style={{ width: '80px' }}>
                    Call
                  </Button>
                </div>
              </div>
            </div>
            {/* Crad div */}

            <div style={styles.card_main}>
              <div style={styles.card_imgdiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                    alt="astro img"
                    width={65}
                    height={65}
                    style={styles.card_img}
                  ></img>
                </div>
                <div style={{ fontSize: '12px', color: 'gary' }}>
                  21685 orders
                </div>
              </div>

              <div style={styles.card_typediv}>
                <div style={{ fontWeight: '900px', fontSize: '16px' }}>
                  Astrologer Name
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Numerlogy, Vastu, Tarot{' '}
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>Hindi</div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Exp : 10 yrs
                </div>
                <span style={{ color: 'gray', fontSize: '14px' }}>
                  ₹ 20 &nbsp;
                  <del> 28/min</del>
                </span>
              </div>

              {/*------ Call div------ */}
              <div style={styles.card_calldiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    width={20}
                    height={20}
                    alt="rating"
                    style={{ float: 'right' }}
                  />
                </div>
                <div>
                  <Button variant="outline-secondary" style={{ width: '80px' }}>
                    Call
                  </Button>
                </div>
              </div>
            </div>

            <div style={styles.card_main}>
              <div style={styles.card_imgdiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/180x180/assets/images/photos/webp/deependerdeol.webp"
                    alt="astro img"
                    width={65}
                    height={65}
                    style={styles.card_img}
                  ></img>
                </div>
                <div style={{ fontSize: '12px', color: 'gary' }}>
                  21685 orders
                </div>
              </div>

              <div style={styles.card_typediv}>
                <div style={{ fontWeight: '900px', fontSize: '16px' }}>
                  Astrologer Name
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Numerlogy, Vastu, Tarot{' '}
                </div>
                <div style={{ color: 'gray', fontSize: '14px' }}>Hindi</div>
                <div style={{ color: 'gray', fontSize: '14px' }}>
                  Exp : 10 yrs
                </div>
                <span style={{ color: 'gray', fontSize: '14px' }}>
                  ₹ 20 &nbsp;
                  <del> 28/min</del>
                </span>
              </div>

              {/*------ Call div------ */}
              <div style={styles.card_calldiv}>
                <div>
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    width={20}
                    height={20}
                    alt="rating"
                    style={{ float: 'right' }}
                  />
                </div>
                <div>
                  <Button variant="outline-secondary" style={{ width: '80px' }}>
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------- */}
      </div>
    </div>
  )
}

export default AstrologersList

const styles = {
  card_main: {
    width: '370px',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '20px',
    boxShadow: '0px 0px 5px 1px #616161',
    borderRadius: '10px',
    padding: '20px 10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },

  card_img: {
    borderRadius: '300px',
  },

  card_imgdiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItem: 'center',
    maxHeight: '650px',
  },

  card_typediv: {
    marginLeft: '10px',
  },

  card_calldiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: '5px',
  },
}
