import React from 'react';
// import homeLogo from '../../assets/home.png';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom'
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';


function Home() {
  return (
    <>
      <div className="bg-gray-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <div className="flex justify-around gap-4">
              <ModalProduto />
              <Link to={'/produtos'}><button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Produtos</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;