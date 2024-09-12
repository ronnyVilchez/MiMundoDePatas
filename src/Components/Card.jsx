import React from 'react'

export const Card = ({ imagen, nombre, descripcion, precio }) => {
  return (
    <figure className='relative flex flex-col shadow-lg group ' >
      <h2 className='  w-full h-[3rem] flex items-center justify-center font-semibold text-center rounded-t-xl bg-[#5867FE] bg-opacity-55'>{nombre}</h2>
      <img className='' src={imagen} alt={nombre} />
      <figcaption className=' absolute bottom-[6rem] bg-yellow-200 invisible group-hover:visible w-full h-fit p-2  ' > {descripcion}</figcaption>
      <span className=' w-full h-[3rem] flex items-center justify-center font-semibold text-center bg-[#5867FE] bg-opacity-55'>S/. {precio}</span>
      <button className={`w-full bg-orange-500 h-[3rem] rounded-b-xl hover:bg-orange-400`} >Comprar</button>
    </figure>
  )
}
