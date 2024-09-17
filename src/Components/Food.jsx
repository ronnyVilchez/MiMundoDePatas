import React from 'react'

import foodArray from './../food.json'
import { Card } from './Card';


export const Food = () => {

    return (
        <main className='w-full h-full p-10 bg-[#fcb0dd]'>
            <h2 className='text-center text-[2rem] font-semibold uppercase
            '>Productos de primera calidad</h2>
            <section className=' sm:grid sm:grid-cols-[18rem_18rem_18rem] sm:place-content-evenly sm:overflow-x-hidden flex flex-col gap-12 sm:gap-16 p-4'>
                {
                    foodArray &&
                    foodArray.map((item) => (
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
