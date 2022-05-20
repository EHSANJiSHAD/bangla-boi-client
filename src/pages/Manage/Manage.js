import './Manage.css'
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';

const Manage = () => {
    const { id } = useParams();
    const [bookItem, setBookItem] = useState([]);

    useEffect(() => {
        fetch(`https://murmuring-depths-02769.herokuapp.com/book/${id}`)
            .then(res => res.json())
            .then(data => setBookItem(data))
    }, [bookItem])

    ////////////////////ITEM QUANTITY DECREASE//////////////////

    const manageItemQuantity = () => {

        console.log(bookItem.quantity);
        const quantity = (bookItem.quantity) - 1;
        const updateQuantity = { quantity };
        console.log(updateQuantity);
        console.log(id);
        fetch(`https://murmuring-depths-02769.herokuapp.com/book/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('processing', data);
                toast('QUANTITY UPDATED');
            })

    }
    ////////////////////ITEM QUANTITY DECREASE//////////////////

    /////////////////////////RESTOCK///////////////////////////
    const numberRef = useRef();

    const handleRestock = event => {
        event.preventDefault();
        const restockVal = parseInt(numberRef.current.value);
        const quantity = (bookItem.quantity) + restockVal;
        const restock = { quantity };
        console.log(id);
        fetch(`https://murmuring-depths-02769.herokuapp.com/book/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(restock)
        })
            .then(res => res.json())
            .then(data => {
                console.log('processing', data);
                toast('QUANTITY UPDATED');
            })
    }
    /////////////////////////RESTOCK///////////////////////////

    const navigate = useNavigate();
    const handleManageInventory = () => {
        navigate(`/manageInventory`);
    }

    return (
        <div>
            <div className='bg-shadow'>
                <button className='btn manage-inventory-btn fw-bolder' >
                    <small onClick={handleManageInventory}>MANAGE INVENTORIES</small>
                </button>
            </div>
            <div className='container book-details'>

                <img className='w-50' src={bookItem.img} alt="" />
                <h3 className='item-text fs-3 item-name'>{bookItem.name}</h3>
                <small className='book-text id'>ID: {bookItem._id}</small>
                <p className='book-text bg-shadow'>{bookItem.description}</p>
                <h5 className='item-text'>QUANTITY: {bookItem.quantity}</h5>
                <h5 className='item-text'>{bookItem.price} tk</h5>
                <h6 className='book-text'>SOLD: {bookItem.sold}</h6>
                <h6 className='book-text'>SUPPLIER NAME: {bookItem.supplier_name}</h6>
                <button onClick={manageItemQuantity} className='btn mb-5'>DELIVERED</button>
                {/* RESTOCK OPTION */}
                <Form className='form-div' onSubmit={handleRestock}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={numberRef} type="number" placeholder="ENTER RESTOCK AMOUNT" required />
                    </Form.Group>
                    <Button className='mb-5 mt-0' variant="btn" type="submit">
                        RESTOCK
                    </Button>

                </Form>
                {/* RESTOCK OPTION */}




            </div>
        </div>
    );
};

export default Manage;