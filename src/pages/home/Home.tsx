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
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Saúde em cada dose!</p>
  
              <div className="flex justify-around gap-4">
              
              <Link to='/produtos' ><button className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</button></Link>
              
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