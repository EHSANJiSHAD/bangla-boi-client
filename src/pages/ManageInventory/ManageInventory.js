import './ManageInventory.css'
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import { Table } from 'react-bootstrap';

const ManageInventory = () => {
    // const {id} = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/book/')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])
    

    const navigate = useNavigate();
    const handleAddBook = ()=>{
        navigate('/addItem');
    }
    return (
        <div className='item-text'>
            <div className=''>
                <h2 className='item-text'>INVENTORY</h2>
                <button className='mb-5 btn' onClick={handleAddBook}>ADD BOOK</button>
            </div>

            {
                items.map(item => <ManageInventoryItem
                    key={item._id}
                    item={item}
                ></ManageInventoryItem>)
            }
        </div>
    );
};

export default ManageInventory;