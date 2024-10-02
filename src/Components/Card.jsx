import React, { useState, useEffect } from 'react';

export const Card = ({ imagen, nombre, descripcion, precio }) => {
    const [isInBuys, setIsInBuys] = useState(false);
  
    useEffect(() => {
      const savedBuys = localStorage.getItem('buys');
      const buys = savedBuys ? JSON.parse(savedBuys) : [];
      const itemExists = buys.some(item => item.nombre === nombre && item.precio === precio);
      setIsInBuys(itemExists);
    }, [nombre, precio]);
  
    const handleClick = () => {
      const list = { nombre, precio };
      const savedBuys = localStorage.getItem('buys');
      const buys = savedBuys ? JSON.parse(savedBuys) : [];
  
      if (isInBuys) {
        const newBuys = buys.filter(item => item.nombre !== nombre || item.precio !== precio);
        localStorage.setItem('buys', JSON.stringify(newBuys));
        setIsInBuys(false);
      } else {
        const newBuys = [...buys, list];
        localStorage.setItem('buys', JSON.stringify(newBuys));
        setIsInBuys(true);
      }
    };


  return (
    <section className='group flex flex-col z-1 text-white'>
      <h2 className='w-full h-[3rem] flex items-center justify-center font-semibold text-center rounded-t-xl bg-[#5867fe] bg-opacity-55'>
        {nombre}
      </h2>
      <figure className='relative overflow-hidden'>
        <img className='w-full h-[20rem] z-1' src={imagen} alt={nombre} />
        <figcaption className='z-20 absolute bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-20 w-full h-fit p-2'>
          {descripcion}
        </figcaption>
      </figure>
      <span className='z-30 w-full h-[3rem] flex items-center justify-center font-semibold text-center bg-[#5867FE] bg-opacity-55'>
        S/. {(precio).toFixed(2)}
      </span>
      <button onClick={handleClick} className={`${isInBuys ? 'bg-red-500 hover:bg-red-400' : 'bg-[#1abc9c] hover:bg-[#16a085]'} z-30 w-full h-[3rem] rounded-b-xl transition-all duration-300 transform hover:scale-105 uppercase font-bold `}>
        {isInBuys ? 'Remover' : 'Comprar'}
      </button>
    </section>
  );
};
