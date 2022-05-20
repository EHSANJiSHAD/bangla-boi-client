import './ManageInventoryItem.css'
import React, { useRef } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';


const ManageInventoryItem = ({ item }) => {
    const { _id, name, description, price, quantity, sold, supplier_name, img } = item;

    const handleDeleteItem = id => {
        const proceed = window.confirm('ARE YOU SURE YOU WANT TO DELETE?');
        if (proceed) {
            fetch(`https://murmuring-depths-02769.herokuapp.com/book/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // if(data.deletedCount>0){
                    //     const remaining = item.
                    // }
                })
        }
    }

    return (
        <div>
            <div className='container table-style'>
                <Table size='sm' responsive="sm" borderless bordered hover variant="light">
                    <thead>
                        <tr className='item-text'>
                            <th>PRODUCT</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>PRICE</th>
                            <th>SOLD</th>
                            <th>QUANTITY</th>
                            <th>SUPPLIER</th>
                            {/* <th>RESTOCK</th> */}
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='book-text'>

                            <td><img className='product-img' src={img} alt="" /></td>
                            <td><h6 >{name}</h6></td>
                            <td><p className='description-text'>{description}</p></td>
                            <td><h6 >{price}</h6></td>
                            <td><h6 >{sold}</h6></td>
                            <td><h6 >{quantity}</h6></td>
                            <td><h6 >{supplier_name}</h6></td>

                            <td><h5 ><button onClick={() => handleDeleteItem(_id)} className='dlt-btn'><MdDelete></MdDelete></button></h5></td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventoryItem;