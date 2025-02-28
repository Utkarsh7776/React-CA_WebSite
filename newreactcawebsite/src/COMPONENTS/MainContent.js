import React from 'react'
import './MainContent.css';
import img1 from '../Images/beach-sea.jpg';
import img2 from '../Images/female.jpg';
import img3 from '../Images/vintage-ferris-wheel-park.jpg';
import campuss from '../Images/Campus.jpg';
export default function MainContent() {
  return (
  <>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  {/* ************************************************************************ */}
 <div className='container-fluid'id='mid'>
  <div className='row'>
    <div className='col-md-5' >

    </div>
    <div className='col-md-6'>
      <h1>Dnyansagar Klasses, Jalgaon</h1>
      <h4 className='text-success'> Your Success... Our Passion...</h4>
      <p className='fs-5'>We are committed to take education to every single door, 
        making it a superb blend of knowledge and job specific. Our
         mission is to create ethical and intellectual personnel through 
         qualitative education. Today, Dnyansagar Klasses is located at 
         Jalgaon, Maharashtra. And, we are looking forward to spread our
          efficiency at every nook and corner of India. We are the player
           with diverse courses, teaching methodology, efficient faculty 
           team and effective management staff. Choose to contact or
            reach us for an assured advanced career.</p>
            <button className='btn btn-success'>Learn More</button>
      </div>
  </div>
 </div>
  </>
  )
}
