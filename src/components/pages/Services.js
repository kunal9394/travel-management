import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Services() {
  return <div className='services'>
 < h1  > OUR SERVICES</h1>
 <p className='servabt'>Our greatest expertise is in the regions we visit with our tours as well as most of Maharashtra where we live.We often provide travel services to our guests for personal travel planning before or after tours with the blue walk.We are also happy to assist other travel needs. </p>
  <div className="servContainer">
 
    <div className="inServContainer">
    {/* <i class="fa-solid fa-hotel"/> */}
    <i class="fa fa-hotel"></i>
    <h2>Hotel Booking</h2>
    <p>Hotel Booking is available.</p>
    <button className='mybt'>More</button>
    </div>
    <div className="inServContainer">
    <i class="fa fa-user"></i>
    <h2>Guide</h2>
    <p >Guides are available for Guidance.</p>
    <button className='mybt'>More</button>
    </div>
    <div className="inServContainer">
    <i class="fa fa-bus"></i>
    <h2>Travels Booking</h2>
    <p>Travels booking is available .</p>
    <button className='mybt'>More</button>
    </div>
  </div>
  <Footer/>
  </div>;
}