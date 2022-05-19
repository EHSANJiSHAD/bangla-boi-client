import './Login.css'
import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import googleIcon from '../../../images/icons/google.png'


const Login = () => {
    ///////////////////GOOGLE SIGN IN//////////////////
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    let googleErrorMsg;
    if (error1) {

        googleErrorMsg = <div>
            <p className='nav-bar-bg'>Error: {error1.message}</p>
        </div>

    }
    ///////////////////GOOGLE SIGN IN//////////////////
    //SIGN IN WITH EMAIL PASS(HOOKS)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    //SIGN IN WITH EMAIL PASS(HOOKS)

    
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit=event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(password);
        signInWithEmailAndPassword(email,password);
    }

    /////////////////RESET PASSWORD///////////////
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
    const handleResetPassword = async ()=>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('PASSWORD RESET EMAIL SENT')
        }
        else{
            toast('PLEASE ENTER YOUR EMAIL');
        }
    }
    /////////////////RESET PASSWORD///////////////


    //////////////////////REDIRECT AFTER LOGIN/////////////////////////
    const location = useLocation();
    let from = location.state?.from?.pathname || "/home";
    //////////////////////REDIRECT AFTER LOGIN/////////////////////////
    const navigate = useNavigate();
    if(user||user1){
        // navigate('/')
        navigate(from, { replace: true });
    }

    
    return (
        <div className='login-div container'>
            <Form className='form-div' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  ref={emailRef} type="email" placeholder="ENTER EMAIL" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="PASSWORD" required/>
                </Form.Group>
                
                <p className='nav-bar-bg' style={{color:'#991c0c'}}>{error?.message}</p>
                {
                    loading && <p className='nav-bar-bg'><Spinner animation="border" variant="secondary" /></p>
                }
                <Button className='mb-5' variant="btn" type="submit">
                    LOG IN
                </Button>
                <p>NEW TO SELF-MADE? <Link className='form-link' to='/signup' >SIGN UP</Link> </p>
                
            </Form>
            <p>Forget Password? <button onClick={handleResetPassword} className='logout-btn   pe-auto text-decoration-none' >RESET PASSWORD</button> </p>

            <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            
            {googleErrorMsg}
            <button onClick={() => signInWithGoogle()} className='logout-btn google'>
                <img style={{ width: '30px', paddingBottom: '4px', marginRight: '2px' }} src={googleIcon} alt="" />
                <span>GOOGLE SIGN IN</span>
            </button>
        </div>
        </div>
    );
};

export default Login;