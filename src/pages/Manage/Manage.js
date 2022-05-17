import './Manage.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Manage = () => {
    const {id} = useParams();
    const [bookItem,setBookItem] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/book/${id}`)
        .then(res=>res.json())
        .then(data=>setBookItem(data))
    },[])
    return (
        <div className='container book-details'>
            <img className='w-50' src={bookItem.img} alt="" />
            <h3 className='item-text fs-3 item-name'>{bookItem.name}</h3>
            <small className='book-text id'>ID: {bookItem._id}</small>
            <p className='book-text bg-shadow'>{bookItem.description}</p>
            <h5 className='item-text'>{bookItem.price} tk</h5>
            <h6 className='book-text'>SOLD: {bookItem.sold}</h6>
            <h6 className='book-text'>SUPPLIER NAME: {bookItem.supplier_name}</h6>

            <button className='btn'>DELIVERED</button>
            

        </div>
    );
};

export default Manage;