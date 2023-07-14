import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/raigad.jpg'
              text='Enjoy the trek of the great Raigad fort.'
              label='Adventure/trek'
              path='/services'
            />
            <CardItem
              src='images/torna.jpg'
              text='Visit the naturally surrounded Torna fort.'
              label='Adventure/trek'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ajanta.jpg'
              text='Visit "Ajanta-ellora caves" of the best historical place in Maharashtra.'
              label='Historical'
              path='/services'
            />
            <CardItem
              src='images/chikhaldara.jpg'
              text='Explore the beautiful waterfall at chikhaldara !'
              label='Adventure/Nature'
              path='/products'
            />
            <CardItem
              src='images/hariharfort.png'
              text='Enjoy the adventurous trek of Harihar fort '
              label='Trek'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;