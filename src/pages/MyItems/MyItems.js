import './MyItems.css'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const myEmail = user.email;
    console.log(myEmail)

    useEffect(() => {
        fetch(`https://murmuring-depths-02769.herokuapp.com/book`)
            .then(res => res.json())
            .then(data => {
                const myInventoryItem = data.filter(it => it.email === myEmail)
                setItems(myInventoryItem);
                console.log(data);
                // console.log(items);
            })
    }, [items])

    return (
        <div>
            <h2 className='item-text'>MY ITEMS</h2>
            {
                items.map(item =>
                    <MyItem
                        key={item._id}
                        item={item}
                    > </MyItem>)
            }
        </div>
    );
};

export default MyItems;