import React from 'react';
import '../../App.css';
import Footer from "../Footer"

export default function Products() {
  return (<div>
    {/* <h1 className='products'>PRODUCTS</h1> */}
    <div className="about-section" >
  <h1 style={{fontSize:"4rem"}} >About Us </h1>
  <p>Since, 2022</p>
  <p>Our mission is to be the leading and most trustworthy travel management company that sets the standard for professionalism, reliability and transparency to its customers.</p>
  {/* <p>Resize the browser window to see that this page is responsive by the way.</p> */}
</div>

<h2 style={{textAlign:"center",fontSize:"2rem",margin:"2% 0"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="images/profile1.png" alt="Jane" style={{width:"68%", borderRadius:"50%"}}/>
      <div className="container">
        <h2>Kunal Pandit</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="images/profile1.png" alt="Mike" style={{width:"68%", borderRadius:"50%"}}/>
      <div class="container">
        <h2>Pratik Daud</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={"images/profile1.png"} alt="John" style={{width:"68%", borderRadius:"50%"}} />
      <div className="container">
        <h2>Mr. Lokesh </h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
</div>
<Footer/>
    </div>);
}