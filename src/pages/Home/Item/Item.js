import './Item.css'

import React from 'react';

const Item = ({item}) => {
    const {name,price,description,img} = item;
    return (
        <div className='container'>
            <div className='item-container'>
            <div className="item">
                <img className='item-image shadow-lg' src={img} />
                <h4 className='item-text'>{name.toUpperCase()}</h4>
                <small>{description.slice(0,80)}...</small>
            </div>
            <div>
                <hr></hr>
                <h5 className='item-text'>{price} tk</h5>
                <button className='btn' >
                    DETAILS
                </button>
            </div>
        </div>
        </div>
    );
};

export default Item;