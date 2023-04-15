import React from 'react'

const UserRegister = () => {
    return (
        <div style={{
            boxShadow: '0px 0px 5px 1px #616161',
            paddingTop: 40,
            paddingBottom: 40,
            marginTop: 20,
        }} >
            <div style={{
                maxWidth: 600,
                boxShadow: '0px 0px 15px 0px #ddd',
                borderRadius: 8,
                margin: '20px auto 120px auto',
                padding: '35px 0px',
            }} >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '40px 5px  20px 5px',
                    alignItem: 'center',
                    // border: '1px solid red',
                    borderRadius: 10

                }} >

                    <input style={{
                        borderRadius: 8,
                        margin: "0px 20px 25px 20px ",
                        padding: '10px 25px',
                        boxSizing: 'border-box',
                        // borderColor: "red",
                        borderTopStyle: 'hidden',
                        borderLeftStyle: 'hidden',
                        borderRightStyle: 'hidden'
                    }} type='text'
                        placeholder='Email or Phone no' />

                    <br /><br />

                    <button style={{
                        margin: '10px 20px',
                        borderRadius: 10,
                        padding: '10px 25px',
                        backgroundColor: '#f6f7f8',
                        fontSize: 20

                    }} type='button' >Send</button>

                </div>
            </div>
        </div>
    )
}

export default UserRegister
