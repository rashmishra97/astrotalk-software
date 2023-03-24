import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { AiFillHome } from 'react-icons/ai'

const PaymentDetails = () => {
  return (
    <div
      style={{
        boxShadow: '0px 0px 3px 1px #616161',
        marginTop: 15,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: 'auto',
          paddingTop: 15,
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item href="http://localhost:3000/#/list" active="true">
            <span style={{ color: 'black' }}>Talk To Astrologer</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" active="true">
            <span style={{ color: 'black' }}>Add Money To Wallet</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* Payment detail main div */}
      <div
        style={{
          maxWidth: 750,
          margin: 'auto',
          padding: '5px 0px 20px 0px',
        }}
      >
        <h1
          style={{
            color: '#313131',
            fontSize: '20px',
            fontWeight: 600,
            margin: '20px 0px',
            width: '100%',
            padding: '10px 0px',
            textAlign: 'center',
            boxShadow: '0px 0px 3px 1px #616161',
            borderRadius: '10px',
          }}
        >
          Payment Details
        </h1>
        <div>
          <table
            style={{
              display: 'table',
              backgroundColor: '#efefef',
              width: '100%',
              height: '100%',
              marginBottom: 20,
              border: '1px solid red',
            }}
          >
            <tbody style={{ border: '1px solid gray', width: '100%' }}>
              <tr
                style={{
                  border: '1px solid #dedede',
                  width: '100%',
                }}
              >
                <td
                  style={{
                    padding: '8px 5px',
                    fontSize: 16,
                  }}
                >
                  Recharge Amount
                </td>
                <td style={{ textAlign: 'right', paddingRight: 10 }}>
                  ₹ 200.00
                </td>
              </tr>

              <tr
                style={{
                  border: '1px solid #dedede',
                  width: '100%',
                }}
              >
                <td
                  style={{
                    padding: '8px 5px',
                    fontSize: 16,
                  }}
                >
                  GST@18%
                </td>
                <td style={{ textAlign: 'right', paddingRight: 10 }}>
                  ₹ 36.00
                </td>
              </tr>

              <tr
                style={{
                  border: '1px solid #efefef',
                  width: '100%',
                }}
              >
                <td
                  style={{
                    padding: '8px 5px',
                    fontSize: 16,
                  }}
                >
                  Total Amount
                </td>
                <td style={{ textAlign: 'right', paddingRight: 10 }}>
                  ₹ 236.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            color: '#313131',
            fontSize: '20px',
            fontWeight: 600,
            margin: '15px 0px',
            width: '100%',
            padding: '10px 20px',
            textAlign: 'center',
            boxShadow: '0px 0px 3px 1px #616161',
            borderRadius: '10px',
            backgroundColor: 'lightyellow',
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ width: '15%' }}>%</div>
          <div style={{ width: '70%', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700 }}>50% EXTRA</div>
            <div style={{ color: '#40aa6f', fontSize: '12px' }}>
              {' '}
              ₹ 100.0 cashback in wallet after recharge{' '}
            </div>
          </div>
          <div style={{ width: '15%' }}>*</div>
        </div>

        <div>
          <div
            style={{
              color: '#9f0304',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              textAlign: 'center',
              textDecoration: 'underline',
            }}
          >
            Apply another coupon
          </div>
          <div
            style={{
              maxWidth: '100%',
              margin: '10px 5px',
              boxShadow: '0px 0px 2px 1px #efefef',
              borderRadius: '10px',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                marginBottom: 20,
                width: '48%',
                // minWidth: '200px',
                flexGrow: 1,
                margin: '15px 5px 8px 8px',
                height: '100px',
                boxShadow: '0px 0px 2px 1px #454545',
                borderRadius: 10,
                flexWrap: 'wrap',
                display: 'flex',
                flexDirection: 'column',
                background: '#efefef',
              }}
            >
              <img
                src="https://aws.astrotalk.com/images/08be8a15-da75-468d-a2b2-1a40e553d637.png"
                alt="UPI"
                height={25}
                width="auto"
                style={{
                  margin: '30px auto 0px auto',
                }}
              />
              <div
                style={{
                  margin: '0px auto',
                }}
              >
                UPI
              </div>
            </div>

            <div
              style={{
                marginBottom: 20,
                width: '48%',
                minWidth: '200px',
                margin: '15px 5px 8px 8px',
                flexGrow: 1,
                height: '100px',
                boxShadow: '0px 0px 0.5px 0.5px #454545',
                borderRadius: 10,
                flexWrap: 'wrap',
                display: 'flex',
                flexDirection: 'column',
                background: '#efefef',
              }}
            >
              <img
                src="https://aws.astrotalk.com/images/08be8a15-da75-468d-a2b2-1a40e553d637.png"
                alt="UPI"
                height={25}
                width="auto"
                style={{
                  margin: '30px auto 0px auto',
                }}
              />
              <div
                style={{
                  margin: '0px auto',
                }}
              >
                UPI
              </div>
            </div>

            <div
              style={{
                marginBottom: 20,
                width: '48%',
                minWidth: '200px',
                margin: '15px 5px 8px 8px',
                flexGrow: 1,
                height: '100px',
                boxShadow: '0px 0px 0.5px 0.5px #454545',
                borderRadius: 10,
                flexWrap: 'wrap',
                display: 'flex',
                flexDirection: 'column',
                background: '#efefef',
              }}
            >
              <img
                src="https://aws.astrotalk.com/images/862d3be7-4a92-41ef-994c-67370fa5b3b2.png"
                alt="UPI"
                height={25}
                width="auto"
                style={{
                  margin: '30px auto 0px auto',
                }}
              />
              <div
                style={{
                  margin: '0px auto',
                }}
              >
                Credit/Debit Card
              </div>
            </div>

            <div
              style={{
                marginBottom: 20,
                width: '48%',
                // minWidth: '200px',
                flexGrow: 1,
                margin: '15px 5px 8px 8px',
                height: '100px',
                boxShadow: '0px 0px 2px 1px #454545',
                borderRadius: 10,
                flexWrap: 'wrap',
                display: 'flex',
                flexDirection: 'column',
                background: '#efefef',
              }}
            >
              <img
                src="https://aws.astrotalk.com/images/7330b6dd-dc0b-4a46-8589-593169c98bfe.png"
                alt="UPI"
                height={25}
                width="auto"
                style={{
                  margin: '30px auto 0px auto',
                }}
              />
              <div
                style={{
                  margin: '0px auto',
                }}
              >
                Net Banking
              </div>
            </div>

            <div
              style={{
                marginBottom: 20,
                width: '48%',
                // minWidth: '200px',
                flexGrow: 1,
                margin: '15px 5px 8px 8px',
                height: '100px',
                boxShadow: '0px 0px 2px 1px #454545',
                borderRadius: 10,
                flexWrap: 'wrap',
                display: 'flex',
                flexDirection: 'column',
                background: '#efefef',
              }}
            >
              <img
                src="https://aws.astrotalk.com/images/8fb0a403-51ce-4b15-a21c-97d73a888b79.png"
                alt="UPI"
                height={25}
                width="auto"
                style={{
                  margin: '30px auto 0px auto',
                }}
              />
              <div
                style={{
                  margin: '0px auto',
                }}
              >
                Other Wallets
              </div>
            </div>

            <div
              style={{
                marginBottom: 20,

                width: '48%',
                // minWidth: '200px',
                flexGrow: 1,
                margin: '15px 5px 8px 8px',
                height: '100px',
                boxShadow: '0px 0px 2px 1px #454545',
                borderRadius: 10,
                flexWrap: 'wrap',
                display: 'flex',
                flexDirection: 'column',
                background: '#efefef',
              }}
            >
              <img
                src="https://aws.astrotalk.com/images/b5badc91-a8bc-45e7-9a94-b1fc10ec3610.png"
                alt="UPI"
                height={25}
                width="auto"
                style={{
                  margin: '30px auto 0px auto',
                }}
              />
              <div
                style={{
                  margin: '0px auto',
                }}
              >
                Paytm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails
