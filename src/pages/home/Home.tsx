import React from 'react';
// import homeLogo from '../../assets/home.png';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom'


function Home() {
    return (
        <>
        <div className="bg-gray-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">

              <div className="flex justify-around gap-4">
              
              </div>
            </div>
  
            {/* <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div> */}
          </div>
        </div>
      
      </>
    );
}

export default Home;