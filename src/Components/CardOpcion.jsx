import React from 'react'
import { Link } from 'react-router-dom'

export const CardOpcion = ({img,descrip,link,linktext,spanDes}) => {
    return (
        <div className='flex flex-col gap-4 ' >
            <img className='rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-125' src={img} alt={descrip} width={200} />
            <h2 className='text-[1.3rem]'>{descrip}</h2>
            <span>{spanDes}</span>
            <Link to={`/${link}`} className='bg-[#5867fe] hover:bg-[#8690fa] rounded-lg h-[3rem] items-center flex justify-center text-[1.2rem] text-white font-semibold'>{linktext}</Link>
        </div>
    )
}
