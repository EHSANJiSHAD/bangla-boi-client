import './PopularItems.css'

import React, { useEffect, useState } from 'react';
import PopularItem from '../PopularItem/PopularItem';

const PopularItems = () => {

        const [popularItems,setPopularItems] = useState([]);
    
        useEffect(()=>{
            fetch('http://localhost:5000/book')
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
                        popularItems.slice(5,8).map(popularItem=>
                            <PopularItem 
                            key={popularItem._id}
                            popularItem={popularItem}
                            >     
                            </PopularItem>)
                    }
            </div>
        </div>
    );
};

export default PopularItems;