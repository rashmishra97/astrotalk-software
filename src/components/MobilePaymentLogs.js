import React from 'react'
import { Button } from 'react-bootstrap'
import { MdDeleteForever } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Overlay from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const MobilePaymentLogs = () => {
  const nav = useNavigate()

  return (
    <div>
      <div>
        <h2 style={{ textAlign: 'center' }}>Transaction</h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '12px  0px ',
          }}
        >
          <Button
            variant="outline-success"
            style={{
              padding: '5px 20px',
              marginLeft: 10,
            }}
            onClick={() => nav('/addtowallet')}
          >
            Recharge
          </Button>
          <Button
            variant="outline-danger"
            style={{
              padding: '5px 20px',
              fontWeight: 500,
              marginRight: 10,
            }}
          >
            Delete All
          </Button>
        </div>
        <div>
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
                fontSize: 16,
              }}
            >
              <th
                style={{
                  maxWidth: '13%',
                  padding: '5px 12px',
                }}
              ></th>
              <th
                style={{
                  padding: '7px 5px',
                  maxWidth: '13%',
                }}
              >
                Description
              </th>
              <th
                style={{
                  maxWidth: '13%',
                }}
              >
                Invoice
              </th>

              <th
                style={{
                  maxWidth: '13%',
                }}
              >
                Datetime
              </th>
              <th
                style={{
                  maxWidth: '13%',
                }}
              >
                Actions
              </th>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              {/* <td style={{ color: '#919191' }}>
                #20230325010430000846348229175279877
              </td> */}

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>

            <tr
              style={{
                borderBottom: '.5px solid #ccc',
                fontSize: 13,
              }}
            >
              <td
                style={{
                  padding: '15px 0px',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 500,
                }}
              >
                Recharge
              </td>
              <td style={{ color: '#919191' }}>
                {' '}
                Mar 25, 2023, <br />
                11:25 AM
              </td>
              <td
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: '#AFAFAF',
                    textAlign: 'center',
                  }}
                >
                  +1000
                </span>
                <div style={{ color: '#727272' }}> (GST 180.00)</div>
              </td>

              <td style={{ color: '#FF0000' }}>FAILED</td>
              <td style={{ color: 'red' }}>
                <MdDeleteForever size={20} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MobilePaymentLogs
