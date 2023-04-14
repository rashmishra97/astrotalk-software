import React from 'react'
import { Button } from 'react-bootstrap'
import { MdDeleteForever } from 'react-icons/md'

const OrderHistory = () => {
  return (
    <div
      style={{
        boxShadow: '0px 0px 5px 1px #616161',
      }}
    >
      <div style={{ maxWidth: 1165, margin: '20px auto 0px auto', paddingBottom: 50, paddingTop: 10 }}>
        <div style={{ borderRadius: 50, margin: "20px 0px 40px 0px", display: 'flex' }} >
          <Button variant="outline-secondary" style={{ margin: '0px 5px', padding: '7px 30px' }}>Call</Button>
          <Button variant="outline-secondary" style={{ margin: '0px 5px', padding: '7px 30px' }}>Chat</Button>
          <Button variant="outline-secondary" style={{ margin: '0px 5px', padding: '7px 30px' }}>Report</Button>
        </div>

        <div className='order-history-container' style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }} >
          <div style={{ width: '370px', margin: 8, borderRadius: 10, padding: 15, border: '0px solid blue', boxShadow: '0px 0px 5px 2px #ddd' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <div style={{ fontSize: 13, color: '#919191' }} >Order Id: #1656324648766</div>
              <div style={{ fontSize: 11, color: "#FF0000" }} >HELP</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13, color: '#919191' }} >
              <div style={{ listStyleType: 'none', }}>
                <li style={{ color: '#313131' }} ><strong>SapnaD</strong></li>
                <li>27 Jun 22, 03:40 PM</li>
                <li style={{ color: '#28BA51' }} >Completed</li>
                <li>Call rate: ₹ 0/min</li>
                <li>Duration: 0 minutes</li>
                <li>Deduction: ₹ 0</li>
              </div>

              <img src='astro.jpg' alt='' width={62} height={50} style={{ border: '1px solid yellow', borderRadius: 50 }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={{ border: '1px solid gray', borderRadius: 5, padding: "5px 10px", fontSize: 13 }} >
                <img src='https://astrotalk.com/assets/images/ic_whatsapp_new.png' alt='' width={18} style={{ marginRight: 12 }} />
                Share with your friends
              </div>
              <div style={{ color: 'red' }} ><MdDeleteForever size={20} /></div>
            </div>
          </div>

          <div style={{ width: '370px', margin: 8, borderRadius: 10, padding: 15, border: '0px solid blue', boxShadow: '0px 0px 5px 2px #ddd' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <div style={{ fontSize: 13, color: '#919191' }} >Order Id: #1656324648766</div>
              <div style={{ fontSize: 11, color: "#FF0000" }} >HELP</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13, color: '#919191' }} >
              <div style={{ listStyleType: 'none', }}>
                <li style={{ color: '#313131' }} ><strong>SapnaD</strong></li>
                <li>27 Jun 22, 03:40 PM</li>
                <li style={{ color: '#28BA51' }} >Completed</li>
                <li>Call rate: ₹ 0/min</li>
                <li>Duration: 0 minutes</li>
                <li>Deduction: ₹ 0</li>
              </div>

              <img src='astro.jpg' alt='' width={62} height={50} style={{ border: '1px solid yellow', borderRadius: 50 }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={{ border: '1px solid gray', borderRadius: 5, padding: "5px 10px", fontSize: 13 }} >
                <img src='https://astrotalk.com/assets/images/ic_whatsapp_new.png' alt='' width={18} style={{ marginRight: 12 }} />
                Share with your friends
              </div>
              <div style={{ color: 'red' }} ><MdDeleteForever size={20} /></div>
            </div>
          </div>

          <div style={{ width: '370px', margin: 8, borderRadius: 10, padding: 15, border: '0px solid blue', boxShadow: '0px 0px 5px 2px #ddd' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <div style={{ fontSize: 13, color: '#919191' }} >Order Id: #1656324648766</div>
              <div style={{ fontSize: 11, color: "#FF0000" }} >HELP</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13, color: '#919191' }} >
              <div style={{ listStyleType: 'none', }}>
                <li style={{ color: '#313131' }} ><strong>SapnaD</strong></li>
                <li>27 Jun 22, 03:40 PM</li>
                <li style={{ color: '#28BA51' }} >Completed</li>
                <li>Call rate: ₹ 0/min</li>
                <li>Duration: 0 minutes</li>
                <li>Deduction: ₹ 0</li>
              </div>

              <img src='astro.jpg' alt='' width={62} height={50} style={{ border: '1px solid yellow', borderRadius: 50 }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={{ border: '1px solid gray', borderRadius: 5, padding: "5px 10px", fontSize: 13 }} >
                <img src='https://astrotalk.com/assets/images/ic_whatsapp_new.png' alt='' width={18} style={{ marginRight: 12 }} />
                Share with your friends
              </div>
              <div style={{ color: 'red' }} ><MdDeleteForever size={20} /></div>
            </div>
          </div>

          <div style={{ width: '370px', margin: 8, borderRadius: 10, padding: 15, border: '0px solid blue', boxShadow: '0px 0px 5px 2px #ddd' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <div style={{ fontSize: 13, color: '#919191' }} >Order Id: #1656324648766</div>
              <div style={{ fontSize: 11, color: "#FF0000" }} >HELP</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13, color: '#919191' }} >
              <div style={{ listStyleType: 'none', }}>
                <li style={{ color: '#313131' }} ><strong>SapnaD</strong></li>
                <li>27 Jun 22, 03:40 PM</li>
                <li style={{ color: '#28BA51' }} >Completed</li>
                <li>Call rate: ₹ 0/min</li>
                <li>Duration: 0 minutes</li>
                <li>Deduction: ₹ 0</li>
              </div>

              <img src='astro.jpg' alt='' width={62} height={50} style={{ border: '1px solid yellow', borderRadius: 50 }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={{ border: '1px solid gray', borderRadius: 5, padding: "5px 10px", fontSize: 13 }} >
                <img src='https://astrotalk.com/assets/images/ic_whatsapp_new.png' alt='' width={18} style={{ marginRight: 12 }} />
                Share with your friends
              </div>
              <div style={{ color: 'red' }} ><MdDeleteForever size={20} /></div>
            </div>
          </div>

          <div style={{ width: '370px', margin: 8, borderRadius: 10, padding: 15, border: '0px solid blue', boxShadow: '0px 0px 5px 2px #ddd' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <div style={{ fontSize: 13, color: '#919191' }} >Order Id: #1656324648766</div>
              <div style={{ fontSize: 11, color: "#FF0000" }} >HELP</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13, color: '#919191' }} >
              <div style={{ listStyleType: 'none', }}>
                <li style={{ color: '#313131' }} ><strong>SapnaD</strong></li>
                <li>27 Jun 22, 03:40 PM</li>
                <li style={{ color: '#28BA51' }} >Completed</li>
                <li>Call rate: ₹ 0/min</li>
                <li>Duration: 0 minutes</li>
                <li>Deduction: ₹ 0</li>
              </div>

              <img src='astro.jpg' alt='' width={62} height={50} style={{ border: '1px solid yellow', borderRadius: 50 }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={{ border: '1px solid gray', borderRadius: 5, padding: "5px 10px", fontSize: 13 }} >
                <img src='https://astrotalk.com/assets/images/ic_whatsapp_new.png' alt='' width={18} style={{ marginRight: 12 }} />
                Share with your friends
              </div>
              <div style={{ color: 'red' }} ><MdDeleteForever size={20} /></div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default OrderHistory