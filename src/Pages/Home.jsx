import React from 'react'
import { Link } from 'react-router-dom'

import MapPrimavera from '../Components/MapaPrimavera'
import MapaDorado from '../Components/MapaDorado'

export const Home = () => {
  return (
    <>
      <header className='bg-[#f88acc] flex flex-row p-2'>
        <section className='flex flex-col gap-4'>
          <h1 className='font-semibold text-[5vw]'>Mi Mundo de Patas</h1>
          <h3 className='font-semibold text-[2vw]'>Mascotitas Pet Shop</h3>
          <p className='px-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>

        <section>
          <img className='rounded-xl' src="/public/images/medico-veterinario-05.jpg" alt="profile" width={2500} />
        </section>
      </header>

      <section className='bg-[#fcb0dd] flex flex-col gap-8 text-center py-4'>
        <h2 className='text-[2vw] font-semibold'>NUESTROS PRODUCTOS</h2>
        <p className='text-[1.5vw]'>Browse our selection of high-quality pet supplies and accessories to keep your furry friends happy and healthy.</p>
        <section className='flex flex-row gap-8 justify-evenly items-center'>
          <div className='flex flex-col' >
            <img src="/public/images/logo.jpg" alt="img" width={200} />
            <h2>Premium Dog Food</h2>
            <span>S/99.99</span>
            <button>Comprar</button>
          </div>
          <div className='flex flex-col' >
            <img src="/public/images/logo.jpg" alt="img" width={200} />
            <h2>Health and Beauty</h2>
            <span>S/99.99</span>
            <button>Comprar</button>
          </div>
          <div className='flex flex-col' >
            <img src="/public/images/logo.jpg" alt="img" width={200} />
            <h2>Pet Accessories</h2>
            <span>S/99.99</span>
            <button>Comprar</button>
          </div>
        </section>
      </section>

      <section className='bg-[#fcb0dd] flex flex-col gap-8 text-center py-4'>
        <h2 className='text-[2vw] font-semibold'>SERVICIOS</h2>
        <p className='text-[1.5vw]'>From routine check-ups to specialized treatments, our experienced veterinarians are dedicated to providing comprehensive care for your pets.</p>
        <section className='flex flex-row gap-8 justify-evenly items-center'>
          <div className='flex flex-col'>
            <img src="/public/images/logo.jpg" alt="img" width={200} />
            <h2>Cirugias</h2>
            <span>chancos,perros, michos</span>
            <button>Agendar</button>
          </div>
          <div className='flex flex-col'>
            <img src="/public/images/logo.jpg" alt="img" width={200} />
            <h2>Baño y corte</h2>
            <span>perros, michos</span>
            <button>Agendar</button>
          </div>
          <div className='flex flex-col'>
            <img src="/public/images/logo.jpg" alt="img" width={200} />
            <h2>Tratamientos</h2>
            <span>Desparacitacion,etc</span>
            <button>Agendar</button>
          </div>
        </section>
      </section>

      <section className='bg-[#fcb0dd] flex flex-col gap-8 text-center py-4'>
        <h2 className='text-[2vw] font-semibold'>Meet Our Veterinarians</h2>
        <p className='text-[1.5vw]'>Our team of experienced veterinarians is dedicated to providing the highest level of care for your pets.</p>
        <section className='flex flex-row gap-8 justify-evenly items-center'>
          <div className='flex flex-col items-center px-4'>
            <img src="/public/images/logo.jpg" alt="img" width={200} />
            <h2 className='font-semibold'>Dr. Sarah Smith</h2>
            <span>Veterinarian</span>
            <span>Dr. Smith has over 10 years of experience in veterinary medicine, specializing in small animal care.</span>
          </div>
          <div className='flex flex-col items-center px-4'>
            <img src="/public/images/logo.jpg" alt="img" width={200} />
            <h2 className='font-semibold'>Dr. David Johnson</h2>
            <span>Veterinarian</span>
            <span>Dr. Johnson has been practicing veterinary medicine for over 15 years, with a focus on preventive care and animal wellness.</span>
          </div>
          <div className='flex flex-col items-center px-4'>
            <img src="/public/images/logo.jpg" alt="img" width={200} />
            <h2 className='font-semibold'>Dr. Mia Lee</h2>
            <span>Veterinarian</span>
            <span>Dr. Lee is a recent graduate with a passion for animal behavior and holistic pet care.</span>
          </div>
        </section>

      </section>

      <footer className='bg-[#f88acc] flex flex-row p-2 justify-around items-center'>

        <section className='flex flex-col w-1/2'>
          <h2>SIGUENOS EN TODAS NUESTRAS REDES</h2>
          <section className='flex flex-row justify-evenly'>
            <Link>
              <img src="/public/images/Facebook.svg" alt="Facebook" width={50} />
            </Link>

            <Link>
              <img src="/public/images/Twitter.svg" alt="Twitter" width={50} />
            </Link>

            <Link>
              <img src="/public/images/insta.svg" alt="insta" width={50} />
            </Link>

            <Link>
              <img src="/public/images/tiktok.svg" alt="tiktok" width={50} />
            </Link>
          </section>


        </section>

        <section className='flex flex-col w-1/2 gap-4'>
          <h2>VISITANOS EN:</h2>
          <MapPrimavera/>
         {/*  <Link  to={'https://maps.app.goo.gl/aAT3uUZjEqzJaZ1h7'}>La Primavera: Eleodoro Demetrio Coral N°125, Chiclayo.</Link> */}
         {/*  <Link to={'https://maps.app.goo.gl/KQpZzyq2QPR2YYH96'}>Mochoqueque: Avenida Kennedy & Palmeras, Chiclayo.</Link> */}
         <MapaDorado/>

        </section>
      </footer>



    {/*   <section className='flex flex-row gap-8'>
            <section className='flex flex-col'>
              <p>La Primavera: Eleodoro Demetrio Coral N°125, Chiclayo.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0571029846687!2d-79.8527326606619!3d-6.762892189847743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ceee785255b99%3A0x197d5c5ea908f78b!2sEleodoro%20Demetrio%20Coral%2029%2C%20Chiclayo%2014009!5e0!3m2!1ses-419!2spe!4v1723952493105!5m2!1ses-419!2spe" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <section className='flex flex-col' >
              <p>Mochoqueque: Avenida Kennedy & Palmeras, Chiclayo.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.63158746544326!2d-79.84387481694665!3d-6.757000060572142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ceec44b95ea7f%3A0x6f9d7b55daab0529!2sMimaskot!5e0!3m2!1ses-419!2spe!4v1723953392171!5m2!1ses-419!2spe" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
          </section> */}
    </>
  )
}
