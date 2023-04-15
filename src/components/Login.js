import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ toggleFunction }) => {

  return <div
    style={{
      maxWidth: '100vw',
      height: '100vh',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'fixed',
      background: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    }}  >
    <div
      style={{
        position: 'absolute',
        background: 'white',
        borderRadius: 10,
        margin: 'auto',
        maxWidth: '50%',
        left: '0',
        right: '0',
        top: 120,
        bottom: 140,
        overflowY: 'scroll',
        alignItems: 'center'
      }}>

      <div
        style={{
          // border: '1px solid red',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          maxWidth: 650,
          alignItem: 'center',
          margin: ' 40px auto 0px auto',
        }} >

        <h2 style={{
          textAlign: 'center',
          fontWeight: 600
        }}>
          Sign in
        </h2><br />


        <input type='password' placeholder='Email or Phone no' style={{
          padding: '9px 20px',
          margin: '18px 5px 15px  5px',
          borderTopStyle: 'hidden',
          borderLeftStyle: 'hidden',
          borderRightStyle: 'hidden',
          boxSizing: 'border-box',
          zIndex: 0
        }} />

        <br />

        <input type='password' placeholder='Password' style={{
          padding: '9px 20px',
          margin: '5px 5px 15px  5px',
          borderTopStyle: 'hidden',
          borderLeftStyle: 'hidden',
          borderRightStyle: 'hidden'
        }} />

        <Link to='' style={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 5,
          marginTop: 10,
          marginBottom: 10,
          textDecoration: 'none'
        }} >Forget Password</Link>

        <button onClick={() => toggleFunction(false)} style={{
          padding: '9px 20px',
          margin: '10px 5px',
          borderRadius: 8,
          fontSize: 20,
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}>
          Login
        </button>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '20px 5px 0px 5px',
          fontSize: 18
        }} >

          <lable>Not a member? &nbsp;
            <Link to='/signup' style={{ textDecoration: 'none' }}
              onClick={() => toggleFunction(false)}  >
              Register Here
            </Link>
          </lable>
        </div>

      </div>

    </div>
  </div>
}

export default Login
