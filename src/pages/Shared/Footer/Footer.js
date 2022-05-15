import './Footer.css'

import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <footer>
                <small>
                    &copy; BANGLA-BOI {year}
                </small>
            </footer>
        </div>
    );
};

export default Footer;