import React from 'react';
import MainCard from '../MainCard';
import MainText from '../MainText';
import './style.css';


function Main() {
  return (
    <div className='main'>
      <div className='mainlefts'>

        <div className='left'>
          <h1>A better way to start building.</h1>
        </div>
        
      <div className='right'>
      <MainCard></MainCard>
      <MainCard></MainCard>
      <MainCard></MainCard>
      <MainCard></MainCard>
        </div>  
      </div>

      <div className='maintextt'>
        <MainText></MainText>
      </div>
      
 
    
      

  </div>
  );
}

export default Main;
