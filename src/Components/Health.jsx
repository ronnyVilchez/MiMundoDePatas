import React from 'react'
import arrayHealt from './../healt.json'
import { Card } from './Card'

export const Health = () => {
    return (
        <main className='w-full font-Poppins h-full p-10 bg-animated-gradient bg-gradient-to-r from-[#588157] to-[#ffeb3b] bg-size-400% min-h-screen animation-gradient'>
            <h2 className='text-center text-[2rem] font-semibold uppercase
            '>Bienestar y Belleza: Soluciones para tu Mascota</h2>
            <section className=' sm:grid sm:grid-cols-[18rem_18rem_18rem] sm:place-content-evenly sm:overflow-x-hidden flex flex-col gap-12 sm:gap-16 p-4'>
                {
                    arrayHealt &&
                    arrayHealt.map((item) => (
                        <Card
                            key={item.id}
                            nombre={item.nombre}
                            imagen={item.imagen}
                            descripcion={item.descripcion}
                            precio={item.precio}
                        />
                    ))
                }

            </section>
        </main>

    )
}

