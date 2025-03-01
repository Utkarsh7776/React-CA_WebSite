import React from 'react'
import './Contact.css';
export default function Contact() {
  return (
    <>
    <div className='container' id='contactheading'>
      <div className='row'>
        <div className='col-md-12'>
       <h1>Contact Us </h1> 
       <p> Get in Touch with Us Today!  Your journey towards academic excellence starts here.
       Reach out to us for expert guidance & support tailored to your educational goals.</p>
        </div>
      </div>
      </div>
      <br/>
      
      <div className='container-fluid' >
        <div className='row'>
          <div className='col-md-7'>

<form className='form-control'>

<div className='col-md-5 d-inline-block'>
<input type='text' placeholder='Students Full Name' className='form-control'/>
</div>
  <div className='col-md-5 d-inline-block ms-3'>
  <input type='number' placeholder='Enter Your Mobile No'className='form-control'/>
  </div>
  <div className='col-md-10 d-inline-block ms-3'>
  <input type='number' placeholder='Enter Your Mobile No'className='form-control'/>
  </div>
</form>
          </div>
          <div className='col-md-5'>

            
         </div>
        </div>
      </div>
      
    
    </>
  )
}
