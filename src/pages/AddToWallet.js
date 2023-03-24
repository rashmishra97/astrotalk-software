import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const AddToWallet = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div style={{ background: '#eee', width: '1104px', margin: 'auto' }}>
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
          width: '1104px',
          // border: '1px solid red',
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
          }}
        >
          Popular Recharge
        </div>

        {/* card div */}
        <div
          onClick={() => {
            navigate('/paymentdetails')
          }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            border: '2px solid violet',
            maxWidth: '100%',
            marginBottom: '25px',
          }}
        >
          <div className="col-md-4" style={{ border: '1px solid red' }}>
            1
          </div>
          <div
            className="col-md-4"
            // style={{
            //   maxWidth: 184,
            //   border: '1px solid red',
            //   padding: "20px 20px"
            // }}
          >
            2
          </div>
          <div
            className="col-md-4"
            // style={{
            //   maxWidth: 184,
            //   border: '1px solid red',
            //   padding: "20px 20px"
            // }}
          >
            3
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
            }}
          >
            4
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
              padding: '20px 30px',
              margin: '0px 10px',
            }}
          >
            5
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
              padding: '20px 30px',
              margin: '0px 10px',
            }}
          >
            6
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
              padding: '20px 30px',
              margin: '0px 10px',
            }}
          >
            7
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
              padding: '20px 30px',
              margin: '0px 10px',
            }}
          >
            8
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
              padding: '20px 30px',
              margin: '0px 10px',
            }}
          >
            9
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
              padding: '20px 30px',
              margin: '0px 10px',
            }}
          >
            10
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
              padding: '20px 30px',
              margin: '0px 10px',
            }}
          >
            11
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
              padding: '20px 30px',
              margin: '0px 10px',
            }}
          >
            12
          </div>
          <div
            style={{
              maxWidth: 184,
              border: '1px solid red',
              padding: '20px 30px',
              margin: '0px 10px',
            }}
          >
            13
          </div>
        </div>
        {/* Crad end */}
      </div>
    </div>
  )
}

export default AddToWallet
