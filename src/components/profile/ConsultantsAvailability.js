import React from 'react'

const ConsultantsAvailability = () => {
  return (
    <div
      style={{
        boxShadow: '0px 0px 2px 1px #616161',
        borderRadius: 10,
        paddingBottom: 15,
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <h3
        style={{
          marginLeft: '20px',
          color: '#454545',
          textAlign: 'left',
          width: '100%',
          paddingTop: 8,
        }}
      >
        Check Similar Consultants
      </h3>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            marginTop: 10,
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
          }}
        >
          <div
            style={{
              maxwidth: 190,
              minheight: 190,
              boxShadow: '0px 0px 5px 1px #616161',
              borderRadius: '10px',
              padding: '0px 15px 10px 15px',
            }}
          >
            <div style={styles.card_img}>
              <img
                style={{
                  borderRadius: '150px',
                  width: 75,
                  height: 75,
                  boxShadow: '0px 0px 5px 1px #616161',
                }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}>₹ 20/min</div>
          </div>
          {/* second kya kr rhi */}
          <div
            style={{
              maxwidth: 190,
              minheight: 190,
              boxShadow: '0px 0px 5px 1px #616161',
              borderRadius: '10px',
              marginLeft: 12,
              flexWrap: 'wrap',
              padding: '0px 15px 10px 15px',
            }}
          >
            <div style={styles.card_img}>
              <img
                style={{
                  borderRadius: '150px',
                  width: 75,
                  height: 75,
                  boxShadow: '0px 0px 5px 1px #616161',
                }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}>₹ 20/min</div>
          </div>
          {/* third */}
          <div
            style={{
              maxwidth: 190,
              minheight: 190,
              boxShadow: '0px 0px 5px 1px #616161',
              borderRadius: '10px',
              marginLeft: 12,
              flexWrap: 'wrap',
              padding: '0px 15px 10px 15px',
            }}
          >
            <div style={styles.card_img}>
              <img
                style={{
                  borderRadius: '150px',
                  width: 75,
                  height: 75,
                  boxShadow: '0px 0px 5px 1px #616161',
                }}
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1766.jpg"
                alt="one"
              ></img>
            </div>
            <div style={styles.card_title}>Astrologer Name</div>
            <div style={styles.card_subtitle}>₹ 20/min</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultantsAvailability

const styles = {
  main_container: {
    // maxWidth: '1200px',
    // border: "1px solid red",
    // margin: 'auto',
    // marginBottom: '40px',
  },
  card: {
    maxWidth: 250,
    boxShadow: '0px 0px 5px 1px #616161',
    border: '1px solid blue',
    // marginLeft: '20px',
    marginTop: 10,
    marginBottom: 10,
    height: '200px',
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
