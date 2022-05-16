import './Banner.css'

import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/1.jpg'
import banner2 from '../../../images/banner/2.jpg'
import banner3 from '../../../images/banner/4.jpg'

const Banner = () => {
    
    return (
        <div>
            <Carousel variant="white" fade="true" interval="3000">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner2}
                        alt="Second slide"
                    />
                
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;