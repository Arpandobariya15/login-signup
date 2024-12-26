import React from 'react';
import "./Home.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>
      <div className='row container'>
        <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column' style={{height:"91.5vh"}}>
            <h2 style={{fontSize:"80px"}}>BOOK STORE </h2>
            <h3 style={{fontSize:"50px"}}>FOR YOU</h3>
            <p  style={{color:"silver"}}>Checkout The Book From Here</p>
            <Link to="/books"><Button variant="outline-light">View Books</Button></Link>
        </div>
        <div className='col-lg-6 d-flex justify-content-center align-items-end flex-column' style={{height:"91.5vh"}}>
            <img className='img-fluid' src="https://images.stockcake.com/public/2/6/9/269b3cb7-5498-42c0-9c26-55cd82bdc8f7_large/enchanting-reading-moment-stockcake.jpg" alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Home;
