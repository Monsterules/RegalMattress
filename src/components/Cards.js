import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these increadible Mattresses!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>                        
                        <CardItem 
                            src='images/mattress-9.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Royalty' path='/services'
                        />                  
                        <CardItem 
                            src='images/mattress-8.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Majestic' 
                            path='/services'
                        />                   
                    </ul>      
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/mattress-7.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Kingship' 
                            path='/services'
                        />                   
                        <CardItem 
                            src='images/mattress-6.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Royalty' 
                            path='/services'
                        />                   
                        <CardItem 
                            src='images/mattress-5.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Royalty' 
                            path='/services'
                        />                                                    
                    </ul>
                    <ul className='cards__items'>                        
                        <CardItem 
                            src='images/mattress-4.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Royalty' path='/services'
                        />                  
                        <CardItem 
                            src='images/mattress-3.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Majestic' 
                            path='/services'
                        />                   
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/mattress-2.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Kingship' 
                            path='/services'
                        />                   
                        <CardItem 
                            src='images/mattress-1.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Royalty' 
                            path='/services'
                        />                   
                        <CardItem 
                            src='images/mattress-0.jpg' 
                            text='Sleep Like The Royalty You Are!' 
                            label='Royalty' 
                            path='/services'
                        />                                                    
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
