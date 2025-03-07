import React from 'react'
 import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        < Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        < Link className="nav-link" to="/about">Aboutus</Link>
        </li>
        <li className="nav-item">
          < Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
        < Link className="nav-link" to="/activity">Activity</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

      </div>
   </>
  )
}
