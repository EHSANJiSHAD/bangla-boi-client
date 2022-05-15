import './Items.css'

import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('items.json')
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
                            key={item.id}
                            item={item}
                            >     
                            </Item>)
                    }
            </div>
        </div>
    );
};

export default Items;