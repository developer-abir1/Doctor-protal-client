import React, { useContext } from 'react'
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
import { useState } from 'react'
import { UserContext } from '../../../App'
import { useHistory, useLocation } from 'react-router'
import { handleCreactUser, handleGoogleSingIn, handleSingInUsers, handleSingOut, initializeLoginFrameWorker, storeAuthToken } from './LoginManger'

const Login = () => {
  document.title = 'Login '

  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSingIn: false,
    name: '',
    photo: '',
    email: '',
    password: '',
    success: false,
    newUser: false
  })

  const [loggedIndUser, setLoggedIndUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  initializeLoginFrameWorker();

  const googleSingIn = () => {
    handleGoogleSingIn()
      .then(res => {
        setLoggedIndUser(res)
        setUser(res)
        storeAuthToken()
        history.replace(from);
      
       
        
      })
  }




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
      setUser(newUserInfo)
      setLoggedIndUser(newUserInfo)
    }


  }

  const handleSubmit = (e) => {

    if (user.email && user.password) {
      handleCreactUser(user.email, user.password)
        .then(res => {
          setUser(res)
          setLoggedIndUser(res)
          history.replace(from)
          sessionStorage.setItem(loggedIndUser)

        })
    };

    if (!newUser && user.email && user.password) {
      handleSingInUsers(user.email, user.password)
        .then(res => {
          setUser(res)
          setLoggedIndUser(res)

          history.replace(from);
        })

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
                placeholder='Enter your Name'
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
              {newUser ? ' Already account' : "Don't have an account?  "}
              <a href='#' className='ms-auto ' style={{ textDecoration: 'none', color: 'red' }} onClick={() => setNewUser(!newUser)}>
                {newUser ? ' Login ?' : " Sing up"}
              </a>
            </p>

          </form>


          <p style={{ color: "red" }} className="text-center"> {loggedIndUser.error}</p>
          {loggedIndUser.success && <p style={{ color: "green" }} className="text-center">User {newUser ? "Create" : "login"} successfully </p>}
          <div className='form-group  '>
            <p className='loginWith'> OR </p>
            <br />
            <br />
            <button className='login-provider w-100' onClick={googleSingIn}>Login with Google <img src={google} alt="" width="40px" srcset="" /></button>


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
