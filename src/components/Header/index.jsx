import React from 'react';
import './style.css'

function Header() {
  return (
      <div className='center'>
          <div className='bootstrap'>
              <h1>A Bootstrap 5 template for modern businesses</h1>
              <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit!</p>
              <button className='started'>GEt Started</button>
             <button className='learn'>Learn More</button>
          </div>
          <div className='image'>
              <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
          </div>
        
      </div>
  );
}

export default Header;
