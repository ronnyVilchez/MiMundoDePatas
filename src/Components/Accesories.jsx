
import accsArray from './../accs.json'
import { Card } from './Card';


export const Accesories = () => {

    return (
        <main className='w-full h-full font-Poppins p-10 bg-[#fcb0dd]'>
            <h2 className='text-center text-[2rem] font-semibold uppercase
            '>Encuentra los Accesorios Perfectos para tu Compañero</h2>
            <section className=' sm:grid sm:grid-cols-[18rem_18rem_18rem] sm:place-content-evenly sm:overflow-x-hidden flex flex-col gap-12 sm:gap-16 p-4'>
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

