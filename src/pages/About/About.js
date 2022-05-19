import './About.css'
import React from 'react';
import image from '../../images/banner/3.jpg'

const About = () => {
    return (
        <div className='container'>
            <h4 className='bg-shadow item-text'>ABOUT US</h4>
            <h6 className='bg-shadow' style={{color:'gray'}}>WE WERE DESTINED TO GIVE OUR USERS THE BEST BOOK EXPERIENCE THEY CAN GET.WE SUPPLIER SHOULD MAKE SURE TO SUPPLY ONLY THE BEST PRODUCT AND SHOULD NOT STORE ITEM OR INCREASE ITEM RATE FOR OUR OWN BENEFIT.OR THE AUTHORITY WILL TAKE PROPER ACTIONS.SO MAKE SURE YOU FOLLOW OUR TERMS AND CONDITIONS RIGHT.</h6>

           <div className='about bg-shadow' style={{color:'black'}}>
               <h6 className=' bg-shadow'>FOR ANY KIND OF QUERY AND TECHNICAL PROBLEMS DO..</h6>
               <h1>CONTACT US</h1>
               <h3>PHONE: 01212121212</h3>
               <h3>EMAIL: banglaboi60@gmail.com</h3>
           </div>
        </div>
    );
};

export default About;