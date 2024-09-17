import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Layout = ({ children }) => {
  const [spa, setSpa] = useState(() => {
    const data = localStorage.getItem('buys');
    return data ? JSON.parse(data).length : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const data = localStorage.getItem('buys');
      const buys = data ? JSON.parse(data) : [];
      setSpa(buys.length);
    }, 500); // Verifica cada segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className='bg-[#f88acc] z-40 w-full h-[10%] flex flex-row p-4 justify-between items-center sticky top-0'>
        <Link to='/'>
          <img className='rounded-full' src="/images/logo.jpg" alt="logo" width={60} height={60} />
        </Link>
        <section className='flex flex-row gap-8'>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/' >Inicio</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full' to='/food' >Alimento</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/health'  >Salud</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/accesories'  >Accesorios</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/buy' >Mis pedidos <span>{spa}</span></Link>
        </section>
      </nav>
      {children}
    </>
  )
}
