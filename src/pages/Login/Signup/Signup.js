import './Signup.css'
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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
        </div>
    );
};

export default Signup;