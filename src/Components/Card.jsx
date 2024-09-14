import React from 'react'

export const Card = ({ imagen, nombre, descripcion, precio }) => {
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
        S/. {precio}
      </span>
      <button className='z-30 w-full bg-orange-500 h-[3rem] rounded-b-xl hover:bg-orange-400'>
        Comprar
      </button>
    </section>



  )
}
