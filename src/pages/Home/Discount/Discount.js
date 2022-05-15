import './Discount.css'
import book1 from '../../../images/books/1.webp'
import book2 from '../../../images/books/2.webp'
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Discount = () => {
    return (
        <div className='discount-container mt-5'>
        
            <div className='container text-white discount-sub-container'>
                <div>
                    <div className='discount-text'>
                    <h2>START A NEW SERIES - UP TO 50% OFF</h2>
                    <p>we has the weekly promotion, keep up with us and you’ll get the best deal to get your loved stuff. Our design reflects the purity of contemporary forms for enduring appeal.</p>

                    </div>
                   
                   
                </div>
                <div>
                <Carousel variant="white" fade="true" interval="3000">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img discount-carousel"
                        src={book1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img discount-carousel"
                        src={book2}
                        alt="Second slide"
                    />
                
                </Carousel.Item>
            </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Discount;