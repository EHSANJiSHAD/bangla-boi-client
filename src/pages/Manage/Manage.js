import './Manage.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Manage = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>MANAGE YOUR BOOKS: {id}</h2>
        </div>
    );
};

export default Manage;