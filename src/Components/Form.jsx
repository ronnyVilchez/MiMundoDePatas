import { useRef } from "react";

export const VetAppointmentForm = () => {
  const formRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(

      new FormData(e.target)
    )
    const date = new Date(form.fecha);
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = date.toLocaleDateString('es-ES', opciones);

    const mensaje = `
    📋 *Datos de la Cita*:
    👤 Dueño: ${form.dueño}
    🐶 Mascota: ${form.mascota}
    📞 Teléfono: ${form.telefono}
    ✉️ Email: ${form.email}
    📅 Edad de la Mascota: ${form.edad}
    🐾 Raza: ${form.raza}
    💬 Motivo: ${form.motivo}
    📆 Fecha: ${fechaFormateada}
    🕑 Hora: ${form.hora}:${form.minuto} ${form.ampm}.
    📝 Descripción: ${form.descripcion}
    ℹ️ Info Adicional: ${form.infoAd || 'N/A'}
    `;

    const url = `https://api.whatsapp.com/send?phone=955112484&text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank'); // Abrir WhatsApp en una nueva pestaña
    formRef.current.reset()
    // FormData.reset()
  };

  return (
    <main className="className='w-full font-Poppins h-full p-10 bg-animated-gradient bg-gradient-to-r from-[#588157] to-[#ffeb3b] bg-size-400% min-h-screen animation-gradient">
      <section className='p-4 bg-[#fcb0dd] max-w-lg mx-auto'>
        <h1 className='text-xl font-semibold mb-4'>Agendar tu Cita, llena el siguiente formulario:</h1>
        <form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
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
              type='text'
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
              <option value='Baño'>Baño</option>
              <option value='Tratamiento'>Tratamiento</option>
              <option value='Cirugía'>Cirugía</option>
            </select>
          </section>

          <section>
            <label htmlFor='fecha' className='block text-sm font-medium'>Fecha</label>
            <input
              id='fecha'
              name='fecha'
              className='mt-1 block w-full border border-gray-300 rounded-md p-2'
              type='date'
              required
            />
          </section>

          <section>
            <label htmlFor='hora' className='block text-sm font-medium'>Hora</label>
            <section className='flex space-x-2 mt-1'>
              {/* Selecciona la hora */}
              <select required id='hora' name='hora' className='border border-gray-300 rounded-md p-2'>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              {/* Selecciona los minutos */}
              <select required id='minuto' name='minuto' className='border border-gray-300 rounded-md p-2'>
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={i.toString().padStart(2, '0')}>
                    {i.toString().padStart(2, '0')}
                  </option>
                ))}
              </select>

              {/* AM o PM */}
              <select required id='ampm' name='ampm' className='border border-gray-300 rounded-md p-2'>
                <option value='AM'>AM</option>
                <option value='PM'>PM</option>
              </select>
            </section>
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
            className='w-full bg-[#f88acc] text-white py-2 rounded-md hover:bg-[#f578c3]'
          >
            Agendar Cita
          </button>
        </form>
      </section>
    </main>

  );
};

