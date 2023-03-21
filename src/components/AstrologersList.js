import React from 'react'
import { Breadcrumb, Button } from 'react-bootstrap'

const AstrologersList = () => {
  return (
    <div style={{ borderTop: '2px solid gray' }}>
      <div
        style={{
          // margin: '20px 20px',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1350px',
          // border: '1px solid red',
          margin: 'auto',
        }}
      >
        <div
          style={{
            // border: '1px solid blue',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10px 100px',
          }}
        >
          <span>
            <Breadcrumb>
              <Breadcrumb.Item href="http://localhost:3000">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Astrologers</Breadcrumb.Item>
            </Breadcrumb>
          </span>
          <span>Available balance: ₹ 0</span>
          <span style={{ flexWrap: 'wrap', marginLeft: '5p' }}>
            <span>
              <Button variant="outline-secondary" style={{ width: '100px' }}>
                Recharge
              </Button>
            </span>
            <span>
              <Button variant="outline-secondary" style={{ width: '70px' }}>
                Filter
              </Button>
            </span>
            <span>
              <Button variant="outline-secondary" style={{ width: '80px' }}>
                Sort by
              </Button>
            </span>
            <span>
              <Button variant="outline-secondary" style={{ width: '150px' }}>
                Search name...
              </Button>
            </span>
          </span>
        </div>

        {/* Horizontal div */}
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
        {/* seconf Horizontal div */}
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
        {/* ------------- */}
      </div>
    </div>
  )
}

export default AstrologersList

const styles = {
  card_main: {
    width: '370px',
    maxheight: 200,
    // border: '1px solid red',
    marginLeft: '15px',
    marginBottom: '20px',
    // boxShadow: '2 6px 10px rgba(56, 125, 255, 0.17)',
    boxShadow: '0px 0px 5px 1px #616161',
    borderRadius: '10px',
    padding: '15px 15px',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },

  card_img: {
    borderRadius: '300px',
  },

  card_imgdiv: {
    // border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItem: 'center',
    maxHeight: '650px',
  },

  card_typediv: {
    // border: '1px solid red',
    marginLeft: '10px',
  },

  card_calldiv: {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: '5px',
  },
}
