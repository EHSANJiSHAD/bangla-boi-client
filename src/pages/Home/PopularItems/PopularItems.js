import './PopularItems.css'

import React, { useEffect, useState } from 'react';
import PopularItem from '../PopularItem/PopularItem';

const PopularItems = () => {

        const [popularItems,setPopularItems] = useState([]);
    
        useEffect(()=>{
            fetch('popularItems.json')
            .then(res=>res.json())
            .then(data=>setPopularItems(data))
        },[])
    return (
        <div>
            <div>
                <h3 className='mt-5 items-header-text'>MOST POPULAR BOOKS</h3>
            </div>
            <div className='items-container popular-container'>
            {
                        popularItems.map(popularItem=>
                            <PopularItem 
                            key={popularItem.id}
                            popularItem={popularItem}
                            >     
                            </PopularItem>)
                    }
            </div>
        </div>
    );
};

export default PopularItems;