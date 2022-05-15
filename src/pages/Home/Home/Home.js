import './Home.css'

import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import PopularItems from './../PopularItems/PopularItems';
import Discount from '../Discount/Discount';


const Home = () => {
    return (
        <div>
             
             <Banner></Banner>
             <Items></Items>
             <PopularItems></PopularItems>
             <Discount></Discount>
        </div>
    );
};

export default Home;    