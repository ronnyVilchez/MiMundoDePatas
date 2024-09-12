
import accsArray from './../accs.json'
import { Card } from './Card';


export const Accesories = () => {

    return (
        <main className='w-full h-full p-10 bg-[#fcb0dd]'>
            <h2 className='text-center text-[2rem] font-semibold uppercase
            '>Productos de primera calidad</h2>
            <section className='grid grid-cols-[18rem_18rem_18rem] place-content-evenly overflow-x-hidden gap-16 p-4'>
                {
                    accsArray &&
                    accsArray.map((item) => (
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

