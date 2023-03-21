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
          <div>
            <input type="radio" name="radio" />
            <label>Popularity</label>
          </div>
          <div>
            <input type="radio" name="radio" />
            <label>Experience : High to Low</label>
          </div>
          <div>
            <input type="radio" name="radio" />
            <label>Experience : Low to High</label>
          </div>
          <div>
            <input type="radio" name="radio" />
            <label>Total orders : High to Low</label>
          </div>
          <div>
            <input type="radio" name="radio" />
            <label>Total orders : Low to High</label>
          </div>
          <div>
            <input type="radio" name="radio" />
            <label>Price : High to Low</label>
          </div>
          <div>
            <input type="radio" name="radio" />
            <label>Price : Low to High</label>
          </div>
          <div>
            <input type="radio" name="radio" />
            <label>Rating : High to Low</label>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default SortComp
