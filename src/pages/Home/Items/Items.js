import './Items.css'

import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Items = () => {
    const [items,setItems] = useState([]);
    // const {_id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/book`)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])

    const navigate = useNavigate();
    const handleManageInventory=()=>{
        navigate(`/manageInventory`);
    }
    return (
        <div>
            <h3 className='items-header-text'>INVENTORY ITEMS</h3>
            
            <div className='items-container'>
                    {
                        items.slice(0,6).map(item=>
                            <Item 
                            key={item._id}
                            item={item}
                            >     
                            </Item>)
                    }
            </div>
            <button className='btn manage-inventory-btn fw-bolder' >
                <small onClick={handleManageInventory}>MANAGE INVENTORIES</small>
            </button>
        </div>
    );
};

export default Items;