import React from 'react'

const Notification = () => {
    return (
        <div style={{
            boxShadow: '0px 0px 5px 1px #616161',
        }}>
            <div style={{
                maxWidth: 670,
                margin: '20px auto 0px auto',
                paddingBottom: 50,
                paddingTop: 10
            }} >
                <h2 style={{ textAlign: 'center', margin: "10px 0 40px 0" }} >Notifications</h2>
                <div style={{
                    border: '0px solid blue',
                    boxShadow: '0px 0px 10px 0px #919191',
                    margin: '0px auto',
                    borderRadius: 8,
                    padding: "40px 0px",
                    width: '98%'
                }} >

                </div><br />

                <div style={{
                    border: '0px solid blue',
                    boxShadow: '0px 0px 10px 0px #919191',
                    margin: '0px auto',
                    borderRadius: 8,
                    padding: "40px 0px",
                    width: '98%'
                }} >

                </div><br />

            </div>
        </div>
    )
}

export default Notification
