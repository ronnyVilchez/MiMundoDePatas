import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Layout = ({ children }) => {
const [modal, setModal ] = useState(false)

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
 
  function handleModal() {
    setModal(!modal)
  }



  return (
    <>
      <nav className='bg-[#f88acc] font-Poppins z-40 w-full h-[5rem] sm:h-[10%] flex flex-row p-4 justify-between items-center sticky top-0 text-white sm:text-black'>
        <Link to='/'>
          <img className='rounded-full' src="/images/logo.jpg" alt="logo" width={60} height={60} />
        </Link>
        <button onClick={handleModal} className='flex sm:hidden '>
          <img src="/images/dogOpt.svg" alt="options" width={40} height={40} />
        </button>
        <section className={`${modal ? 'flex flex-col absolute top-[5rem] right-0 px-4  py-2 rounded-b-lg  bg-[#f88acc]' : 'hidden'}   sm:flex sm:flex-row sm:gap-8 `}>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/' >Inicio</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full' to='/food' >Alimento</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/health'  >Salud</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/accesories'  >Accesorios</Link>
          <Link className='hover:bg-[#e955ae] p-2 rounded-full ' to='/buy' >Mis pedidos <span className='bg-red-400 text-white p-1 rounded-full'>{spa}</span></Link>
        </section>
      </nav>
      {children}
    </>
  )
}
