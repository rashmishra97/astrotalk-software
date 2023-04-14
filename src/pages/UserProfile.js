import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div style={{
      boxShadow: '0px 0px 5px 1px #454545',
      background: '#eee',
      marginTop: 20
    }}>
      <div style={{
        fontSize: 28,
        fontWeight: 700,
        textAlign: 'center',
        paddingTop: 20,

      }} >
        Profile Settings
      </div>
      <div style={{
        maxWidth: 1150,
        margin: "30px auto 0px auto",
        padding: '0px 0px 50px 0px',
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',

      }} >
        <div style={{
          width: '48%',
          borderRadius: 8,
          background: '#fff',
          boxShadow: '0px 0px 5px #656565',
          margin: "15px 5px 8px 8px",
          flexGrow: 1
        }} >
          <div style={{ margin: '10px 10px' }} >Notifications</div>
          <div style={{ marginLeft: 8, color: "#616161", fontSize: 14 }} >Astromall chat</div>
          <div style={{ margin: '10px 0px 50px 10px', color: "#616161", fontSize: 14 }} >Live Events</div>
        </div>

        <div style={{
          width: '48%',
          borderRadius: 8,
          background: '#fff',
          boxShadow: '0px 0px 5px #656565',
          margin: "15px 5px 8px 8px",
          flexGrow: 1
        }}>
          <div style={{ margin: '10px 10px', fontSize: 15 }}>My Languages</div>
          <div style={{ marginLeft: '10px' }} ><Button variant='danger' style={{ padding: '7px 30px' }}>Hindi</Button></div>
          <div style={{
            margin: '16px 0px 25px 10px',
            cursor: 'pointer',
            fontSize: 15,
            color: '#389838',
            textAlign: 'center',
          }}>
            Edit your languages</div>
        </div>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }} >

          <div
            style={{
              width: '48%',
              borderRadius: 8,
              background: '#fff',
              boxShadow: '0px 0px 5px #656565',
              margin: "15px 5px 8px 8px",
              padding: '15px 0px 10px 15px',
              cursor: 'pointer',
              flexGrow: 1,
            }}>
            <Link to='/userEditProfile' style={{ textDecoration: 'none', color: '#616161', }} >
              Edit Profile
            </Link>
          </div>

          <div
            style={{
              width: '48%',
              borderRadius: 8,
              background: '#fff',
              boxShadow: '0px 0px 5px #656565',
              margin: "15px 5px 8px 8px",
              padding: '15px 0px 10px 15px',
              color: '#616161',
              cursor: 'pointer',
              flexGrow: 1
            }} >
            Delete My Account</div>
        </div>
      </div>

    </div >
  )
}

export default UserProfile