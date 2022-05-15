import './PopularItem.css'
import { FaStar } from 'react-icons/fa';
import React from 'react';

const PopularItem = ({popularItem}) => {
    const {name,price,img,ratings} = popularItem;
    return (
       
        <div className='container'>
            <div className="item item-text">
                <img className='item-image shadow-lg' src={img} />
                <h4 className='item-text'>{name.toUpperCase()}</h4>
                <h6 className='item-text'>{price} tk</h6>

                <div className='ratings'>
                    <h6>{ratings}</h6>
                    <small><FaStar/></small>
                </div>
                
                
               
            </div>
        </div>
    );
};

export default PopularItem;