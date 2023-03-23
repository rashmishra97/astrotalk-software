import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import { Modal } from 'react-bootstrap'

const AstroFilter = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Skill</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Language</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Gender</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Country</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="five">Offer</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" style={styles.inpt} />
                      <label style={styles.labl}>Face reading</label>
                    </div>

                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" style={styles.inpt} />
                      <label style={styles.labl}>Kp</label>
                    </div>

                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Life Coach</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Nadi</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Numerology</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Palmistry</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Prashana</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Psychic</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Tarot</label>
                    </div>
                    <div style={styles.sub_container} s>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Vastu</label>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Bengali</label>
                    </div>

                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>English</label>
                    </div>

                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Gujarati</label>
                    </div>

                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Hindi</label>
                    </div>

                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Kannada</label>
                    </div>

                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Marathi</label>
                    </div>

                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Punjabi</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Tamil</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Telugu</label>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Female</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Male</label>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>India</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Outside India</label>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="five">
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Active</label>
                    </div>
                    <div style={styles.sub_container}>
                      <input type="radio" name="radio" />
                      <label style={styles.labl}>Not Active </label>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </div>
  )
}
// ★

export default AstroFilter

const styles = {
  sub_container: {
    margin: '5px 0px',
  },

  inpt: {},
  labl: {
    marginLeft: '8px',
  },
}
