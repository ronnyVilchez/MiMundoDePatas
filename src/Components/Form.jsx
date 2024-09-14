import React, { useState } from 'react';

export const VetAppointmentForm = () => {

  const [formData, setFormData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(

      new FormData(e.target)
    )
    setFormData(form)
    console.log(form);
    const mensaje = `
    📋 *Datos de la Cita*:
    👤 Dueño: ${form.dueño}
    🐶 Mascota: ${form.mascota}
    📞 Teléfono: ${form.telefono}
    ✉️ Email: ${form.email}
    📅 Edad de la Mascota: ${form.edad}
    🐾 Raza: ${form.raza}
    💬 Motivo: ${form.motivo}
    📝 Descripción: ${form.descripcion}
    ℹ️ Info Adicional: ${form.infoAd || 'N/A'}
    `;

    const url = `https://api.whatsapp.com/send?phone=955112484&text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank'); // Abrir WhatsApp en una nueva pestaña
 
  };

  return (
    <section className='p-4 max-w-lg mx-auto'>
      <h1 className='text-xl font-semibold mb-4'>Agendar Cita con el Veterinario</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <section>
          <label htmlFor='dueno' className='block text-sm font-medium'>Nombre del Dueño</label>
          <input
            type='text'
            id='dueno'
            name='dueño'
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </section>

        <section>
          <label htmlFor='mascota' className='block text-sm font-medium'>Nombre de la Mascota</label>
          <input
            type='text'
            id='mascota'
            name='mascota'
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </section>

        <section>
          <label htmlFor='telefono' className='block text-sm font-medium'>Teléfono del Dueño</label>
          <input
            type='tel'
            id='telefono'
            name='telefono'
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </section>

        <section>
          <label htmlFor='email' className='block text-sm font-medium'>Email del Dueño</label>
          <input
            type='email'
            id='email'
            name='email'
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </section>

        <section>
          <label htmlFor='edad' className='block text-sm font-medium'>Edad de la Mascota</label>
          <input
            type='number'
            id='edad'
            name='edad'
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </section>

        <section>
          <label htmlFor='raza' className='block text-sm font-medium'>Raza de la Mascota</label>
          <input
            type='text'
            id='raza'
            name='raza'
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </section>

        <section>
          <label htmlFor='motivo' className='block text-sm font-medium'>Motivo de la Cita</label>
          <select
            id='motivo'
            name='motivo'
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          >
            <option value='' disabled>Selecciona el motivo</option>
            <option value='bath'>Baño</option>
            <option value='treatment'>Tratamiento</option>
            <option value='surgery'>Cirugía</option>
          </select>
        </section>

      
        <section>
          <label htmlFor='descripcion' className='block text-sm font-medium'>Descripción del Motivo</label>
          <textarea
            id='descripcion'
            name='descripcion'
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            rows='4'
            required
          />
        </section>

        <section>
          <label htmlFor='infoAd' className='block text-sm font-medium'>Información Adicional</label>
          <textarea
            id='infoAd'
            name='infoAd'
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            rows='4'
          />
        </section>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
        >
          Agendar Cita
        </button>
      </form>
    </section>
  );
};

