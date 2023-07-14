import React from 'react';
import '../../App.css';

export default function SignUp() {
  return(<div className="main-sign">
      <div className='sign-container'>
      <h1 className='sign-up'>Log-in to continue</h1>
      <form action="" className='myform'>
           <div className='inpu'>
           <div class="form-group">
                <input type="text" name="" placeholder="Enter mail or user-id"/>
            </div>
            <div className="form-group">
                <input type="text" name="" placeholder="Enter Password"/>
            </div>
           </div>
            
            
            <button class="btn1">Submit</button>
            <div className='links'>
            <a href="#">forgot password?</a>
            <a href="#">Sign-Up</a>
            </div>
            
        </form>

      </div>
      
  </div>);
}