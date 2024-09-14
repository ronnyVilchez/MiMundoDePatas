import React from 'react'
import { Link } from 'react-router-dom'

export const Layout = ({children}) => {
  return (
    <>
      <nav className='bg-[#f88acc]  w-full h-[10%] flex flex-row p-4 justify-between items-center'>
        <Link to='/'>
          <img className='rounded-full' src="/images/logo.jpg" alt="logo" width={60} height={60} />
        </Link>
        <section className='flex flex-row gap-8'>
         {/*  <Link className='hover:bg-[#e955ae] p-2 rounded-full' to='/productos' >Productos</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/servicios'  >Servicios</Link> */}
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/' >Inicio</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/' >Mis pedidos</Link>
        </section>
      </nav>
      {children}
    </>
  )
}
