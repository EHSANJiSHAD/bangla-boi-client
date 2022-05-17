import './Manage.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Manage = () => {
    const {id} = useParams();
    const [bookItem,setBookItem] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/book/${id}`)
        .then(res=>res.json())
        .then(data=>setBookItem(data))
    },[bookItem])

    ////////////////////ITEM QUANTITY INCREASE//////////////////
    
    const manageItemQuantity = ()=>{
        
        console.log(bookItem.quantity);
        const updatedQuantity = (bookItem.quantity)  - 1;
        const newQuantity = {updatedQuantity};
        console.log(updatedQuantity);
        
        fetch(`http://localhost:5000/book/${id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('processing',data);
            toast('QUANTITY UPDATED');
        })
        
    }
    ////////////////////ITEM QUANTITY INCREASE//////////////////
    return (
        <div className='container book-details'>
            <img className='w-50' src={bookItem.img} alt="" />
            <h3 className='item-text fs-3 item-name'>{bookItem.name}</h3>
            <small className='book-text id'>ID: {bookItem._id}</small>
            <p className='book-text bg-shadow'>{bookItem.description}</p>
            <h5 className='item-text'>QUANTITY: {bookItem.quantity}</h5>
            <h5 className='item-text'>{bookItem.price} tk</h5>
            <h6 className='book-text'>SOLD: {bookItem.sold}</h6>
            <h6 className='book-text'>SUPPLIER NAME: {bookItem.supplier_name}</h6>

            <button onClick={manageItemQuantity} className='btn'>DELIVERED</button>
            

        </div>
    );
};

export default Manage;