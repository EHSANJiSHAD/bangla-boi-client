import './NotFound.css'
import notFound from '../../../images/404/404.jpg'
import React from 'react';

const NotFound = () => {
    return (
        <div className='notfound-div'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;