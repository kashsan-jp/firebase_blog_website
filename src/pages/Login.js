import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase-config';
import  React  from 'react';
import { useNavigate } from 'react-router-dom';
import google from "../images/icons8-google.png";

function Login({setIsAuth}) {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
             localStorage.setItem("isAuth", true);
             setIsAuth(true);
             navigate("/");
        });
    };
  return ( 
    <div className='loginPage'>
        <p>Sign In With Google to Continue</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>
            <img src={google} className='logo' alt='logo'/>Sign in With Google
        </button>
    </div>
  );
}

export default Login;
