import React from 'react'
import './MainContent.css';
export default function MainContent() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../Images/Chandankar-Academy-Admission-Banner-2.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Images/Chandankar-Academy-Admission-Banner-2.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Images/Chandankar-Academy-Admission-Banner-2.jpg")} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h2 className='d-flex justify-content-center mt-3'>Welcome To Chandankar Academy</h2>


<div className='container-fluid mt-4'>

  <div className='row'>
  <div className='col-md-4' id='AAA'>
  <img src={require("../Images/600x400.png")} alt='NO'id='kkk'/>
</div>

<div id='PPP' className='col-md-6'>
<p> <strong>Chandankar Academy</strong> has 
  started on 10th April 2015, with the vision of grooming 
  students beyond traditional education. The institution is 
  not just a coaching center but a motivational hub where students 
  are inspired to develop a strong mindset for success. Our tagline,
   “Inspiring Future, Strengthening Mind,” which reflects our belief 
   that once students are motivated, they no longer need external 
   guidance.
   <br/>
   <br/>
 With a dedicated team working round the clock, we ensure that 
 every student receives the best learning environment. The 
 vision of the academy is to nurture excellence and create skilled
  individuals who contribute to society.</p>
  <button className='btn btn-primary '>KNOW MORE</button>
  <button className='btn btn-primary ms-4'>CONTACT US</button>
</div>

  </div>
</div>

<div className='container-fluid explrcrs mt-4'>
  <div className='row'>
    <div className="col-sm-12">
<h1 className='d-flex justify-content-center mt-4'>Explore Our Courses</h1>

<div className='row'>
<div id='IIIII'><img src={require("../Images/ExploreCRS1.jpg")}className='col-md-3 ' id='imgsz' /> 

  <img src={require("../Images/ExploreCRS2.jpg")} className='col-md-3'id='imgsz'/> 

  <img src={require("../Images/ExploreCRS3.jpg")} className='col-md-3'id='imgsz'/> 
  </div>

</div>









    </div>
  </div>
</div>







    </div>
  )
}
