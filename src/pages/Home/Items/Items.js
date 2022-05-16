import './Items.css'

import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { Spinner } from 'react-bootstrap';

const Items = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/book`)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <h3 className='items-header-text'>INVENTORY ITEMS</h3>
            
            <div className='items-container'>
                    {
                        items.map(item=>
                            <Item 
                            key={item._id}
                            item={item}
                            >     
                            </Item>)
                    }
            </div>
            {/* {items ? items : <Spinner animation="border" variant="secondary" />} */}
        </div>
    );
};

export default Items;