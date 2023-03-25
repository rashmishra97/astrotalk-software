import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const AddToWallet = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div style={{ background: '#eee', maxWidth: '1104px', margin: 'auto' }}>
        <Breadcrumb>
          <Breadcrumb.Item href="http://localhost:3000/#/list" active="true">
            <AiFillHome
              style={{
                paddingRight: '2',
                paddingBottom: 2,
              }}
              color="black"
              size={16}
            />
            <span style={{ color: 'black' }}>Talk To Astrologer</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" active="true">
            <span style={{ color: 'black' }}>Add Money To Wallet</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div
        style={{
          maxWidth: 1104,
          textAlign: 'center',
          margin: 'auto',
        }}
      >
        <h1
          style={{
            color: '#313131',
            fontSize: '28px',
            fontWeight: 600,
            margin: '5px 0px 10px 15px',
          }}
        >
          Add Money to Wallet
        </h1>
        <div style={{ fontSize: 16, color: '#737373' }}>Available balance:</div>
        <div style={{ fontSize: 26, color: 'black' }}>₹ 0</div>
        <div
          style={{
            fontSize: 21,
            color: 'black',
            textAlign: 'left',
            marginLeft: 20,
          }}
        >
          Popular Recharge
        </div>

        {/* card div */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            // maxWidth: '100%',
            margin: '20px 0px',
            // border: '1px solid red',
          }}
        >
          <div
            onClick={() => {
              navigate('/paymentdetails')
            }}
            style={{
              width: '14%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 50
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 100
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 200
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 500
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 1000
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 50
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 2000
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 3000
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 4000
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 8000
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 15000
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 20000
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>

          <div
            style={{
              width: '14%',
              // minWidth: '28%',
              margin: '10px 5px  10px 20px',
              boxShadow: '0px 0px 3px 1px #616161',
              borderRadius: '8px',
              // flexGrow: '1',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                padding: '18px 0px 5px 0px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ₹ 50000
            </div>
            <div
              style={{
                background: '#2197541a',
                color: '#219653',
                fontSize: 14,
                float: '',
                padding: '6px 0px',
              }}
            >
              {' '}
              50 Extra
            </div>
          </div>
        </div>
        {/* Crad end */}
      </div>
    </div>
  )
}

export default AddToWallet
