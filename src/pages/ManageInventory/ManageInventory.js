import './ManageInventory.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import { Table } from 'react-bootstrap';

const ManageInventory = () => {
    // const {id} = useParams();
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/book/')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[items])
    return (
        <div className='item-text'>
            <h2 className='item-text'>INVENTORY</h2>
            
            {
                items.map(item=><ManageInventoryItem 
                key={item._id}
                item={item}
                ></ManageInventoryItem>)
            }
        </div>
    );
};

export default ManageInventory;