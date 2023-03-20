import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Header from './Landing/Header';
import facebook from '../images/facebook.png'
import gogle from '../images/gogle.png'
import { useTranslation } from "react-i18next";
import firebase from 'firebase';
import { auth, googleAuthProvider } from '../firebase';
import { Apis } from '../data/apis';
import axios from "axios";


const SignUp = () => {
  const { t, i18n } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState(false);
  const navigate = useNavigate();


 
  const googleLogin = () => {
    firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      console.log(token);

      // The signed-in user info.
      var user = result.user;
      console.log(user);
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        // Send token to your backend
        console.log(idToken);

        axios.post(Apis.googleLoginUrl,

          {

          },
          {
            headers: {
              'Authorization': `Bearer ${idToken}`
            }
          })
          .then((res) => {
            console.log(res.data);
            localStorage.setItem('accessToken', res.data.token);
            navigate('/dashboard');
          })
          .catch((error) => {

            setShowAlert(true);
            console.error(error);


            if (error.response) {
              // The client was given an error response (5xx, 4xx)
              console.log(error.response.data);
              setAlertMsg(error.response.data.error);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The client never received a response, and the request was never left
              setAlertMsg(error.request);
            } else {
              // Anything else
              setAlertMsg(error.message);
            }
          })

        // ...
      }).catch(function (error) {
        // Handle error
        console.log(error);
        setShowAlert(true);
        setAlertMsg(error.message);
      });
      // ...
    }).catch(function (error) {
      setShowAlert(true);
      setAlertMsg(error.message);
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  const [email, setemail] = useState();
  const [username, setname] = useState();

  const [password, setpassword] = useState();
  const [showalertregister, setshowalertregister] = useState(false);
  const [showalertmsg, setshowalertmsg] = useState(false);
  const [fieldStatusemail, setfieldStatusemail] = useState(false);
  const [fieldStatuspassword, setfieldStatuspassword] = useState(false);
  const [fieldStatusname, setfieldStatusname] = useState(false);

  const Register = () => {
    if (username == null) {
      setfieldStatusname(true);
    }
    else if (email == null) {
      setfieldStatusemail(true);
      setfieldStatusname(false);
    }

    else if (password == null) {
      setfieldStatuspassword(true);
      setfieldStatusemail(false);
      setfieldStatusname(false);
    }
    else {
      axios({
        method: "POST",
        url: Apis.hostRegister,
        data: {
          "email": email,
          "password": password,
          "name": username
        }
      })
        .then((res) => {
           setShowAlert(false)
          console.log(res.data.token);
          navigate('/dashboard',{
            state:{
              passEmail:email
            }
          });
          setshowalertregister(false)
          
          localStorage.setItem('accessToken', res.data.token)
          setshowalertmsg(res.data.error)
        })
        .catch((error) => {
          console.log(error);
          setshowalertregister(true)
          console.log(error.response.data.error);
          console.log(error.response.data);
          let  e = error.response.data
          console.log(error.response.status);
          console.log(error.response.headers);
          let error_messages = ''
          if (e.errors && e.errors.length > 0) {
            for (let i = 0; i < e.errors.length; i++) {
              console.log(e.errors[i])
              error_messages += `${e.errors[i].msg} ${e.errors[i].value} for ${e.errors[i].param}. `
            }
            setAlertMsg(error_messages)
          }
          console.log(error_messages)
          if(error.response.data.error){
            setAlertMsg(error.response.data.error)
          }
          setShowAlert(true)
        })
      setfieldStatuspassword(false);
      setfieldStatusemail(false);
      setfieldStatusname(false);
    }


  }



  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 class="text-5xl font-extrabold">{t("WelcomeWeexisttomakeentrepreneurismeasier")}</h1>
              </div>
              {
                showAlert ?
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert" style={{ width: '60%' }}>
                      <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Info</span>
                      <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                      {alertMsg}
                      </div>
                      <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                    </div>
                  </div>
                  :
                  null
              }

              {/* {
                showalertregister ?
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert" style={{ width: '60%' }}>
                      <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Info</span>
                      <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                        Registration Failed. {showalertmsg}. Please try again.
                      </div>
                      <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                    </div>
                  </div>
                  :
                  null
              } */}

              {/* Form */}
              <div className="max-w-sm mx-auto">

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">{t("Name")} <span className="text-red-600">*</span></label>
                    <input id="name" onChange={e => setname(e.target.value)} type="text" className="form-input w-full text-gray-800" placeholder={t("Enteryourname")} required />
                    {
                      fieldStatusname ?
                        <span class="text-sm text-red-500">{'*'}{t("Enteryourname")}</span>
                        :
                        null
                    }
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">{t("Email")} <span className="text-red-600">*</span></label>
                    <input id="email" onChange={e => setemail(e.target.value)} type="email" className="form-input w-full text-gray-800" placeholder={t("Enteryouremail")} required />
                    {
                      fieldStatusemail ?
                        <span class="text-sm text-red-500">{'*'}{t("Enteryouremail")}</span>
                        :
                        null
                    }
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">{t("Password")} <span className="text-red-600">*</span></label>
                    <input id="password" onChange={e => setpassword(e.target.value)} type="password" className="form-input w-full text-gray-800" placeholder={t("EnterPassword")} required />
                    {
                      fieldStatuspassword ?
                        <span class="text-sm text-red-500">{'*'}{t("enteryourpassword")}</span>
                        :
                        null
                    }
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button onClick={Register} class="text-white px-3 bg-blue-600 focus:border-sky-500 w-full py-3 rounded-md">{t("Signup")}</button>
                  </div>
                </div>
                <div className="text-sm text-gray-500 text-center mt-3">
                  {t("Bycreatingthe")}<Link to="/terms" className="underline" >{t("term&conditions")}</Link>, {t("andour")} <Link to="/privacy" className="underline" href="#0">{t("privacypolicy")}</Link>.
                </div>

                <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>

            
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <button onClick={googleLogin} class="text-white px-0 bg-red-600 hover:bg-red-700 w-full py-1 rounded-md items-center flex py-3 px-2">
                      <img src={gogle} width="20px" height="13px" class="mr-3 ml-6" />

                      <span className="flex-auto pl-16 pr-8 -ml-16">{t("ContinuewithGoogle")}</span>
                    </button>
                  </div>
                </div>

                <div className="text-gray-600 text-center mt-6">
                  {t("AlreadyusingSimple")} <Link to="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">{t("Signin")}</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;