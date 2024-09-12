import React from 'react'

import foodArray from '/src/food.json'
import { Card } from './Card';


export const Food = () => {

    console.log(foodArray);
    return (
        <main className='w-full h-full p-10 bg-[#fcb0dd]'>
            <h2 className='text-center text-[2rem] font-semibold uppercase
            '>Productos de primera calidad</h2>
            <section className='grid grid-cols-[18rem_18rem_18rem] place-content-evenly overflow-x-hidden gap-16 p-4'>
                {
                    foodArray &&
                    foodArray.map((item) => (
                        <Card
                            id={item.id}
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
