import './AddItem.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`https://bangla-boi-server.vercel.app/book`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast('ITEM ADDED')
    };

    return (
        <div>
            <h2 className='item-text'>ADD TO INVENTORY</h2>

            <div className='w-50 mx-auto login-div container'>
                <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                    <input required className='mb-2 add-item-text-field' placeholder='NAME' {...register("name")} />
                    <textarea required className='mb-2 add-item-text-field' placeholder='DESCRIPTION' {...register("description")} />
                    <input required className='mb-2 add-item-text-field' placeholder='PRICE' type="number" {...register("price")} />
                    <input required className='mb-2 add-item-text-field' placeholder='QUANTITY' type="number" {...register("quantity")} />
                    <input className='mb-2 add-item-text-field' placeholder='SOLD' type="number" {...register("sold")} />
                    <input required className='mb-2 add-item-text-field' placeholder='EMAIL' type="email" {...register("email")} />
                    <input required className='mb-2 add-item-text-field' placeholder='YOUR NAME' type="text" {...register("supplier_name")} />
                    <input required className='mb-2 add-item-text-field' placeholder='IMAGE URL' type="text" {...register("img")} />
                    <input required className='mb-2 add-item-text-field' placeholder='RATINGS' type="number" step="0.1" {...register("ratings")} />
                    <input className='mb-2 mt-3 add-item-text-field' type="submit" value='ADD ITEM' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;