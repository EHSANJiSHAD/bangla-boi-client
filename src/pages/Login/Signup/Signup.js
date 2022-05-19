import './Signup.css'
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../../images/icons/google.png'


const Signup = () => {
    ///////////////////GOOGLE SIGN IN//////////////////
    const [signInWithGoogle, user1, loading1, error2] = useSignInWithGoogle(auth);

    let googleErrorMsg;
    if (error2) {

        googleErrorMsg = <div>
            <p className='nav-bar-bg'>Error: {error2.message}</p>
        </div>

    }
    ///////////////////GOOGLE SIGN IN//////////////////
    //////////////////////SEND EMAIL VERIFICATION/////////////////////
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth);
    //////////////////////SEND EMAIL VERIFICATION/////////////////////

    //////////////////////////CREATE USER HOOK///////////////////////
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true});
    //////////////////////////CREATE USER HOOK///////////////////////

    const [error1,setError1] = useState([]);
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')

    const handleSubmit = event =>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if(password !== confirmPassword){
            setError1('PASSWORD DID NOT MATCH.RETYPE PASSWORD');
            return;
        }
        if(password.length<6){
            setError1('PASSWORD MUST HAVE AT LEAST 6 CHARACTERS');
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }

    

    const navigate = useNavigate();
    if(user){
        navigate('/')
    }

    return (
        <div className='login-div container'>
            <Form className='form-div' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="YOUR NAME" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="ENTER EMAIL"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef}  type="password" placeholder="PASSWORD" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="CONFIRM PASSWORD" required/>
                </Form.Group>
                
                <p className='nav-bar-bg' style={{color:'#991c0c'}}>{error1}</p>
                
                <Button variant="btn" type="submit" >
                    SIGN UP
                </Button>

                
            </Form>

            {/* SOCIAL LOGIN */}
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
            {/* SOCIAL LOGIN */}

        </div>
    );
};

export default Signup;