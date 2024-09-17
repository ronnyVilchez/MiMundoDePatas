
import React from 'react'
import { Link } from 'react-router-dom'

import MapPrimavera from '../Components/MapaPrimavera'
import MapaDorado from '../Components/MapaDorado'
import { CardOpcion } from './CardOpcion'

export const Dashboard = () => {
    return (
        <>
            <header className='bg-[#f88acc] font-Poppins sm:w-full flex flex-col sm:flex-row gap-4 p-2'>
                <section className='flex flex-col gap-4 w-full sm:w-1/2'>
                    <h1 className='font-semibold text-[4vh] sm:text-[5vw]'>Mi Mundo de Patas</h1>
                    <h3 className='font-semibold sm:text-[2vw] text-[2vh]'>Mascotitas Pet Shop</h3>
                    <p className='px-3'>
                    "Somos tu veterinaria de confianza, dedicada al bienestar de tus mascotas, con productos y servicios de alta calidad para garantizar su salud y felicidad. Ofrecemos un enfoque personalizado para cada una de tus mascotas, asegurando que reciban el cuidado y atención que merecen. Nuestro equipo de expertos está comprometido con la excelencia y la empatía, proporcionando un ambiente cálido y profesional para que tanto tú como tus mascotas se sientan seguros y bien cuidados."
                    </p>
                </section>

                <section className='flex w-full sm:w-1/2'>
                    <img className='rounded-xl w-full h-full' src="/images/medico-veterinario-05.jpg" alt="profile" />
                </section>
            </header>

            <section className='bg-[#fcb0dd] font-Poppins flex flex-col gap-8 text-center py-4'>
                <h2 className='sm:text-[2vw] text-[2.7vh]  font-semibold'>NUESTROS PRODUCTOS</h2>
                <p className='text-[2vh] sm:text-[1.5vw] '>
                "Descubre nuestra selección de productos especializados para el cuidado y salud de tus mascotas. Ofrecemos alimentos, accesorios y medicinas de la mejor calidad."</p>
                <section className='flex flex-col sm:flex-row gap-8 justify-evenly items-center'>

                    <CardOpcion
                        img={"/images/products/food.jpg"}
                        descrip={'Premium Dog Food'}
                        link={'food'}
                        linktext={'Ver más'}
                    />

                    <CardOpcion
                        img={"/images/products/spa.png"}
                        descrip={'Health and Beauty'}
                        link={'health'}
                        linktext={'Ver más'}
                    />
                    <CardOpcion
                        img={"/images/products/accs.jpeg"}
                        descrip={'Pet Accessories'}
                        link={'accesories'}
                        linktext={'Ver más'}
                    />
                </section>
                <div className=" h-[4px] bg-[#f88acc] w-[70%] sm:w-[90%] flex mx-auto"></div>
            </section>

            <section className='bg-[#fcb0dd] font-Poppins flex flex-col gap-8 text-center py-4'>
                <h2 className='sm:text-[2vw] text-[2.7vh] font-semibold'>SERVICIOS</h2>
                <p className='text-[2vh] sm:text-[1.5vw]'>"Ofrecemos una amplia gama de servicios especializados, diseñados para cubrir todas tus necesidades. Nos comprometemos a brindarte atención personalizada y soluciones eficientes."</p>
                <section className='flex flex-col sm:flex-row gap-8 justify-evenly items-center'>

                    <CardOpcion
                        img={"/images/services/cirujia.jpg"}
                        descrip={'Cirugias'}
                        link={'schedule'}
                        spanDes={'chancos,perros, michos'}
                        linktext={'Agendar'}
                    />
                    <CardOpcion
                        img={"/images/services/corte.jpg"}
                        descrip={'Baño y corte'}
                        link={'schedule'}
                        spanDes={'perros, michos'}
                        linktext={'Agendar'}
                    />
                    <CardOpcion
                        img={"/images/services/vacuna.jpg"}
                        descrip={'Tratamientos'}
                        link={'schedule'}
                        spanDes={'Desparacitacion,etc'}
                        linktext={'Agendar'}
                    />
                  
                </section>
                <div className=" h-[4px] bg-[#f88acc] w-[70%] sm:w-[90%] flex mx-auto"></div>

            </section>

            <section className='bg-[#fcb0dd] font-Poppins flex flex-col gap-8 text-center py-8'>
                <h2 className='sm:text-[2vw] text-[2.7vh] font-semibold uppercase'>Staff de especialistas</h2>
                <p className='text-[2vh] sm:text-[1.5vw]'>"Nuestro staff de especialistas está formado por profesionales experimentados, dedicados a ofrecer soluciones de alta calidad. Siempre enfocados en brindar el mejor servicio personalizado para cada cliente."</p>
                <section className='flex flex-col sm:flex-row gap-10 justify-evenly items-center'>
              
                    <section className='flex flex-col items-center gap-3 px-4'>
                        <img className='rounded-xl' src="/images/staff/dr1.jpg" alt="img" width={200} />
                        <h2 className='font-semibold'>Dr. Sarah Smith</h2>
                        <span>Veterinarian</span>
                        <span>Dr. Smith has over 10 years of experience in veterinary medicine, specializing in small animal care.</span>
                    </section>
                    <section className='flex flex-col items-center gap-3 px-4'>
                        <img className='rounded-xl' src="/images/staff/dr2.jpg" alt="img" width={200} />
                        <h2 className='font-semibold'>Dr. David Johnson</h2>
                        <span>Veterinarian</span>
                        <span>Dr. Johnson has been practicing veterinary medicine for over 15 years, with a focus on preventive care and animal wellness.</span>
                    </section>
                    <section className='flex flex-col items-center gap-3 px-4'>
                        <img className='rounded-xl' src="/images/staff/dr3.jpg" alt="img" width={200} />
                        <h2 className='font-semibold'>Dr. Mia Lee</h2>
                        <span>Veterinarian</span>
                        <span>Dr. Lee is a recent graduate with a passion for animal behavior and holistic pet care.</span>
                    </section>
                </section>

            </section>

            <footer className='bg-[#f88acc] font-Poppins flex flex-col gap-4 sm:gap-0 sm:flex-row p-2 sm:justify-around w-full sm:items-center'>

                <section className='flex flex-col sm:w-1/2 '>
                    <h2>SIGUENOS EN TODAS NUESTRAS REDES</h2>
                    <section className='flex flex-row justify-evenly'>
                        <Link>
                            <img src="/images/Facebook.svg" alt="Facebook" width={50} />
                        </Link>

                        <Link>
                            <img src="/images/Twitter.svg" alt="Twitter" width={50} />
                        </Link>

                        <Link>
                            <img src="/images/insta.svg" alt="insta" width={50} />
                        </Link>

                        <Link>
                            <img src="/images/tiktok.svg" alt="tiktok" width={50} />
                        </Link>
                    </section>


                </section>

                <section className='flex flex-col sm:w-1/2 gap-4'>
                    <h2>VISITANOS EN:</h2>
                    <MapPrimavera />
                    {/*  <Link  to={'https://maps.app.goo.gl/aAT3uUZjEqzJaZ1h7'}>La Primavera: Eleodoro Demetrio Coral N°125, Chiclayo.</Link> */}
                    {/*  <Link to={'https://maps.app.goo.gl/KQpZzyq2QPR2YYH96'}>Mochoqueque: Avenida Kennedy & Palmeras, Chiclayo.</Link> */}
                    <MapaDorado />

                </section>
            </footer>

        </>
    )
}

