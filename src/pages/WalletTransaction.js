import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { useNavigate } from 'react-router-dom'
import PaymentLogs from '../components/PaymentLogs'
import { MdDeleteForever } from 'react-icons/md'
import MobilePaymentLogs from '../components/MobilePaymentLogs'

function WalletTransaction() {
  const [windowSize, setWindowSize] = React.useState(window.innerWidth)

  const updateWindowSize = () => {
    setWindowSize(window.innerWidth)
    console.log('windiw size h', windowSize)
  }
  useEffect(() => {
    window.addEventListener('resize', updateWindowSize)
  }, [])

  const nav = useNavigate()

  return (
    <div
      style={{
        boxShadow: '0px 0px 3px 1px #616161',
        marginTop: 20,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: 'auto',
          padding: '20px 0px',
        }}
      >
        <Tabs
          defaultActiveKey="wallet"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="wallet" title="Wallet Transaction">
            <div
              style={{
                maxWidth: 1100,
                margin: '0px 4px',
              }}
            >
              <h2 style={{ textAlign: 'center' }}>Transaction</h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '15px 2px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    color: '#008000',
                    fontSize: 17,
                  }}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      justifyContent: 'center',
                      paddingTop: 5,
                    }}
                  >
                    {' '}
                    Available balance : ₹ 0
                  </div>
                  <Button
                    variant="outline-success"
                    style={{
                      marginLeft: '20px',
                      padding: '5px 20px',
                    }}
                    onClick={() => nav('/addtowallet')}
                  >
                    Recharge
                  </Button>
                </div>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <Button
                    variant="outline-danger"
                    style={{
                      padding: '5px 20px',
                      fontWeight: 500,
                    }}
                  >
                    Delete All
                  </Button>
                </div>
              </div>

              {/* Table Div */}

              <div style={{ marginBottom: 20 }}>
                <table
                  style={{
                    width: '97.5%',
                    marginLeft: 10,
                    flexWrap: 'wrap',
                    display: 'table',
                  }}
                >
                  <tr
                    style={{
                      borderBottom: '1px solid #ccc',
                      fontSize: 13,
                    }}
                  >
                    <th style={{ padding: '7px 5px', fontSize: 15 }}>
                      Description
                    </th>
                    <th style={{ fontSize: 15 }}>Invoice</th>
                    <th style={{ fontSize: 15 }}>Transaction Amount</th>
                    <th style={{ fontSize: 15 }}>Datetime</th>
                    <th style={{ fontSize: 15 }}>Actions</th>
                  </tr>
                  <tr style={{ borderBottom: '.5px solid #ccc', fontSize: 13 }}>
                    <td style={{ padding: '10px 5px' }}>
                      Call with SapnaD for 5 minutes{' '}
                    </td>
                    <td></td>
                    <td>0</td>
                    <td>Jun 27, 2022, 3:46 PM</td>
                    <td style={{ color: 'red' }}>
                      <MdDeleteForever size={20} />{' '}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '.5px solid #ccc', fontSize: 13 }}>
                    <td style={{ padding: '10px 5px' }}>
                      Call with SapnaD for 0 minutes{' '}
                    </td>
                    <td></td>
                    <td>0</td>
                    <td>Jun 27, 2022, 3:41 PM</td>
                    <td style={{ color: 'red' }}>
                      <MdDeleteForever size={20} />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </Tab>

          {/* Tab for Payment Logs */}

          {windowSize > 700 ? (
            <Tab
              eventKey="paymentlogs"
              title="Payment Logs"
              // onClick={() => {
              //   nav('/paymentlogs')
              // }}
            >
              <PaymentLogs />
            </Tab>
          ) : (
            <Tab eventKey="paymentlogs" title="Payment Logs">
              <MobilePaymentLogs />
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  )
}

export default WalletTransaction
