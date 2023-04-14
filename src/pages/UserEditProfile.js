import React from 'react'
import { FaUser } from 'react-icons/fa'

const UserEditProfile = () => {
    return (
        <div style={{
            boxShadow: '0px 0px 5px 1px #454545',
            paddingBottom: 140,
            paddingTop: 20,
            marginTop: 20
        }} >

            <div style={{
                maxWidth: 900,
                margin: "30px auto 0px auto",
                padding: '20px 0px 50px 0px',
                justifyContent: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 8,
                boxShadow: '0px 0px 15px 0.5px #dedede'

            }}>

                <div style={{
                    fontSize: 22,
                    fontWeight: 500,
                    textAlign: 'center',
                    border: '0px solid blue',
                    // paddingTop: 20,
                    margin: '5px 0px 30px 0px'
                }} >
                    Edit Your Profile
                </div>


                <div>
                    <FaUser style={{
                        color: '#616161',
                        borderRadius: 100,
                        border: '3px solid #616161',
                        padding: '7px 5px'
                    }} size='90px' />
                </div>

                <div style={{ display: 'flex', marginTop: 15, width: '100%', justifyContent: 'center', flexWrap: 'wrap', }} >
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                        margin: "10px 5px 15px 8px",
                        width: '48%',
                        flexDirection: 'column',
                        border: '0px solid red'
                    }} >
                        <label style={{ margin: " 2px 10px " }} >First Name</label>
                        <input placeholder=' First name' type='text' style={{
                            margin: " 2px 10px ",
                            padding: '8px 12px',
                            borderRadius: 8
                        }} ></input>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                        margin: "10px 5px 15px 8px",
                        width: '48%',
                        flexDirection: 'column',
                        border: '0px solid red'

                    }} >
                        <label style={{ margin: " 2px 10px " }} >Last Name</label>
                        <input placeholder='last Name' type='text' style={{
                            margin: " 2px 10px ",
                            padding: '8px 12px',
                            borderRadius: 8
                        }} ></input>
                    </div>
                </div>


                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap', }} >
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                        margin: "10px 5px 15px 8px",
                        width: '48%',
                        flexDirection: 'column',
                        border: '0px solid red'
                    }} >
                        <label style={{ margin: " 0px 10px " }} >Date of Birth</label>
                        <input placeholder='Enter date of birth' type='text' style={{
                            margin: " 0px 10px ",
                            padding: '8px 12px',
                            borderRadius: 8
                        }} ></input>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                        margin: "10px 5px 15px 8px",
                        width: '48%',
                        flexDirection: 'column',
                        border: '0px solid red'

                    }} >
                        <label style={{ margin: " 0px 10px " }} >Time of  Birth</label>
                        <input placeholder='Enter time of  birth' type='text' style={{
                            margin: " 0px 10px ",
                            padding: '8px 12px',
                            borderRadius: 8
                        }} ></input>
                    </div>
                </div>


                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap', }} >
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                        margin: "10px 5px 15px 8px",
                        width: '48%',
                        flexDirection: 'column',
                        border: '0px solid red'
                    }} >
                        <label style={{ margin: " 0px 10px " }} >Place of  Birth</label>
                        <input placeholder='Enter your birth place' type='text' style={{
                            margin: " 0px 10px ",
                            padding: '8px 12px',
                            borderRadius: 8
                        }} ></input>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                        margin: "10px 5px 15px 8px",
                        width: '48%',
                        flexDirection: 'column',
                        border: '0px solid red'

                    }} >
                        <label style={{ margin: " 0px 10px " }} >Current Address</label>
                        <input placeholder='Enter Flat, House no, Building, Apartment' type='text' style={{
                            margin: " 0px 10px ",
                            padding: '8px 12px',
                            borderRadius: 8
                        }} ></input>
                    </div>
                </div>


                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap', }} >
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                        margin: "10px 5px 15px 8px",
                        width: '48%',
                        flexDirection: 'column',
                        border: '0px solid red'
                    }} >
                        <label style={{ margin: " 0px 10px " }} >City, State, Country </label>
                        <input placeholder='Enter your birth place ' type='text' style={{
                            margin: " 0px 10px ",
                            padding: '8px 12px',
                            borderRadius: 8
                        }} ></input>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                        margin: "10px 5px 15px 8px",
                        width: '48%',
                        flexDirection: 'column',
                        border: '0px solid red'

                    }} >
                        <label style={{ margin: " 0px 10px " }} >Pincode</label>
                        <input placeholder='Enter Pincode' type='text' style={{
                            margin: " 0px 10px ",
                            padding: '8px 12px',
                            borderRadius: 8
                        }} ></input>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default UserEditProfile