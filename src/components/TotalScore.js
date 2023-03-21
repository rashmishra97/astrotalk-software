import React from 'react'

const TotalScore = () => {
  return (
    <section style={styles.container}>
      <ul style={styles.ul_container}>
        <li>22789+</li>
        <li style={styles.li_container}>Total Astrologers</li>
      </ul>

      <ul style={styles.ul_container}>
        <li>542 Million Minutes</li>
        <li style={styles.li_container}>Total Chat/Call Minutes</li>
      </ul>

      <ul style={styles.ul_container}>
        <li>23.8 Million</li>
        <li style={styles.li_container}>Total Customers</li>
      </ul>
    </section>
  )
}

export default TotalScore

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: '16px 0px',
    background: 'linear-gradient(#f0df20,#000000de)',
    flexWrap: 'wrap',
    color: 'white',
    // margin: 'auto',
  },

  ul_container: {
    listStyleType: 'none',
    fontWeight: 700,
    fontSize: 30,
    padding: '10px 10px',
    marginLeft: 60,
  },

  li_container: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'normal',
  },
}
