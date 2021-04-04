import React, { useState } from 'react';
import './Login.css';
import { useHistory, Link } from 'react-router-dom';
import { auth } from '../../context/firebase';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { db } from '../../context/firebase';
import firebase from 'firebase';

export default function Login() {
  const [userName, setuserName] = useState('');
  const [passWord, setPassword] = useState('');
  const [emailVerification, setemailVerification] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const history = useHistory();

  const inputUserName = (e) => {
    e.preventDefault();
    setuserName(e.target.value);
    setemailVerification(false);
  };

  const inputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const forgotPassword = () => {
    auth
      .sendPasswordResetEmail(userName)
      .then(() => {
        setemailVerification(true);
        seterrorMessage('');
      })
      .catch((error) => {
        if (error.message === 'The email address is badly formatted.') {
          seterrorMessage('Please enter your email to recieve reset link ');
        } else {
          seterrorMessage(error.message);
        }
      });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    setRegistering(true);
    setTimeout(async () => {
      try {
        let data = await auth.createUserWithEmailAndPassword(
          userName,
          passWord
        );
        if (data) {
          setuserName('');
          setPassword('');
          setRegistering(false);
          history.push('/');
          db.collection('users').add({
            timestamp: firebase.firestore.Timestamp.now(),
            email: userName,
            user: userName,
          });
        }
      } catch (error) {
        setRegistering(false);
        if (error.message === 'The email address is badly formatted.') {
          seterrorMessage('Please enter your email and password to register');
        } else {
          seterrorMessage(error.message);
        }
      }
    }, 2000);
  };
  const submitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        let response = await auth.signInWithEmailAndPassword(
          userName,
          passWord
        );
        setLoading(false);
        setemailVerification(false);
        setuserName('');
        setPassword('');
        if (response) {
          history.push('/');
        }
      } catch (error) {
        setLoading(false);
        seterrorMessage(error.message);
      }
    }, 2000);
  };
  return (
    <>
      {loading || registering ? (
        <div className='orders'>
          <div className='loader_spinner'>
            {loading ? (
              <h2>Logging in</h2>
            ) : registering ? (
              <h2>Registering</h2>
            ) : null}
            <Loader type='ThreeDots' color='#232f3e' height={50} width={50} />
          </div>
        </div>
      ) : (
        <div className='login'>
          <Link to='/'>
            <img
              className='login__logo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
              alt=''
            />
          </Link>
          <div className='login__container'>
            <h1>Sign in</h1>
            <form>
              <h5>E-mail</h5>
              <input onChange={inputUserName} type='text' value={userName} />
              <h5>Password</h5>
              <input
                onChange={inputPassword}
                value={passWord}
                type='password'
              />
              {errorMessage ? (
                <p style={{ color: 'red' }}>{errorMessage} </p>
              ) : null}
              <button onClick={submitLogin} className='login__signInButton'>
                Sign in
              </button>
            </form>
            <p>
              By signing-in you agree to FAKE Amazon's Conditioons of Use &
              Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice
            </p>
            <button onClick={registerUser} className='login__registerButton'>
              Create your Amazon account
            </button>
            {emailVerification ? (
              <p style={{ color: 'red' }}>Email successfully sent</p>
            ) : null}
            <button onClick={forgotPassword} className='login__registerButton'>
              Forgot Password?
            </button>
          </div>
        </div>
      )}
    </>
  );
}
