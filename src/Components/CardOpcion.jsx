import React from 'react'
import { Link } from 'react-router-dom'

export const CardOpcion = ({img,descrip,link,linktext,spanDes}) => {
    return (
        <div className='flex flex-col gap-4 ' >
            <img className='rounded-xl w-[200px] h-[220px] transition-transform duration-300 ease-in-out transform hover:scale-125' src={img} alt={descrip} />
            <h2 className='text-[1.3rem]'>{descrip}</h2>
            <span>{spanDes}</span>
            <Link to={`/${link}`} className='bg-[#1abc9c] text-white py-2 px-4 rounded shadow-lg transition-all duration-300 transform hover:bg-[#16a085] hover:scale-105 uppercase font-bold'>{linktext}</Link>
        </div>
    )
}
