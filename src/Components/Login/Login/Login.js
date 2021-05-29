import React from 'react'
import './login.css'
import loginBg from '../../../images/login.png'
import facebook from '../../../images/facebook.png'
import google from '../../../images/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faFacebookF,
  faGoogle,
  faGooglePlusG
} from '@fortawesome/free-brands-svg-icons'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useState } from 'react'
import firebaseConfig from './firebase.Config'

const Login = () => {
  document.title = 'Login '

  const [newUser, setNewUser] = useState(false)
  const [loggedIndUser, setLoggedInUser] = useState({
    isSingIn: false,
    name: '',
    photo: '',
    email: '',
    password: '',
    success: false,
    newUser: false
  })

  const provider = new firebase.auth.GoogleAuthProvider()

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }

  const handleSingIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        var credential = result.credential
        var token = credential.accessToken

        const { displayName, photoURL, email } = result.user
        const user = {
          name: displayName,
          photo: photoURL,
          email: email
        }
        setLoggedInUser(user)

        console.log(user)
      })
      .catch(error => {
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
  }

  const handleSingOut = () => {
    firebase
      .auth()
      .signOut()
      .then(res => {
        const user = {
          isSingIn: true,
          name: '',
          photo: '',
          email: '',
          password: '',


        }
        setLoggedInUser(user)
      })
      .catch(error => {
        // An error happened.
      })
  }

  //   submite From



  const handleBlur = (e) => {

    let isFildValid = true;
    if (e.target.name === 'email') {
      isFildValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const isPasswordHasNumber = /\d{1}/.test(e.target.value);

      isFildValid = isPasswordValid && isPasswordHasNumber;

    }
    if (isFildValid) {
      const newUserInfo = { ...loggedIndUser }
      newUserInfo[e.target.name] = e.target.value;
      setLoggedInUser(newUserInfo)
    }


  }

  const handleSubmit = (e) => {

    if (loggedIndUser.email && loggedIndUser.password) {
      firebase.auth().createUserWithEmailAndPassword(loggedIndUser.email, loggedIndUser.password)
        .then(result => {

          const newUserInfo = { ...loggedIndUser }
          newUserInfo.error = ''
          newUserInfo.success = true
          setLoggedInUser(newUserInfo)

        })
        .catch((error) => {
          const newUserInfo = { ...loggedIndUser }
          newUserInfo.error = error.message
          newUserInfo.success = false
          setLoggedInUser(newUserInfo)
          // ..
        });

    }

    if (!newUser && loggedIndUser.email && loggedIndUser.password) {
      firebase.auth().signInWithEmailAndPassword(loggedIndUser.email, loggedIndUser.password)
        .then(res => {
          // Signed in
          const newUserInfo = { ...loggedIndUser }
          newUserInfo.error = ''
          newUserInfo.success = true
          setLoggedInUser(newUserInfo)
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...loggedIndUser }
          newUserInfo.error = error.message
          newUserInfo.success = false
          setLoggedInUser(newUserInfo)
        });

    }



    e.preventDefault();
  }

  return (
    <div className='loginFrom container'>
      <div className='row'>
        <div className='col-md-6 mt-5 pt-5'>
          <form onSubmit={handleSubmit}>
            <h3 className='text-center text-brand mb-3 pb-3'>
              {newUser ? 'Creact an account' : 'Login Account'}
            </h3>

            {newUser && <div className='form-group'>
              <input
                type='text'
                name="name"
                className='form-control'
                placeholder='First name'
                onBlur={handleBlur}
                required
              />
            </div>}

            {newUser && <div className='form-group'>
              <input
                type='text'
                name="lastName"
                className='form-control'
                placeholder='last name'
                onBlur={handleBlur}
                required
              />
            </div>}

            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Enter email'
                onBlur={handleBlur}
                required
              />
            </div>

            <div className='form-group'>
              <input
                type='password'
                name="password"
                className='form-control'
                onBlur={handleBlur}
                placeholder='Enter password'
                required
              />
            </div>
            <br />
            <br />
            <button type='submit' className='btn-brand w-100'>
              {newUser ? " Creact an Account" : " Login"}
            </button>
            <p className='forgot-password text-right text-center mt-3'>
              {newUser ? 'Do You Have Already account' : " Creact an account "}
              <a href='#' className='ms-auto ' style={{ textDecoration: 'none', color: 'red' }} onClick={() => setNewUser(!newUser)}>
                {newUser ? ' Login ?' : "  Regster ?"}
              </a>
            </p>

          </form>


          <p style={{ color: "red" }} className="text-center"> {loggedIndUser.error}</p>
          {loggedIndUser.success && <p style={{ color: "green" }} className="text-center">User {newUser ? "Create" : "login"} successfully </p>}
          <div className='form-group  container'>
            <p className='loginWith'> OR </p>
            {loggedIndUser.isSingIn ? (
              <button className='login-provider ' onClick={handleSingIn}>
                {' '}
                Login with Google <FontAwesomeIcon icon={faGoogle} />{' '}
              </button>
            ) : (
              <button onClick={handleSingOut}>Sing Out</button>
            )}
            <br />
            <button className='login-provider'>
              Login with Facebook <FontAwesomeIcon icon={faFacebook} />{' '}
            </button>
          </div>
        </div>
        <div className='col-md-6 mt-5 pt-5'>
          <img src={loginBg} className='img-fluid' alt='' srcset='' />
        </div>
      </div>
    </div>
  )
}

export default Login
