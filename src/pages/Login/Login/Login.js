import './Login.css'
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
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

    const navigate = useNavigate();
    if(user){
        navigate('/');
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
                    loading && <p className='nav-bar-bg'>LOADING...</p>
                }
                <Button className='mb-5' variant="btn" type="submit">
                    LOG IN
                </Button>
                <p>NEW TO SELF-MADE? <Link className='form-link' to='/signup' >SIGN UP</Link> </p>
                <p>Forget Password? <button className='logout-btn  pe-auto text-decoration-none' >RESET PASSWORD</button> </p>
            </Form>
        </div>
    );
};

export default Login;