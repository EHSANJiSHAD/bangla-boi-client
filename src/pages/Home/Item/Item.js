import './Item.css'

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {name,price,description,img,quantity,supplier_name} = item;


    const navigate = useNavigate();
    const handleUpdateButton = ()=>{
       navigate('/manage');
    }
    return (
        <div className='container'>
            <div className='item-container'>
            <div className="item">
                <img className='item-image shadow-lg' src={img} />
                <h4 className='item-text'>{name.toUpperCase()}</h4>
                <small>{description.slice(0,80)}...</small>
                <hr/>
                <h6 className='item-text fs-6'>QUANTITY: {quantity}</h6>
                <small>SUPPLIER NAME: {supplier_name.toUpperCase()}</small>
            </div>
            <div>
                <hr></hr>
                <h5 className='item-text'>{price} tk</h5>
                <button onClick={handleUpdateButton} className='btn' >
                    UPDATE
                </button>
            </div>
        </div>
        </div>
    );
};

export default Item;