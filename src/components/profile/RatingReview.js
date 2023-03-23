import React from 'react'
import { FaUser } from 'react-icons/fa'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Consultants from './Consultants'

const RatingReview = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1100px',
        margin: 'auto',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ width: 538 }}>
        <div
          style={{
            display: 'flex',
            marginBottom: '10px',
            boxShadow: '0px 0px 2px 1px #616161',
            justifyContent: 'space-between',
            borderRadius: '5px',
            flexWrap: 'wrap',
            margin: '0px 14px 0px 5px',
          }}
        >
          <h4
            style={{ paddingLeft: '10px', fontSize: '23px', paddingTop: '5px' }}
          >
            Rating & Reviews
          </h4>
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '25px 0px',
                color: '#616161',
                width: '40%',
              }}
            >
              <h2
                style={{
                  color: '#616161',
                  fontSize: '50px',
                }}
              >
                4.98
              </h2>
              ★★★★★
              <div
                style={{
                  display: 'flex',
                }}
              >
                <FaUser size={10} style={{ marginTop: '3.5px' }} />
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  21743 total
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div
              style={{
                // border: '1px solid red',
                width: '60%',
                paddingTop: 10,
                margin: 'auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '25px' }}>5</div>
                <ProgressBar
                  variant="success"
                  now={90}
                  style={{
                    width: '200px',
                    height: 20,
                    marginLeft: 15,
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '25px' }}>4</div>
                <ProgressBar
                  variant="success"
                  now={40}
                  style={{
                    width: '200px',
                    height: 20,
                    marginLeft: 15,
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '25px' }}>3</div>
                <ProgressBar
                  variant="success"
                  now={10}
                  style={{
                    width: '200px',
                    height: 20,
                    marginLeft: 15,
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '25px' }}>2</div>
                <ProgressBar
                  variant="success"
                  now={5}
                  style={{
                    width: '200px',
                    height: 20,
                    marginLeft: 15,
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '25px' }}>1</div>
                <ProgressBar
                  variant="success"
                  now={0}
                  style={{
                    width: '200px',
                    height: 20,
                    marginLeft: 15,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/*  -----------user review------------ */}

        <div
          style={{
            margin: '20px 12px 10px 5px',
            boxShadow: '0px 0px 2px 1px #616161',
            borderRadius: 10,
            padding: '10px',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '600px',
              textAlign: 'left',
              color: '#454545',
              marginBottom: '14px',
            }}
          >
            User Reviews
          </h2>

          <div
            style={{
              display: 'flex',
              border: '1px solid gray',
              height: '45px',
              borderRadius: '10px',
              justifyContent: 'space-between',
            }}
          >
            <h6
              style={{
                marginTop: '10px',
                marginLeft: '15px',
              }}
            >
              Sort By
            </h6>
            <div
              style={{
                display: 'flex',
                margin: '10px 5px',
                marginRight: 10,
              }}
            >
              <div style={{ display: 'flex' }}>
                <input type="radio" name="radio" style={{ marginTop: '5px' }} />
                <label
                  style={{
                    fontSize: '17px',
                    marginBottom: '35px',
                    marginLeft: '5px',
                  }}
                >
                  Most helpful
                </label>
              </div>
              <div style={{ display: 'flex', marginLeft: '10px' }}>
                <input type="radio" name="radio" style={{ marginTop: '5px' }} />
                <label
                  style={{
                    fontSize: '17px',
                    marginBottom: '35px',
                    marginLeft: '5px',
                  }}
                >
                  Most recent
                </label>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              border: '1px solid gray',
              height: '90px',
              borderRadius: '10px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: 'darkred',
                borderRadius: '40px',
                padding: 10,
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                font: '28px',
                margin: 10,
              }}
            >
              A
            </div>
            <div
              style={{
                marginTop: 5,
                fontSize: '14px',
              }}
            >
              <div>★★★★★</div>
              <div>14 Nov 2022</div>
              <div style={{}}>Thanks Mam</div>
            </div>
          </div>
          {/* second review */}
          <div
            style={{
              display: 'flex',
              border: '1px solid gray',
              height: '90px',
              borderRadius: '10px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: 'darkred',
                borderRadius: '40px',
                padding: 10,
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                font: '28px',
                margin: 10,
              }}
            >
              A
            </div>
            <div
              style={{
                marginTop: 5,
                fontSize: '14px',
              }}
            >
              <div>★★★★★</div>
              <div>14 Nov 2022</div>
              <div style={{}}>Thanks Mam</div>
            </div>
          </div>
          {/* third review */}

          <div
            style={{
              display: 'flex',
              border: '1px solid gray',
              height: '90px',
              borderRadius: '10px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: 'darkred',
                borderRadius: '40px',
                padding: 10,
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                font: '28px',
                margin: 10,
              }}
            >
              A
            </div>
            <div
              style={{
                marginTop: 5,
                fontSize: '14px',
              }}
            >
              <div>★★★★★</div>
              <div>14 Nov 2022</div>
              <div style={{}}>Thanks Mam</div>
            </div>
          </div>
          {/* fourth review */}
          <div
            style={{
              display: 'flex',
              border: '1px solid gray',
              height: '90px',
              borderRadius: '10px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: 'darkred',
                borderRadius: '40px',
                padding: 10,
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                font: '28px',
                margin: 10,
              }}
            >
              A
            </div>
            <div
              style={{
                marginTop: 5,
                fontSize: '14px',
              }}
            >
              <div>★★★★★</div>
              <div>14 Nov 2022</div>
              <div style={{}}>Thanks Mam</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: 538, margin: '0px 5px 0px 8px' }}>
        <Consultants />
      </div>
    </div>
  )
}

export default RatingReview

const styles = {}
