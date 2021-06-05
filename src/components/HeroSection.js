import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='/images/castle.jpg' />
            <h1>COMFORT AWAITS</h1>
            <p>Sleep Like Royalty!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    ORDER NOW <i className='fa fa-bed'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
