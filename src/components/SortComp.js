import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const SortComp = (props) => {
  console.log('props===', props)

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">SORT BY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={styles.container}>
            <div style={styles.div_container}>
              <input type="radio" name="radio" style={styles.inpt} />
              <label style={styles.labl}>Popularity</label>
            </div>

            <div style={styles.div_container}>
              <input type="radio" name="radio" style={styles.inpt} />
              <label style={styles.labl}>Experience : High to Low</label>
            </div>

            <div style={styles.div_container}>
              <input type="radio" name="radio" style={styles.inpt} />
              <label style={styles.labl}>Experience : Low to High</label>
            </div>

            <div style={styles.div_container}>
              <input type="radio" name="radio" style={styles.inpt} />
              <label style={styles.labl}>Total orders : High to Low</label>
            </div>

            <div style={styles.div_container}>
              <input type="radio" name="radio" style={styles.inpt} />
              <label style={styles.labl}>Total orders : Low to High</label>
            </div>

            <div style={styles.div_container}>
              <input type="radio" name="radio" style={styles.inpt} />
              <label style={styles.labl}>Price : High to Low</label>
            </div>

            <div style={styles.div_container}>
              <input type="radio" name="radio" style={styles.inpt} />
              <label style={styles.labl}>Price : Low to High</label>
            </div>

            <div style={styles.div_container}>
              <input type="radio" name="radio" style={styles.inpt} />
              <label style={styles.labl}>Rating : High to Low</label>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default SortComp

const styles = {
  container: {
    margin: '5px 5px',
    color: 'black',
  },
  div_container: {
    margin: '5px 2px',
    // border: '1px solid blue',
  },
  inpt: {
    paddingLeft: 10,
    border: '1px solid red',
  },
  labl: {
    paddingLeft: '10px',
  },
}
