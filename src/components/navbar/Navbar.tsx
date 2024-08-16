import { Link, useNavigate } from 'react-router-dom'
import { FirstAid } from '@phosphor-icons/react';
import React from 'react'


function Navbar() {



  return (
    <>
      <div className='w-full bg-gray-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='flex flex-col items-center text-center'>
            <div className='flex items-center text-2xl font-bold uppercase mb-2'>
              <span>Viva</span>
              <FirstAid size={32} style={{ color: 'red', margin: '0 8px' }} />
              <span>Farma</span>
            </div>          
            <div className='text-lg font-medium'>
              Saúde em cada dose!
            </div>
          </div>


          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastrar-categorias' className='hover:underline'>Cadastrar categoria</Link>
          </div>
        </div>
      </div >
    </>
  )
}

export default Navbar