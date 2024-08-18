import React from 'react'
import { Link } from 'react-router-dom'

export const Layout = () => {
  return (
    <nav className='bg-[#f88acc]  w-full h-[10%] flex flex-row p-4 justify-between items-center'>
        <Link to='/'>
        <img className='rounded-full' src="/public/images/logo.jpg" alt="logo" width={60} height={60} />
        </Link>
        <section className='flex flex-row gap-8'>
            <Link className='hover:bg-[#e955ae] p-2 rounded-full' to='/productos' >Productos</Link>
            <Link className='hover:bg-[#e955ae] p-2 rounded-full '  to='/servicios'  >Servicios</Link>
            <Link className='hover:bg-[#e955ae] p-2 rounded-full '  to='/nosotros' >Nosotros</Link>
        </section>
        
    </nav>
  )
}
